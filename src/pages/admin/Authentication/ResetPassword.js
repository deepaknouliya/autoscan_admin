import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import logo from "../../../assets/images-new/logo.png";
import forgot_banner from "../../../assets/images-new/forgot-password.webp";
import eye from "../../../assets/images-new/eye-crossed.svg";
import eye_open from "../../../assets/images-new/eye-open.png";
import axios from "axios";
import { isEmpty } from "../../../helpers/utils";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState({});
  const [topMessage, setTopMessage] = useState(null);
  const [theToken, setTheToken] = useState(null);

  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  let token = searchParams.get("token");
  let userID = searchParams.get("user");
  let resetType = searchParams.get("resetType");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const onSubmit = async event => {
    event.preventDefault();
    setErrors("");
    // Verify that the passwords match
    if (isEmpty(password)) {
      setErrors(prevState => ({
        ...prevState,
        password: "Please enter valid password",
      }));
    }

    if (isEmpty(password2)) {
      setErrors(prevState => ({
        ...prevState,
        password2: "Please enter valid confirm password",
      }));
      return;
    }

    if (password !== password2) {
      setErrors(prevState => ({
        ...prevState,
        password2: "Password and Confirm Password must be same.",
      }));
      return;
    } else {
      setErrors({});
      console.log("API CALL");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/reset-password/?token=${theToken}&password=${password2}`
      );
      if (response.status === 200 && response.data.status === "success") {
        setTopMessage("Password Reset Successfully ");
        // /file-category()
        // let isLogin = await axios.patch(
        //   `${process.env.REACT_APP_API_URL}/auth/user/update-login-credential/${userID}`
        // );
        // console.log("THE RESPONSE", isLogin);

        if (resetType === "resetPWD") {
          setTimeout(() => {
            logout();
          }, 3000);
        } else {
          setTimeout(() => {
            window.location.href = `/dashboard`;
          }, 3000);
        }

        console.log("The success", response);
      }
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_role");
    localStorage.removeItem("menu_list");
    localStorage.removeItem("active_tab");
    localStorage.removeItem("selectedFranchisee");
    window.location.href = "/login";
  };

  useEffect(() => {
    setTheToken(token);
  }, []);

  return (
    <>
      <div className="login-wrapper">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col lg={6} className="padding-remove">
              <div className="login-card h-100">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="login-img forgot">
                  <img src={forgot_banner} alt="login banner" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="auth-user-login">
                <div className="login-header">
                  <h4 className="heading m-0 text-white">Reset Password</h4>
                </div>
                {topMessage && (
                  <p className="alert alert-success">{topMessage}</p>
                )}
                <div className="login-body">
                  <Form>
                    <Form.Group
                      className="mb-3 pb-2"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>New Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          placeholder="Enter Password"
                        />
                        <div className="eye-form">
                          <img
                            src={showPassword ? eye_open : eye}
                            alt="Password Visibility Toggle"
                            onClick={togglePasswordVisibility}
                          />
                        </div>
                      </div>
                      {errors?.password && (
                        <p className="text-danger"> {errors?.password} </p>
                      )}
                    </Form.Group>

                    <Form.Group
                      className="mb-3 pb-2"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword2 ? "text" : "password"}
                          value={password2}
                          onChange={e => setPassword2(e.target.value)}
                          placeholder="Enter Password"
                        />
                        <div className="eye-form">
                          <img
                            src={showPassword2 ? eye_open : eye}
                            alt="Password Visibility Toggle"
                            onClick={togglePasswordVisibility2}
                          />
                        </div>
                      </div>
                      {errors?.password2 && (
                        <p className="text-danger"> {errors?.password2} </p>
                      )}
                    </Form.Group>

                    <Button
                      variant="primary"
                      className="w-100 mt-3"
                      type="submit"
                      onClick={onSubmit}
                    >
                      Reset Password
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ChangePassword;
