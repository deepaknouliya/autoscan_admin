import React, { useState, useEffect } from "react";
import Select from "react-select";

import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import ButtonLoader from "../../../component/Common/ButtonLoader";
import { Link, useHistory, useParams } from "react-router-dom";
import left_chevron from "../../../assets/images-new/left-chevron.svg";
import { toast } from "react-toastify";
const EditBrand = props => {
  const history = useHistory();
  let { brandId } = useParams();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [statePayload, setStatePayload] = useState({
    brand_name: "",
    brand_img: "",
    status: "",
  });

  const handleInput = event => {
    const { name, value } = event.target;

    setStatePayload(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageFileChange = e => {
    console.log("image:", e);
    setImageFile(e.target.files[0]);
  };

  const fetchBrandDetails = () => {
    // console.log('user',userId);
    axios
      .get(`${process.env.REACT_APP_API_URL}/brand/fetch-Brand/${brandId}`)
      .then(response => {
        const { success, brand } = response.data;
        if (success) {
          setStatePayload(brand);

        }
      })
      .catch(err => console.log("Error:::", err));
  };

  useEffect(() => {
    fetchBrandDetails();

    return () => {};
  }, []);


  const editNewBrand = payload => {
    console.log("payload");
    console.log(payload);
    axios
    .patch(
      `${process.env.REACT_APP_API_URL}/brand/update-brand/${brandId}`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then(res => {
        setIsLoading(false);
        console.log(res);
       
          toast.success(res.data?.msg || "Brand Editd successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });

          history.push("/brand-management");
        
      })
      .catch(function (error) {
        toast.error(
          error?.response?.data?.msg ||
            "Brand already exists. Unable to edit a new Brand.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  };

  const handleSubmit = event => {
  
    event.preventDefault();
    setErrors({});
    setIsLoading(true);
    let errorObj = {};

    // Catching and setting errors;
    let { brand_name,status } = statePayload;
  

    if (!brand_name) {
      errorObj["brand_name"] = "Please choose a valid brand_name!";
    }
    
    if (!status) {
      errorObj["status"] = "Please choose a valid status!";
    }

    // Setting the error object if any errors are present;
    if (Object.keys(errorObj)?.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        ...errorObj,
      }));
    }
    let payload = new FormData();
    payload.append("brand_name", statePayload?.brand_name);
    payload.append("status", statePayload?.status);

    if (imageFile) {
      payload.append("brand_img", imageFile);
    }
    // Calling the api and saving data;
    editNewBrand(payload);
  };

  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove mb-3">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/edit-brand" className="active-btn">
                    Manage Brand
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12} className="">
            <div className="breadcums mt-3">
              <ul>
                <li>
                  <Link to="/brand-management">
                    <span>
                      <img src={left_chevron} alt="chevron" />
                    </span>
                    Edit Brand
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={12}>
            <div className="filter-card-form card-shadow contact-form mt-3">
              <Row>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Brand Name
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="brand_name"
                      value={statePayload.brand_name}
                      onChange={handleInput}
                    />
                    {errors.brand_name && (
                      <small className="text-danger">
                        {" "}
                        {errors.brand_name}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Brand Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="files"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={handleImageFileChange}
              />
              {errors?.files && (
                <small className="text-danger"> {errors?.files} </small>
              )}
            </Form.Group>
           
            {statePayload.files && (
              <>
                <div>
                  <img
                    src={statePayload.files}
                    alt="Selected Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Status<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="status"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                       onChange={handleInput}
                    >
                      <option selected disabled>
                        Select Status
                      </option>
                     
                            <option value="1">
                              Active
                            </option>
                            <option value="0">
                              Deactive
                            </option>
                        
                    </select>
                    {errors?.status && (
                      <small className="text-danger"> {errors?.status} </small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="cta text-center d-flex justify-content-center mt-4">
                <ButtonLoader
                  title="Save Details"
                  variant="primary"
                  style={{ marginLeft: "5px" }}
                  type="submit"
                  loading={isLoading}
                  message={"Saving"}
                  onClick={handleSubmit}
                />
                <ButtonLoader
                  className="mx-2"
                  title="Cancel"
                  variant="secondary"
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = "/brand-management";
                  }}
                  // loading={isLoading}
                  // message={"Saving"}
                />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditBrand;