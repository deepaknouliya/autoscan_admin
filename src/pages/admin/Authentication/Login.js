import React, { Component } from "react";
import PropTypes from "prop-types";

import { Col, Container, Row, Spinner } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation";

// actions
import { apiError, loginUser } from "../../../store/actions";
import lock from "../../../assets/images-new/lock.svg";
import eye from "../../../assets/images-new/eye-crossed.svg";
import eye_open from "../../../assets/images-new/eye-open.png";
import { isEmpty } from "../../../helpers/utils";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      otp: "",
      otpStatus: false,
      otpTimer: false, //not in use for now
      errors: undefined,
      Buttonloading: false,
      success: undefined,
      loginType: "username",
      countryCode: "",
      countryCodeError: "",
      showPassword: false,
    };

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  sendOTP = async () => {
    if (this.state.loginType === "mobile" && this.state.countryCode === "") {
      this.setState({
        countryCodeError: "This Field is Required.",
      });
      return false;
    }

    let ths = this;
    if (!this.state.otpStatus)
      ths.setState({ Buttonloading: true, otpStatus: false });

    let formData = {
      username: this.state.username.trim(),
    };

    if (this.state.loginType === "mobile") {
      (formData.login_from = "mobile"),
        (formData.mobile_country_code = this.state.countryCode);
      formData.adminLogin = true;
    }

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/auth/sendotp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
    };

    await axios(config)
      .then(function (res) {
        let wrong_OTP = res.data.connection_ping;
        console.log("Connection Ping:", wrong_OTP);
        // console.log("OTP:", res.data.test_otp);
        let successmsg =
          ths.state.loginType === "username"
            ? `OTP sent successfully on your username Address.`
            : "OTP sent successfully on your Mobile Number.";
        ths.setState({
          Buttonloading: false,
          otpStatus: true,
          success: [successmsg],
        });
      })
      .catch(function (err) {
        let error;
        if (err.response?.data?.message?.errors) {
          error = err.response?.data?.message?.errors;
        } else {
          error = { username: err.response?.data?.message || err.message };
        }

        ths.setState({
          errors: [error.username],
          Buttonloading: false,
          otpStatus: false,
        });
      });
  };

  onSubmit = async e => {
    e.preventDefault();
    let ths = this;
    const { history } = this.props;
    // localStorage.clear();

    this.setState({
      user_error: "",
      pass_error: "",
    });
    if (isEmpty(this.state.username)) {
      this.setState({
        user_error: "Please enter valid username",
      });
    }

    if (isEmpty(this.state.password)) {
      this.setState({
        pass_error: "Please enter valid password",
      });
      return;
    }

    if (!isEmpty(this.state.user_error) || !isEmpty(this.state.pass_error)) {
      return;
    }

    let formData = {
      username: this.state.username.trim(),
      password: this.state.password.trim(),
    };

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
    };
    this.setState({ Buttonloading: true });
    await axios(config)
      .then(function (res) {
        if (res.status === 200 && res.data.status === "success") {
          ths.setState({ Buttonloading: false });
          localStorage.setItem("authUser", JSON.stringify(res.data));
          localStorage.setItem("auth_token", res.data.accessToken);
          localStorage.setItem("user_info", JSON.stringify(res.data.user));
          localStorage.setItem("user_id", JSON.stringify(res.data.user.id));
          localStorage.setItem("logintime", JSON.stringify(new Date()));

          if (ths.state.from) {
            history.push(ths.state.from);
          } else {
            history.push("/dashboard");
          }
        } else if (res.status === 200 && res.data.status === "fail") {
          ths.setState({ errors: [res.data?.msg] });
        }
      })
      .catch(function (error) {
        console.log("form validation error", error);
        if (error) {
          ths.setState({ errors: [error.data?.msg] });
        }
      });

    ths.setState({ Buttonloading: false });
  };

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.loginUser(values, this.props.history);
  }

  componentDidMount() {
    this.props.apiError("");
  }

  handleMobileCountryCodeChange(e) {
    this.setState({
      countryCode: e.value,
      countryCodeError: "",
    });
  }

  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleEmailInput = e => {
    this.setState({ loginErrors: {} });
    this.setState({ email: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ loginErrors: {} });
    this.setState({ password: e.target.value });
  };

  render() {
    const { showPassword, password } = this.state;
    return (
      <React.Fragment>
        <div className="login-wrapper">
          <Container fluid className="h-100">
            <Row className="h-100 d-flex justify-content-center">
            
              <Col md={6} lg={6} xl={6}>
                <div className="auth-user-login">
                  <div className="login-header">
                    <h4 className="heading m-0 text-white">Welcome</h4>
                    <p className="m-0 text-white">
                      Please enter your login credentials details below.
                    </p>
                  </div>

                  <div className="login-body">
                    <AvForm
                      className="form-horizontal"
                      // onValidSubmit={this.handleValidSubmit}
                    >
                      {this.state.errors ? (
                        <div
                          className="alert alert-danger fade show"
                          role="alert"
                          dangerouslySetInnerHTML={{
                            __html: this.state.errors,
                          }}
                        ></div>
                      ) : this.state.success ? (
                        <div
                          className="alert alert-success fade show"
                          role="alert"
                          dangerouslySetInnerHTML={{
                            __html: this.state.success,
                          }}
                        ></div>
                      ) : null}

                      {this.state.loginType === "username" && (
                        <>
                          <div className="mb-3">
                            <AvField
                              name="Username or Email id"
                              label="Username or Email id"
                              value=""
                              className="form-control"
                              placeholder="Enter username or Email id"
                              type="text"
                              // required
                              disabled={this.state.otpStatus}
                              onChange={e =>
                                this.setState({
                                  username: e.target.value,
                                  user_error: "",
                                })
                              }
                            />
                            {this.state.user_error && (
                              <p className="text-danger">
                                {" "}
                                {this.state.user_error}{" "}
                              </p>
                            )}
                          </div>
                          <div className="mb-3 position-relative eyesopen">
                            <AvField
                              name="password"
                              label="Password"
                              value={password}
                              className="form-control"
                              placeholder="Enter password"
                              type={showPassword ? "text" : "password"}
                              // required
                              onChange={e =>
                                this.setState({
                                  password: e.target.value,
                                  pass_error: "",
                                })
                              }
                            />
                            {this.state.pass_error && (
                              <p className="text-danger">
                                {" "}
                                {this.state.pass_error}{" "}
                              </p>
                            )}
                            <div className="eye-form">
                              <img
                                src={showPassword ? eye_open : eye}
                                alt="Password Visibility Toggle"
                                onClick={this.togglePasswordVisibility}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="w-100 mt-3 btn btn-primary"
                          onClick={this.onSubmit}
                        >
                          {this.state.Buttonloading ? (
                            <Spinner size="sm" />
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </AvForm>
                    <h5 className="heading-para">
                      <Link to="/forgot-password">
                        <span>
                          <img src={lock} alt="forgot password" />
                        </span>{" "}
                        Forgot your password?
                      </Link>
                    </h5>
                  </div>

                  <div className="breaker"></div>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  apiError: PropTypes.any,
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
};

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
);
