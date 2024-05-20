import React from "react";
import { Link } from "react-router-dom";

import green from "../../../assets/images/icon/green-circle.svg";
import arrow1 from "../../../assets/images/icon/arrow-1.svg";
import print from "../../../assets/images/icon/print.svg";
import eye from "../../../assets/images/icon/eye.svg";
import calender from "../../../assets/images/icon/calender-card.svg";
import location from "../../../assets/images/icon/location-card.svg";

export default function pendingapplication(props) {
  let pendingData = props?.data || [];
  return (
    <>
      <div className="eligible-application pending-app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="eligible-content">
                <h3 className="d-flex align-items-center gap-2 heading-one">
                  Pending Applications <span>{pendingData?.length || 0}</span>
                </h3>
                <h6>
                  <Link
                    to="/pending-list"
                    className="gap-2 d-flex align-items-center view_link"
                  >
                    View All <img src={arrow1} />
                  </Link>
                </h6>
              </div>
            </div>

            {pendingData &&
              pendingData?.map(el => {
                return (
                  <div className="col-lg-4">
                    <div className="eligible-card">
                      <div className="new-card">
                        <span>New</span>
                      </div>
                      <h4 className="text-capitalize heading-one">
                        {el?.name}
                      </h4>
                      <p>
                        Applied for <strong>{el?.vacancy?.title}</strong>
                      </p>
                      <div className="eligible-date">
                        <div className="date-calnder">
                          <span>
                            <img src={calender} />{" "}
                          </span>
                          <h6>PASS (68%)</h6>
                        </div>
                        <div className="date-calnder">
                          <span>
                            <img src={location} />{" "}
                          </span>
                          <h6>{new Date(el?.apply_date)?.toDateString()}</h6>
                        </div>
                      </div>

                      <div className="invite-inveriew">
                        <div className="invite-intervie">
                          <h6>Take Screen Test</h6>
                        </div>
                        <div className="print">
                          <h5>
                            <Link to="#">
                              <img src={print} />
                            </Link>
                            <span>Print Details</span>
                          </h5>
                        </div>

                        <div className="view">
                          <h5>
                            <Link to="#">
                              <img src={eye} />
                            </Link>
                            <span>View Details</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {(!pendingData || pendingData?.length === 0) && (
              <div>
                <p>No Data Available.</p>
              </div>
            )}

            {/* <div className="col-lg-4">
              <div className="eligible-card">
              <div className="new-card">
                  <span>New</span>
                </div>
                <h4>Arvind Kumar Maurya</h4>
                <p>
                  Applied for <strong>Product Designer</strong>
                </p>
                <div className="eligible-date">
                  <div className="date-calnder">
                    <span>
                      <img src={calender} />{" "}
                    </span>
                    <h6>PASS (68%)</h6>
                  </div>
                  <div className="date-calnder">
                    <span>
                      <img src={location} />{" "}
                    </span>
                    <h6>27 Oct 2023</h6>
                  </div>
                </div>

                <div className="invite-inveriew">
                    <div className="invite-intervie">
                    <h6>Take Screen Test</h6>
                    </div>
                    <div className="print">
                    <h5>
                      <Link to="#">
                        <img src={print} />
                      </Link>
                      <span>Print Details</span>
                    </h5>
                    </div>

                    <div className="view">
                    <h5>
                      <Link to="#">
                        <img src={eye} />
                      </Link>
                      <span>View Details</span>
                    </h5>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="eligible-card">
              <div className="pending-card">
                  <span>New</span>
                </div>
                <h4>Arvind Kumar Maurya</h4>
                <p>
                  Applied for <strong>Product Designer</strong>
                </p>
                <div className="eligible-date">
                  <div className="date-calnder">
                    <span>
                      <img src={calender} />{" "}
                    </span>
                    <h6>PASS (68%)</h6>
                  </div>
                  <div className="date-calnder">
                    <span>
                      <img src={location} />{" "}
                    </span>
                    <h6>27 Oct 2023</h6>
                  </div>
                </div>

                <div className="invite-inveriew">
                    <div className="invite-intervie">
                    <h6>Take Screen Test</h6>
                    </div>
                    <div className="print">
                    <h5>
                      <Link to="#">
                        <img src={print} />
                      </Link>
                      <span>Print Details</span>
                    </h5>
                    </div>

                    <div className="view">
                    <h5>
                      <Link to="#">
                        <img src={eye} />
                      </Link>
                      <span>View Details</span>
                    </h5>
                    </div>
                  </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
