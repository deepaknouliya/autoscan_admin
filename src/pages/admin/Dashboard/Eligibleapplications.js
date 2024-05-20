import React from "react";

import settings from "../../../assets/images/icon/plus-create-job.svg";
import green from "../../../assets/images/icon/green-circle.svg";
import calender from "../../../assets/images/icon/calender.svg";
import arrow1 from "../../../assets/images/icon/arrow-1.svg";
import print from "../../../assets/images/icon/print.svg";
import eye from "../../../assets/images/icon/eye.svg";
import { Link } from "react-router-dom";

export default function eligibleapplication() {
  return (
    <>
      <div className="eligible-application">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="create-job-card">
                <Link to="#">
                  <img src={settings} alt="" />
                  <div className="create-job">
                    <h5 className="heading-two">Post New Job</h5>
                    <p>Click here to post new job</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="eligible-content">
                <h3 className="heading-one">Eligible Applications</h3>
                <h6>
                  <Link to="#" className="view_link">
                    View All <img src={arrow1} />
                  </Link>
                </h6>
              </div>

              <div className="eligible-application">
                <div className="eligible-card">
                  <h4 className="heading-one">Vidushi Sehrawat</h4>
                  <p>
                    Applied for <strong>Business Development</strong>
                  </p>
                  <div className="eligible-date">
                    <div className="date-calnder">
                      <span>
                        <img src={green} />{" "}
                      </span>
                      <h6>PASS (68%)</h6>
                    </div>
                    <div className="date-calnder">
                      <span>
                        <img src={calender} />{" "}
                      </span>
                      <h6>27 Oct 2023</h6>
                    </div>
                  </div>

                  <div className="invite-inveriew">
                    <div className="invite-intervie">
                      <h6>Invite F2F Interview</h6>
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

                <div className="eligible-card">
                  <h4 className="heading-one">Vidushi Sehrawat</h4>
                  <p>
                    Applied for <strong>Business Development</strong>
                  </p>
                  <div className="eligible-date">
                    <div className="date-calnder">
                      <span>
                        <img src={green} />{" "}
                      </span>
                      <h6>PASS (68%)</h6>
                    </div>
                    <div className="date-calnder">
                      <span>
                        <img src={calender} />{" "}
                      </span>
                      <h6>27 Oct 2023</h6>
                    </div>
                  </div>

                  <div className="invite-inveriew">
                    <div className="invite-intervie">
                      <h6>Invite F2F Interview</h6>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
