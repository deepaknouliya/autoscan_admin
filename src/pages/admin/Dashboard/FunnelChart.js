import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow1 from "../../../assets/images/icon/arrow-1.svg";
// import graph from "../../../assets/images/icon/graph.png";
import FunnelSeries from "./FunnelSeries";
import PieChartDetails from "./PieChart";
import ReactApexChart from "react-apexcharts";
import AcceptanceChart from "./AcceptanceChart";

const FunnelChart = props => {
  let data = props?.data || {};
  let pieChartData = props?.pieChartData || [];
  let acceptanceDetails = props?.acceptanceDetails || {};

  let myData = [
    {
      stage: "Total Applied",
      applicants: data?.totalApplicants || 0,
      percentage: 100,
    },
    // {
    //     stage: "Pending",
    //     applicants: data?.pendingUsers || 0
    // },
    {
      stage: "Link Sent",
      applicants: data?.screeningUsers || 0,
      percentage:
        ((data?.screeningUsers || 0) / data?.totalApplicants || 0) * 100,
    },
    {
      stage: "Called for Interview",
      applicants: data?.scheduledUsers || 0,
      percentage:
        ((data?.scheduledUsers || 0) / data?.totalApplicants || 0) * 100,
    },
    {
      stage: "Selected",
      applicants: data?.selectedUsers || 0,
      percentage:
        ((data?.selectedUsers || 0) / data?.totalApplicants || 0) * 100,
    },
    {
      stage: "Onboarded",
      applicants: data?.onboardedUsers || 0,
      percentage:
        ((data?.onboardedUsers || 0) / data?.totalApplicants || 0) * 100,
    },
    // {
    //     stage: "On Hold",
    //     applicants: data?.onholdUsers || 0
    // },
    // {
    //     stage: "Rejected",
    //     applicants: data?.rejectedUsers || 0
    // },
  ];

  return (
    <div className="vacancy-tabel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="eligible-content">
              <div className="heading-card d-flex justify-content-between ">
                <div className="d-flex justify-content-between heading-subcard">
                  <h2 className="heading-twenty m-0">
                    Recruitment Conversion Funnel
                  </h2>
                </div>

                <div className="funnel-btn">
                  <Link
                    to="/position-application"
                    className="gap-2 d-flex align-items-center view_link"
                  >
                    View All <img src={arrow1} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <FunnelSeries data={myData || []} />
          </div>
        </div>
        <div className="row hiringsource pt-4">
          <div className="col-lg-7">
            <div className="eligible-content">
              <div className="heading-card d-flex justify-content-between ">
                <div className="d-flex justify-content-between heading-subcard">
                  <h2 className="heading-twenty m-0">
                    Hiring Source Pie Chart
                  </h2>
                </div>

                <div className="funnel-btn">
                  <Link
                    to="/position-application"
                    className="gap-2 d-flex align-items-center view_link"
                  >
                    View All <img src={arrow1} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="cards-section mb-3">
              <PieChartDetails data={pieChartData || []} />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="eligible-content">
              <div className="heading-card d-flex justify-content-between ">
                <div className="d-flex justify-content-between heading-subcard">
                  <h2 className="heading-twenty m-0"> Acceptance Rate</h2>
                </div>
              </div>
            </div>
            <div className="acceptance-rate">
              <div className="graph-chart">
                <h4>Offer Acceptance Rate</h4>
                <div className="accepatance-section">
                  <div className="offered-card">
                    <p>Check the % Range of Offered to onboard candidates</p>
                    <ul>
                      <li>
                        {acceptanceDetails?.offered || 0} <span>Offered</span>
                      </li>
                      <li>
                        {acceptanceDetails?.onboarded || 0}{" "}
                        <span>Onboarded</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="acceptance-graph position-relative">
                <AcceptanceChart data={acceptanceDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnelChart;
