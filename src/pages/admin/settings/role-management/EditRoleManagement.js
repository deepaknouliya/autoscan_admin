import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import left_chevron from "../../../../assets/images-new/left-chevron.svg";
import { Spinner } from "reactstrap";
import { isEmpty } from "../../../../helpers/utils";
import axios from "axios";
import { toast } from "react-toastify";

const EditRoleManagement = () => {
  let { role_id } = useParams();
  const history = useHistory();

  const [role, setRole] = useState([]);
  const [roleErrors, setRoleErrors] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    fetchRoleDetails();

    return () => {};
  }, []);

  const fetchRoleDetails = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/role/get-role/${role_id}`)
      .then(response => {
        const { success, role } = response.data;
        if (success) {
          setRole(role);
        }
      })
      .catch(err => console.log("Error:::", err));
  };

  const handleInput = e => {
    setRoleErrors("");
    setRole({
      ...role,
      [e.target.name]: e?.target?.value,
    });
  };




  const handleEditRoleBtn = async () => {
    setRoleErrors("");

    if (isEmpty(role?.name)) {
      setRoleErrors(prevState => ({
        ...prevState,
        name: "Please enter role name",
      }));
    }

    if (!isEmpty(roleErrors)) {
      return;
    }

    if (isEmpty(roleErrors)) {
      setButtonLoading(true);
      let role_data = { ...role, user_type: "" };
      if (role?.default_role === undefined) {
        setRole({
          ...role,
          default_role: 0,
        });
      }

      let config = {
        method: "PATCH",
        url: process.env.REACT_APP_API_URL + "/role/update-role/" + role_id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(role_data),
      };

      await axios(config)
        .then(function (res) {
          setButtonLoading(false);
          if (res?.data?.success) {
            toast.success(res.data?.msg || "Role updated successfully", {
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
                    Edit Role
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
                          value={role?.name || ""}
                          onChange={handleInput}
                        />
                        {roleErrors?.name && (
                          <p className="text-danger"> {roleErrors?.name} </p>
                        )}
                      </Form.Group>
                    </Col>

                  

                    <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 pt-3 space-btn">
                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleEditRoleBtn}
                      >
                        {buttonLoading ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          ""
                        )}
                        Submit
                      </Button>
                      <Link className="btn btn-secondary" to="/role-list">
                        Back
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
export default EditRoleManagement;
