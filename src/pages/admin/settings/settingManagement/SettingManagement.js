import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import left_chevron from "../../../assets/images-new/left-chevron.svg";

export default function SettingManagement() {
  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove mb-3">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/role-list">Roles Management</Link>
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
                    Main Setting
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={12}>
            <div className="filter-card-form card-shadow contact-form mt-4">
              <Form>
                <Row>
                  <Col lg={12}>
                    <div className="heading">
                      <h1 className="heading-twenty">Login Info</h1>
                    </div>
                  </Col>
                  <Col lg={6} className="login-info">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Site Title<sup>*</sup>
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col lg={6} className="login-info">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>
                        Admin Logo<sup>*</sup>
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="breaker"></div>

                <Row>
                  <Col lg={12}>
                    <div className="heading">
                      <h1 className="heading-twenty">Other Settings</h1>
                    </div>
                  </Col>
                  <Col lg={6} className="login-info">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>For Campaign Escalation</Form.Label>

                      <div className="radio-btn">
                        <div className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label for="radio-1" className="radio-label">
                            Only Email
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="radio-2"
                            name="radio"
                            type="radio"
                            checked
                          />
                          <label for="radio-2" className="radio-label">
                            Only Mobile
                          </label>
                        </div>

                        <div className="radio">
                          <input id="radio-3" name="radio" type="radio" />
                          <label for="radio-3" className="radio-label">
                            Both Email And Mobile
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="login-info">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>For Rule Escalation</Form.Label>

                      <div className="radio-btn">
                        <div className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label for="radio-1" className="radio-label">
                            Only Email
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="radio-2"
                            name="radio"
                            type="radio"
                            checked
                          />
                          <label for="radio-2" className="radio-label">
                            Only Mobile
                          </label>
                        </div>

                        <div className="radio">
                          <input id="radio-3" name="radio" type="radio" />
                          <label for="radio-3" className="radio-label">
                            Both Email And Mobile
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6} className="login-info">
                    <Form.Group
                      className="mb-3 feddback-esacaltion mt-4"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Order Sample Escalation</Form.Label>

                      <div className="radio-btn">
                        <div className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label for="radio-1" className="radio-label">
                            Only Email
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="radio-2"
                            name="radio"
                            type="radio"
                            checked
                          />
                          <label for="radio-2" className="radio-label">
                            Only Mobile
                          </label>
                        </div>

                        <div className="radio">
                          <input id="radio-3" name="radio" type="radio" />
                          <label for="radio-3" className="radio-label">
                            Both Email And Mobile
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="login-info">
                    <Form.Group
                      className="mb-3 feddback-esacaltion mt-4"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Feedback Escalation</Form.Label>

                      <div className="radio-btn">
                        <div className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label for="radio-1" className="radio-label">
                            Only Email
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="radio-2"
                            name="radio"
                            type="radio"
                            checked
                          />
                          <label for="radio-2" className="radio-label">
                            Only Mobile
                          </label>
                        </div>

                        <div className="radio">
                          <input id="radio-3" name="radio" type="radio" />
                          <label for="radio-3" className="radio-label">
                            Both Email And Mobile
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>

                  <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
