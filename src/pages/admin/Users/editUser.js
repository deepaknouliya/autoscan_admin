import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import ButtonLoader from "../../../component/Common/ButtonLoader";
import { Link, useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import left_chevron from "../../../assets/images-new/left-chevron.svg";
import eye from "../../../assets/images-new/eye-crossed.svg";
import eye_open from "../../../assets/images-new/eye-open.png";

const styles = {
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#E27235" : "",
  }),
};

const editUser = props => {
  const history = useHistory();
  let { userId } = useParams();
  let selectRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [statePayload, setStatePayload] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "1", label: "Mamypoko" },
    { value: "2", label: "Sofy" },
    { value: "3", label: "Lifree" },
    // Add more options as needed
  ];
  const handleChange = selectedValues => {
    setSelectedOptions(selectedValues);
  };
  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImageUrl(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //     setFile(selectedFile);

  //   }
  // };
  // Function to handle image upload
  // const handleImageUpload = () => {
  //   // Here, you can implement your image upload logic
  //   // For example, you can use FormData to send the file to your server
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('image', file);
  //     // Example: send formData to your server using fetch or axios
  //   }
  // };

  const handleImageFileChange = e => {
    console.log("image:", e);
    setImageFile(e.target.files[0]);
  };

  const handleInput = event => {
    const { name, value } = event.target;

    setStatePayload(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRoleSelection = roleId => {
    setStatePayload(prevState => ({
      ...prevState,
      role_id: roleId,
    }));
  };

  const populateValue = () => {};

  const handleSelectChange = (value, key) => {
    setStatePayload(prevState => ({
      ...prevState,
      [key]: value?.value,
    }));
  };

  const fetchSelectValue = item => {
    if (!item) return [];

    return [
      {
        label: item,
        value: item,
      },
    ];
  };

  const updateUser = payload => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/user/update-user/${userId}`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(response => {
        setIsLoading(false);
        history.push("/user-list");
      })
      .catch(err => {
        setIsLoading(false);
        console.log("Error:", err);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors({});
    setIsLoading(true);
    let errorObj = {};

    // Catching and setting errors;
    let { password, confirm_password, role_id, phone } = statePayload;
    if (password !== confirm_password) {
      errorObj["password"] = "Passwords don't match!";
      errorObj["confirm_password"] = "Passwords don't match!";
    }

    if (phone?.length < 10) {
      errorObj["phone"] = "Phone No must be of max 10 characters!";
    }
    if (phone?.length > 10) {
      errorObj["phone"] = "Phone No must be of max 10 characters!";
    }
    if (!/^\d+$/.test(statePayload.phone)) {
      errorObj["phone"] = "Phone number should only contain numeric characters";
    } 
    if (!/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(statePayload.email)) {
      errorObj["email"] = "Invalid Format for Email";
    }
    

    if (!role_id) {
      errorObj["role_id"] = "Please choose a valid role!";
    }


    const requiredFields = ["username", "email"];

    // Check required fields
    requiredFields.forEach(field => {
      if (!statePayload[field]) {
        errorObj[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });
    // Setting the error object if any errors are present;
    if (Object.keys(errorObj)?.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        ...errorObj,
      }));
      setIsLoading(false);
      return;
    }
    // setting payload to save inside the database;
    let payload = new FormData();
    payload.append(
      "firstname",
      statePayload?.name ? statePayload.name.split(" ")[0] : ""
    );
    payload.append(
      "lastname",
      statePayload?.name ? statePayload.name.split(" ")[1] : ""
    );
    payload.append("email", statePayload?.email);
    payload.append("phone", statePayload?.phone);
    payload.append("username", statePayload?.username);
    payload.append("password", statePayload?.password);
    payload.append("change_password", statePayload?.change_password);

    // Fetching and embedding the "id" of selected role in payload;
    let selectedRole = roles?.find(item => item?.label === statePayload?.role);
    payload.append("role_id", selectedRole?.id);

    if (imageFile) {
      payload.append("image", imageFile);
    }

    // Calling the api and saving data;
    updateUser(payload);
  };

  const fetchRoleData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/role/fetch-activerole`)
      .then(response => {
        const { success, allRoles } = response.data;
        if (success) {
          const { allRoles } = response.data;
          let data = allRoles?.map(item => ({
            id: item?.id,
            label: item?.name,
            value: item?.name,
          }));
          setRoles(data);
        }
      })
      .catch(err => console.log("Error:::", err));
  };

  const fetchUserDetails = () => {
    // console.log('user',userId);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/fetch-userbyid/${userId}`)
      .then(response => {
        const { success, user } = response.data;
        if (success) {
          setStatePayload(user);
          setSelectedOptions(selectedOptions);
        }
      })
      .catch(err => console.log("Error:::", err));
  };

  useEffect(() => {
    fetchRoleData();
    fetchUserDetails();

    return () => {};
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setPassword2] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/role-list">Roles Management</Link>
                </li>
                <li className="margin-remove padding-remove">
                  <Link to="/permission-matrix">Permission Matrix</Link>
                </li>
                <li className="margin-remove padding-remove">
                  <Link to="/user-list" className="active-btn">
                    Manage User
                  </Link>
                </li>
                <li className="margin-remove padding-remove">
                  <Link to="/setting-management">Setting Management</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12} className="">
            <div className="breadcums mt-3">
              <ul>
                <li>
                  <Link to="/user-list">
                    <span>
                      <img src={left_chevron} alt="chevron" />
                    </span>
                    Edit User
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={12}>
            <div className="filter-card-form card-shadow contact-form mt-3">
              <div className="form-details-section heading pb-3">
                <div className="personal-heading">
                  <h2 className="mb-2 personal-eighteen">Personal Details:</h2>
                </div>
              </div>
              <Row>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      First Name
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="firstname"
                      value={
                        statePayload?.name ? statePayload.name.split(" ")[0] : ""
                      }
                      onChange={handleInput}
                    />
                    {errors?.firstname && (
                      <small className="text-danger">
                        {" "}
                        {errors?.firstname}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Last Name<sup>*</sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="lastname"
                      value={
                        statePayload?.name ? statePayload.name.split(" ")[1] : ""
                      }
                      onChange={handleInput}
                    />
                    {errors?.lastname && (
                      <small className="text-danger">
                        {" "}
                        {errors?.lastname}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Email<sup>*</sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="email"
                      value={statePayload?.email}
                      onChange={handleInput}
                    />
                    {errors?.email && (
                      <small className="text-danger"> {errors?.email} </small>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Phone No.<sup>*</sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="phone"
                      value={statePayload?.phone}
                      onChange={handleInput}
                    />
                    {errors?.phone && (
                      <small className="text-danger"> {errors?.phone} </small>
                    )}
                  </Form.Group>
                </Col>
                <div className="breaker"></div>
                <div className="personal-heading">
                  <h2 className="personal-eighteen mb-3 pb-2">
                    Login Details:
                  </h2>
                </div>

                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Role<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="saas_parent"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                      onChange={e => handleRoleSelection(e.target?.value)}
                    >
                      <option selected disabled>
                        Select Role
                      </option>
                      {roles &&
                        roles.map(el => {
                          return (
                            <option key={el?.value} value={el?.id}>
                              {el?.label}
                            </option>
                          );
                        })}
                    </select>
                    {errors?.role_id && (
                      <small className="text-danger"> {errors?.role_id} </small>
                    )}
                  </Form.Group>
                </Col>

                

                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Username<sup>*</sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="username"
                      value={statePayload?.username}
                      onChange={handleInput}
                    />
                    {errors?.username && (
                      <small className="text-danger">
                        {" "}
                        {errors?.username}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>

                <Form.Group className="col-md-12 mb-3 floating-label">
                  <Form.Check
                    id={1}
                    name={`change-pwd`}
                    type="switch"
                    className="h6"
                    label={"Change Password"}
                    checked={statePayload?.change_password}
                    onChange={e => {
                      setStatePayload(prevState => ({
                        ...prevState,
                        change_password: !statePayload?.change_password,
                      }));
                    }}
                  />
                </Form.Group>

                <Form.Group className="col-md-6 mb-3 floating-label">
                  <Form.Label className="float-label">Password*</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder=" "
                      disabled={!statePayload?.change_password}
                      name="password"
                      value={statePayload?.password}
                      onChange={handleInput}
                    />
                    {errors?.password && (
                      <small className="text-danger">
                        {" "}
                        {errors?.password}{" "}
                      </small>
                    )}
                    <div className="eye-form">
                      <img
                        src={showPassword ? eye_open : eye}
                        alt="Password Visibility Toggle"
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="col-md-6 mb-3 floating-label">
                  <Form.Label className="float-label">
                    Confirm Password*
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword2 ? "text" : "password"}
                      placeholder=" "
                      disabled={!statePayload?.change_password}
                      name="confirm_password"
                      value={statePayload?.confirm_password}
                      onChange={handleInput}
                    />
                    {errors?.confirm_password && (
                      <small className="text-danger">
                        {" "}
                        {errors?.confirm_password}{" "}
                      </small>
                    )}
                    <div className="eye-form">
                      <img
                        src={showPassword2 ? eye_open : eye}
                        alt="Password Visibility Toggle"
                        onClick={togglePasswordVisibility2}
                      />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="cta text-center gap-1 d-flex justify-content-center mt-4 mb-4">
                  <ButtonLoader
                    title="Save Details"
                    variant="primary"
                    style={{ marginLeft: "5px" }}
                    type="submit"
                    loading={isLoading}
                    message={"Saving"}
                    onClick={e => {
                      handleSubmit(e);
                    }}
                  />
                  <Link
                    to="/user-list"
                    style={{ marginLeft: "5px" }}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </Link>
                </Form.Group>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default editUser;
