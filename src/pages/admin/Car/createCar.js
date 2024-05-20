import React, { useState, useEffect } from "react";
import Select from "react-select";

import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import ButtonLoader from "../../../component/Common/ButtonLoader";
import { Link, useHistory } from "react-router-dom";
import left_chevron from "../../../assets/images-new/left-chevron.svg";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
const CreateCar = props => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [varients, setVarients] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);


  const [frontView, setFrontView] = useState(null);
const [frontRight, setFrontRight] = useState(null);
const [leftView, setLeftView] = useState(null);
const [rearView, setRearView] = useState(null);
const [odometer, setOdometer] = useState(null);
const [chessis, setChessis] = useState(null);
  const [statePayload, setStatePayload] = useState({
    model_id: "",
    brand_id: "",
    varient_id: "",
    kms_driven: "",
    ownership: "",
    manufacturing_year: "",
    registration_year: "",
    registration_state: "",
    car_location: "",
    registration_number: "",
    insurance_validity: "",
    ex_showroom: "",
    price: "",
    car_description: "",
    front_view: frontView || "",
    front_right: frontRight || "",
    left_view: leftView || "",
    rear_view: rearView || "",
    odometer: odometer || "",
    chessis: chessis || "",
    status: "",
  });

  const handleInput = event => {
    const { name, value } = event.target;

    setStatePayload(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBrandSelection = brandId => {
    setStatePayload(prevState => ({
      ...prevState,
      brand_id: brandId,
    }));
  };
  const handleModelSelection = modelId => {
    setStatePayload(prevState => ({
      ...prevState,
      model_id: modelId,
    }));
  };
  const handleVarientSelection = varientId => {
    setStatePayload(prevState => ({
      ...prevState,
      varient_id: varientId,
    }));
  };
  const handleImageFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    const fieldValue = e.target.value;
  
    if (fieldName === "front_view") {
      setFrontView(file);
    } else if (fieldName === "front_right") {
      setFrontRight(file);
    } else if (fieldName === "left_view") {
      setLeftView(file);
    } else if (fieldName === "rear_view") {
      setRearView(file);
    } else if (fieldName === "odometer") {
      setOdometer(file);
    } else if (fieldName === "chessis") {
      setChessis(file);
    }
  
    setStatePayload(prevState => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const createNewCar = payload => {
    const formData = new FormData();

    Object.keys(payload).forEach(key => {
      if (key === "front_view" && payload[key]) {
        formData.append("front_view", payload[key]);
      } else if (key === "front_right" && payload[key]) {
        formData.append("front_right", payload[key]);
      } else if (key === "left_view" && payload[key]) {
        formData.append("left_view", payload[key]);
      } else if (key === "rear_view" && payload[key]) {
        formData.append("rear_view", payload[key]);
      } else if (key === "odometer" && payload[key]) {
        formData.append("odometer", payload[key]);
      } else if (key === "chessis" && payload[key]) {
        formData.append("chessis", payload[key]);
      } else {
        formData.append(key, payload[key]);
      }
    });
   
    console.log("payload");
    console.log(payload);
    axios
      .post(`${process.env.REACT_APP_API_URL}/car/create-car`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        setIsLoading(false);
        console.log(res);
       
          toast.success(res.data?.msg || "Car Created successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });

          history.push("/car-management");
        
      })
      .catch(function (error) {
        toast.error(
          error?.response?.data?.msg ||
            "Car already exists. Unable to create a new Car.",
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
    let { car_description,status } = statePayload;
  

    if (!car_description) {
      errorObj["car_name"] = "Please choose a valid car_name!";
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
    payload.append("model_id", statePayload?.model_id);
    payload.append("brand_id", statePayload?.brand_id);
    payload.append("varient_id", statePayload?.varient_id);
    payload.append("kms_driven", statePayload?.kms_driven);
    payload.append("ownership", statePayload?.ownership);
    payload.append("manufacturing_year", statePayload?.manufacturing_year);
    payload.append("registration_year", statePayload?.registration_year);
    payload.append("registration_state", statePayload?.registration_state);
    payload.append("car_location", statePayload?.car_location);
    payload.append("registration_number", statePayload?.registration_number);
    payload.append("insurance_validity", statePayload?.insurance_validity);
    payload.append("ex_showroom", statePayload?.ex_showroom);
    payload.append("price", statePayload?.price);
    payload.append("car_description", statePayload?.car_description);
    payload.append("status", statePayload?.status);
    // Calling the api and saving data;
    createNewCar(payload);
  };


  const fetchBrandData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/brand/brand-list `)
      .then(response => {
        const { success, allBrands } = response.data;
        if (success) {
          const { allBrands } = response.data;
          let data = allBrands?.map(item => ({
            id: item?.id,
            label: item?.brand_name,
            value: item?.brand_name,
          }));
          setBrands(data);
        }
      })
      .catch(err => console.log("Error:::", err));
  };
  const fetchModelData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/model/fetch-model`)
      .then(response => {
        const { success, allModels } = response.data;
        if (success) {
          const { allModels } = response.data;
          let data = allModels?.map(item => ({
            id: item?.id,
            label: item?.model_name,
            value: item?.model_name,
          }));
          setModels(data);
        }
      })
      .catch(err => console.log("Error:::", err));
  };
  const fetchVarientData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/varient/fetch-varient`)
      .then(response => {
        const { success, allVarients } = response.data;
        if (success) {
          const { allVarients } = response.data;
          let data = allVarients?.map(item => ({
            id: item?.id,
            label: item?.varient_name,
            value: item?.varient_name,
          }));
          setVarients(data);
        }
      })
      .catch(err => console.log("Error:::", err));
  };
  useEffect(() => {
    fetchBrandData();
    fetchModelData();
    fetchVarientData();

    return () => {};
  }, []);




  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove mb-3">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/create-car" className="active-btn">
                    Manage Car
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12} className="">
            <div className="breadcums mt-3">
              <ul>
                <li>
                  <Link to="/car-management">
                    <span>
                      <img src={left_chevron} alt="chevron" />
                    </span>
                    Create Car
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
                      Brand<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="brand_id"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                      onChange={e => handleBrandSelection(e.target?.value)}
                    >
                      <option selected disabled>
                        Select Brand
                      </option>
                      {brands &&
                        brands.map(el => {
                          return (
                            <option key={el?.value} value={el?.id}>
                              {el?.label}
                            </option>
                          );
                        })}
                    </select>
                    {errors?.brand_id && (
                      <small className="text-danger"> {errors?.brand_id} </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Model<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="model_id"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                      onChange={e => handleModelSelection(e.target?.value)}
                    >
                      <option selected disabled>
                        Select Model
                      </option>
                      {models &&
                        models.map(el => {
                          return (
                            <option key={el?.value} value={el?.id}>
                              {el?.label}
                            </option>
                          );
                        })}
                    </select>
                    {errors?.model_id && (
                      <small className="text-danger"> {errors?.model_id} </small>
                    )}
                  </Form.Group>
                </Col>
                
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Varient<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="varient_id"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                      onChange={e => handleVarientSelection(e.target?.value)}
                    >
                      <option selected disabled>
                        Select Varient
                      </option>
                      {varients &&
                        varients.map(el => {
                          return (
                            <option key={el?.value} value={el?.id}>
                              {el?.label}
                            </option>
                          );
                        })}
                    </select>
                    {errors?.varient_id && (
                      <small className="text-danger"> {errors?.varient_id} </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                      Kms Driven
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="kms_driven"
                      value={statePayload.kms_driven}
                      onChange={handleInput}
                    />
                    {errors.kms_driven && (
                      <small className="text-danger">
                        {" "}
                        {errors.kms_driven}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Ownership<sup>*</sup>
                    </Form.Label>
                    <select
                      type="select"
                      name="ownership"
                      className="col-md-6 mb-1 form-control form-select"
                      style={{ width: "100%" }}
                       onChange={handleInput}
                    >
                      <option selected disabled>
                        Select Ownership
                      </option>
                     
                            <option value="First Owner">
                              First Owner
                            </option>
                            <option value="Second Owner">
                            Second Owner
                            </option>
                            <option value="Third Owner">
                              Third Owner
                            </option>
                            <option value="Fourth Owner">
                            Fourth Owner
                            </option>
                            <option value="Unregistered">
                            Unregistered
                            </option>
                        
                    </select>
                    {errors?.ownership && (
                      <small className="text-danger"> {errors?.ownership} </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Manufacturing Year
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="manufacturing_year"
                      value={statePayload.manufacturing_year}
                      onChange={handleInput}
                    />
                    {errors.manufacturing_year && (
                      <small className="text-danger">
                        {" "}
                        {errors.manufacturing_year}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Registration Year
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="registration_year"
                      value={statePayload.registration_year}
                      onChange={handleInput}
                    />
                    {errors.registration_year && (
                      <small className="text-danger">
                        {" "}
                        {errors.registration_year}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Registration State
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="registration_state"
                      value={statePayload.registration_state}
                      onChange={handleInput}
                    />
                    {errors.registration_state && (
                      <small className="text-danger">
                        {" "}
                        {errors.registration_state}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Car Location
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="car_location"
                      value={statePayload.car_location}
                      onChange={handleInput}
                    />
                    {errors.car_location && (
                      <small className="text-danger">
                        {" "}
                        {errors.car_location}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Registration Number
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="registration_number"
                      value={statePayload.registration_number}
                      onChange={handleInput}
                    />
                    {errors.registration_number && (
                      <small className="text-danger">
                        {" "}
                        {errors.registration_number}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Insurance Validity
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="insurance_validity"
                      value={statePayload.insurance_validity}
                      onChange={handleInput}
                    />
                    {errors.insurance_validity && (
                      <small className="text-danger">
                        {" "}
                        {errors.insurance_validity}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Ex Showroom Price
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="ex_showroom"
                      value={statePayload.ex_showroom}
                      onChange={handleInput}
                    />
                    {errors.ex_showroom && (
                      <small className="text-danger">
                        {" "}
                        {errors.ex_showroom}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col xl={4} lg={4} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="float-label">
                    Price
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="price"
                      value={statePayload.price}
                      onChange={handleInput}
                    />
                    {errors.price && (
                      <small className="text-danger">
                        {" "}
                        {errors.price}{" "}
                      </small>
                    )}
                  </Form.Group>
                </Col>

                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Front View Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="front_view"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "front_view")}
              />
              {errors?.front_view && (
                <small className="text-danger"> {errors?.front_view} </small>
              )}
            </Form.Group>
           
            {statePayload.front_view && (
              <>
                <div>
                  <img
                    src={statePayload.front_view}
                    alt="Selected Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Front Right Corner.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="front_right"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "front_right")}
              />
              {errors?.front_right && (
                <small className="text-danger"> {errors?.front_right} </small>
              )}
            </Form.Group>
           
            {statePayload.front_right && (
              <>
                <div>
                  <img
                    src={statePayload.front_right}
                    alt="Selected Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Left View Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="left_view"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "left_view")}
              />
              {errors?.left_view && (
                <small className="text-danger"> {errors?.left_view} </small>
              )}
            </Form.Group>
           
            {statePayload.left_view && (
              <>
                <div>
                  <img
                    src={statePayload.left_view}
                    alt="Selected Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Rear View Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="rear_view"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "rear_view")}
              />
              {errors?.rear_view && (
                <small className="text-danger"> {errors?.rear_view} </small>
              )}
            </Form.Group>
           
            {statePayload.rear_view && (
              <>
                <div>
                  <img
                    src={statePayload.rear_view}
                    alt="Selected Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Odometer Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="odometer"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "odometer")}
              />
              {errors?.odometer && (
                <small className="text-danger"> {errors?.odometer} </small>
              )}
            </Form.Group>
           
            {statePayload.odometer && (
              <>
                <div>
                  <img
                    src={statePayload.odometer}
                    alt="Selected odometer Image"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </>
            )}
                </Col>
                <Col xl={4} lg={4} md={6}>
                <Form.Group className="mb-3 ">
              <Form.Label className="float-label">Chessis Image.*</Form.Label>
              <Form.Control
                type="file"
                className="form-control"
                id="image"
                name="chessis"
                accept=".jpeg, .png, .jpg, .gif"
                errorMessage="The file is required."
                onChange={e => handleImageFileChange(e, "chessis")}
              />
              {errors?.chessis && (
                <small className="text-danger"> {errors?.chessis} </small>
              )}
            </Form.Group>
           
            {statePayload.chessis && (
              <>
                <div>
                  <img
                    src={statePayload.chessis}
                    alt="Select chessis Image"
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
                <Col lg={12}>
                      <Form.Group
                        className="mb-3 d-flex flex-column"
                        controlId="formBasicSMS"
                      >
                        <Form.Label>
                        Car Description<sup>*</sup>
                        </Form.Label>
                        <ReactQuill
                          value={statePayload.car_description}
                          name="car_description"
                          onChange={(value) =>
                            setStatePayload({
                              ...statePayload,
                              car_description: value,
                            })
                          }
                          modules={{
                            toolbar: [
                              [{ header: "1" }, { header: "2" }, { font: [] }],
                              [{ size: [] }],
                              [
                                "bold",
                                "italic",
                                "underline",
                                "strike",
                                "blockquote",
                              ],
                              [
                                { list: "ordered" },
                                { list: "bullet" },
                                { indent: "-1" },
                                { indent: "+1" },
                              ],
                              ["link", "image", "video"],
                              ["clean"],
                            ],
                          }}
                          formats={[
                            "header",
                            "font",
                            "size",
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                            "list",
                            "bullet",
                            "indent",
                            "link",
                            "image",
                            "video",
                          ]}
                        />
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
                    window.location.href = "/car-management";
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

export default CreateCar;