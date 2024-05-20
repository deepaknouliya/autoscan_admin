import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import eye from "../../../assets/images-new/eye-crossed.svg";
import eye_open from "../../../assets/images-new/eye-open.png";
import axios from "axios";
import { isEmpty } from "../../../helpers/utils";
import { getUserInfo } from "../../../helpers/authHelper";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const userInfo = getUserInfo();

  const toggleCurrentPassVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPassVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPassVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePasswordSubmit = async () => {
    setErrors("");

    let current_pass = currentPassword?.trim();
    let new_pass = newPassword?.trim();
    let confirm_pass = confirmPassword?.trim();

    if (isEmpty(current_pass)) {
      setErrors(prevState => ({
        ...prevState,
        current_pass: "Please enter valid current password",
      }));
    }

    if (isEmpty(new_pass)) {
      setErrors(prevState => ({
        ...prevState,
        new_pass: "Please enter valid new password",
      }));
    }

    if (isEmpty(confirm_pass)) {
      setErrors(prevState => ({
        ...prevState,
        confirm_pass: "Please enter valid confirm password",
      }));
      return;
    }

    if (new_pass != confirm_pass) {
      setErrors(prevState => ({
        ...prevState,
        confirm_pass: "New password and confirm password must be same.",
      }));
      return;
    }

    if (isEmpty(errors)) {
      setButtonLoading(true);

      let formData = {
        current_pass: current_pass,
        new_pass: new_pass,
        confirm_pass: confirm_pass,
        email: userInfo?.email,
        user_id: userInfo?.id,
      };

      let config = {
        method: "POST",
        url: process.env.REACT_APP_API_URL + "/auth/change-password",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };

      await axios(config)
        .then(function (res) {
          setButtonLoading(false);
          if (res.data.status === "success") {
            toast.success(res.data?.msg || "Password updated successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            // if (ths.state.from) {
            //   history.push(ths.state.from);
            // } else {
            //  navigate("/dashboard");
            // }
          } else {
            setErrors(prevState => ({
              ...prevState,
              current_pass: res.data.msg,
            }));
          }
        })
        .catch(function (error) {
          if (error.response) {
            setErrors({ errors: error.response.data });
          }
        });
      setButtonLoading(false);
    }
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <Container fluid>
          <Row>
            <Col lg={12} className="padding-remove mb-3">
              <div className="breadcums-list">
                <ul className="margin-remove m-0">
                  <li className="margin-remove padding-remove">
                    <Link to="/change-password" className="active-btn">
                      Change Your Password
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={12}>
              <div className="filter-card-form card-shadow mt-4">
                <Row>
                  <Col lg={6}>
                    <Form>
                      <Form.Group
                        className="mb-3 pb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Current Password</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={showCurrentPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                          <div className="eye-form">
                            <img
                              src={showCurrentPassword ? eye_open : eye}
                              alt="Password Visibility Toggle"
                              onClick={toggleCurrentPassVisibility}
                            />
                          </div>
                        </div>
                        {errors?.current_pass && (
                          <p className="text-danger">
                            {" "}
                            {errors?.current_pass}{" "}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3 pb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>New Password</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={showNewPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                          <div className="eye-form">
                            <img
                              src={showNewPassword ? eye_open : eye}
                              alt="Password Visibility Toggle"
                              onClick={toggleNewPassVisibility}
                            />
                          </div>
                        </div>
                        {errors?.new_pass && (
                          <p className="text-danger"> {errors?.new_pass} </p>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3 pb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                          <div className="eye-form">
                            <img
                              src={showConfirmPassword ? eye_open : eye}
                              alt="Password Visibility Toggle"
                              onClick={toggleConfirmPassVisibility}
                            />
                          </div>
                        </div>
                        {errors?.confirm_pass && (
                          <p className="text-danger">
                            {" "}
                            {errors?.confirm_pass}{" "}
                          </p>
                        )}
                      </Form.Group>

                      <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleChangePasswordSubmit}
                        >
                          {buttonLoading ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            ""
                          )}
                          Submit
                        </Button>
                        <Link className="btn btn-secondary" to="/profile">
                          Cancel
                        </Link>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ChangePassword;
