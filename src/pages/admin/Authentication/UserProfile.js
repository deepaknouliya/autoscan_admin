import PropTypes from "prop-types";
import React, { Component } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Row } from "reactstrap";

// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation";

// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb";

import avatar from "../../../assets/images/users/avatar.png";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", profile_pic: "", idx: "" };

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.editProfile(values);
  }

  componentDidMount() {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      let user = obj.user;
      console.log("user");
      console.log(user);
      this.setState({
        name: user.name,
        email: user.email,
        idx: user.id,
        profile_pic: user.profile_pic,
      });
    }
  }

  // componentDidUpdate(prevProps, prevState, ss) {
  //   if (this.props !== prevProps) {
  //     const obj = JSON.parse(localStorage.getItem("authUser"));
  //     this.setState({ name: obj.username, email: obj.email, idx: obj.uid });
  //     setTimeout(() => {
  //       this.props.resetProfileFlag();
  //     }, 3000);
  //   }
  // }

  render() {
    const profile_pic =
      JSON.parse(localStorage.getItem("roleWiseAccess"))?.profile_pic || "";
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumb title="Profile" breadcrumbItem="Profile" />

            <Row>
              <Col lg="12">
                {this.props.error && this.props.error ? (
                  <Alert color="danger">{this.props.error}</Alert>
                ) : null}
                {this.props.success && this.props.success ? (
                  <Alert color="success">{this.props.success}</Alert>
                ) : null}

                <Card>
                  <CardBody>
                    <div className="d-flex">
                      <div className="me-3">
                        <img
                          src={profile_pic || this.state.profile_pic || avatar}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="align-self-center flex-1">
                        <div className="text-muted">
                          <h5>{this.state.name}</h5>
                          <p className="mb-1">{this.state.email}</p>
                          {/* <p className="mb-0">Id no: #{this.state.idx}</p> */}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* <h4 className="card-title mb-4">Personal Information</h4>
            <div>
              <div>
                <span>
                  <h5>Name:</h5>
                  <p>{this.state.name}</p>
                </span>
                <span>
                  <h5>Email:</h5>
                  <p>{this.state.email}</p>
                </span>
              </div>
            </div> */}
            {/* <Card>
              <CardBody>
                <AvForm
                  className="form-horizontal"
                  onValidSubmit={(e, v) => {
                    this.handleValidSubmit(e, v);
                  }}
                >
                  <div className="form-group">
                    <AvField
                      name="username"
                      label="User Name"
                      value={this.state.name}
                      className="form-control"
                      placeholder="Enter User Name"
                      type="text"
                      required
                    />
                    <AvField name="idx" value={this.state.idx} type="hidden" />
                  </div>
                  <div className="text-center mt-4">
                    <Button type="submit" color="danger">
                      Update User Name
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card> */}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  resetProfileFlag: PropTypes.func,
};

const mapStateToProps = state => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStateToProps, { editProfile, resetProfileFlag })(UserProfile)
);
