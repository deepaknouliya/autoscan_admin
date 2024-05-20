import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../../assets/images-new/logo.png";
import forgot_banner from "../../../assets/images-new/forgot-password.webp";
import axios from "axios";
import { isEmpty } from "../../../helpers/utils";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleEmailInput = e => {
    setErrors("");
    setEmail(e.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    setErrors("");
    if (isEmpty(email)) {
      setErrors(prevState => ({
        ...prevState,
        email: "Please enter valid email",
      }));
      return;
    }

    if (isEmpty(errors)) {
      setButtonLoading(true);

      let formData = {
        email: email,
      };

      let config = {
        method: "POST",
        url: process.env.REACT_APP_API_URL + "/auth/jwt-forget-pwd",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };

      await axios(config)
        .then(function (res) {
          setSubmitted(false);
          if (res.data.status === "success") {
            setSubmitted(true);
          } else {
            setErrors(prevState => ({
              ...prevState,
              email: res.data.msg,
            }));
          }
        })
        .catch(function (error) {
          if (error.response) {
            setErrors(prevState => ({
              ...prevState,
              email: error.response.data.msg,
            }));
          }
        });
      setButtonLoading(false);
    }
  };

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
              <>
                {!submitted && (
                  <div className="auth-user-login">
                    <div className="login-header">
                      <h4 className="heading m-0 text-white">
                        Forgot Password
                      </h4>
                    </div>

                    <div className="login-body">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Enter your email id</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter username or Email id"
                            value={email}
                            onChange={handleEmailInput}
                          />
                          {errors?.email && (
                            <p className="text-danger"> {errors?.email} </p>
                          )}
                        </Form.Group>

                        <Button
                          variant="primary"
                          className="w-100 mt-3"
                          type="submit"
                          disabled={buttonLoading}
                        >
                          {buttonLoading ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            ""
                          )}
                          Verify
                        </Button>
                      </Form>
                      <div className="mt-4 text-center">
                        <p>
                          Go back to{" "}
                          <Link to="login" className="fw-medium text-primary">
                            Login
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {submitted && (
                  <div className="auth-user-login">
                    <div className="login-header">
                      <h4 className="heading m-0 text-white">
                        Forgot Password
                      </h4>
                    </div>

                    <div className="login-body text-center">
                      <p className="m-0">
                        An email has been sent to your registered email "{email}
                        " with reset password instruction.
                      </p>
                      <p>
                        Please follow the steps mentioned in the email to reset
                        your password.
                      </p>

                      <h5 className="heading-sixteen pt-4">Thankyou.</h5>
                      <div className="w-100 mt-3 text-center">
                        <p>
                          <Link
                            to="login"
                            className="btn btn-primary justify-content-center"
                          >
                            Continue
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgetPassword;
