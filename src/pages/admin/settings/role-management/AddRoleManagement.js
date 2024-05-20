import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import left_chevron from "../../../../assets/images-new/left-chevron.svg";
import { Spinner } from "reactstrap";
import { isEmpty } from "../../../../helpers/utils";
import axios from "axios";
import { toast } from "react-toastify";

const AddRoleManagement = () => {
  const history = useHistory();
  const [roleData, setRoleData] = useState({});
  const [roleErrors, setRoleErrors] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleInput = e => {
    setRoleErrors("");
    setRoleData({
      ...roleData,
      [e.target.name]: e?.target?.value,
    });
  };

  const handleRemoveableRadio = event => {
    setRoleErrors("");
    setRoleData({
      ...roleData,
      can_delete: event.target.value,
    });
  };

  const handleDefaultCheckbox = e => {
    setRoleData({
      ...roleData,
      default_role: e.target.checked ? 1 : 0,
    });
  };

  const handleRoleSubmit = async () => {
    setRoleErrors("");

    if (isEmpty(roleData?.name)) {
      setRoleErrors(prevState => ({
        ...prevState,
        name: "Please enter role name",
      }));
    }

    // if (isEmpty(roleData?.role_description)) {
    //   setRoleErrors(prevState => ({
    //     ...prevState,
    //     role_description: "Please enter role description",
    //   }));
    // }

    if (isEmpty(roleData?.login_destination)) {
      setRoleErrors(prevState => ({
        ...prevState,
        login_destination: "Please enter role login destination",
      }));
    }

    if (isEmpty(roleData?.can_delete)) {
      setRoleErrors(prevState => ({
        ...prevState,
        can_delete: "Please select yes or no for removeable field",
      }));
      return;
    }

    if (!isEmpty(roleErrors)) {
      return;
    }

    if (isEmpty(roleErrors)) {
      setButtonLoading(true);
      let role_data = { ...roleData, user_type: "" };
      if (roleData?.default_role === undefined) {
        setRoleData({
          ...roleData,
          default_role: 0,
        });
      }

      let config = {
        method: "POST",
        url: process.env.REACT_APP_API_URL + "/role/create-role",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(role_data),
      };

      await axios(config)
        .then(function (res) {
          setButtonLoading(false);
          if (res?.data?.success) {
            toast.success(res.data?.msg || "Role added successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });

            history.push("/role-list/");
          } else {
            toast.error(
              res?.data?.msg ||
                "Role already exists. Unable to create a new role.",
              {
                position: toast.POSITION.TOP_RIGHT,
              }
            );
          }
        })
        .catch(function (error) {
          toast.error(
            error?.response?.data?.msg ||
              "Role already exists. Unable to create a new role.",
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        });
      setButtonLoading(false);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove mb-3">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/role-list" className="active-btn">
                    Roles Management
                  </Link>
                </li>
             
                <li className="margin-remove padding-remove">
                  <Link to="/user-list">Manage User</Link>
                </li>
               
              </ul>
            </div>
          </Col>

          <Col lg={12}>
            <div className="breadcums mt-3">
              <ul>
                <li>
                  <Link to="/role-list">
                    <span>
                      <img src={left_chevron} alt="chevron" />
                    </span>
                    Add Role
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={12}>
            <div className="filter-card-form card-shadow mt-4">
              <Form>
                <Col lg={6}>
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Role Name<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Role Name"
                          name="name"
                          onChange={handleInput}
                          value={roleData?.name || ""}
                        />
                        {roleErrors?.name && (
                          <p className="text-danger"> {roleErrors?.name} </p>
                        )}
                      </Form.Group>
                    </Col>

                   

                    <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 pt-3 space-btn">
                      <Button
                        type="button"
                        variant="primary"
                        disabled={buttonLoading}
                        onClick={handleRoleSubmit}
                      >
                        {buttonLoading ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          ""
                        )}
                        Save
                      </Button>
                      <Link className="btn btn-secondary" to={"/role-list"}>
                        Cancel
                      </Link>
                    </div>
                  </Row>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddRoleManagement;
