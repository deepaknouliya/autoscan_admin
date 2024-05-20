import React, { useState, useEffect } from "react";
import Select from "react-select";

import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import ButtonLoader from "../../../component/Common/ButtonLoader";
import { Link, useHistory } from "react-router-dom";
import left_chevron from "../../../assets/images-new/left-chevron.svg";
import { toast } from "react-toastify";
const CreateVarient = props => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [statePayload, setStatePayload] = useState({
    brand_id: "",
    model_id: "",
    varient_name: "",
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

  const createNewVarient = payload => {
    console.log("payload");
    console.log(payload);
    axios
      .post(`${process.env.REACT_APP_API_URL}/varient/create-varient`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        setIsLoading(false);
        console.log(res);
       
          toast.success(res.data?.msg || "Varient Created successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });

          history.push("/varient-management");
        
      })
      .catch(function (error) {
        toast.error(
          error?.response?.data?.msg ||
            "Varient already exists. Unable to create a new Varient.",
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
    let {brand_id,model_id,varient_name,status } = statePayload;
  

    if (!brand_id) {
      errorObj["brand_id"] = "Please choose a valid Brand!";
    }
    if (!model_id) {
      errorObj["model_id"] = "Please choose a valid Model!";
    }
    if (!varient_name) {
      errorObj["varient_name"] = "Please choose a valid Varient Name!";
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
    else
    {
      let payload = new FormData();
      payload.append("brand_id", statePayload?.brand_id);
      payload.append("model_id", statePayload?.model_id);
      payload.append("varient_name", statePayload?.varient_name);
      payload.append("status", statePayload?.status);
      // Calling the api and saving data;
      createNewVarient(payload);
    }
 
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
  useEffect(() => {
    fetchBrandData();
    fetchModelData();

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
                  <Link to="/create-varient" className="active-btn">
                    Manage Varient
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12} className="">
            <div className="breadcums mt-3">
              <ul>
                <li>
                  <Link to="/varient-management">
                    <span>
                      <img src={left_chevron} alt="chevron" />
                    </span>
                    Create Varient
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
                      Varient Name
                      <sup>
                        <sup>*</sup>
                      </sup>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" "
                      name="varient_name"
                      value={statePayload.varient_name}
                      onChange={handleInput}
                    />
                    {errors.varient_name && (
                      <small className="text-danger">
                        {" "}
                        {errors.varient_name}{" "}
                      </small>
                    )}
                  </Form.Group>
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
                    window.location.href = "/varient-management";
                  }}
                />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateVarient;