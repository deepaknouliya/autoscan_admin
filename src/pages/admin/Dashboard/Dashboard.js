import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Eligibleapplication from "../Dashboard/Eligibleapplications";
import Pendingapplication from "../Dashboard/Pendingapplication";
import Vacancytable from "../Dashboard/Vacancytable";
import { useEffect, useState } from "react";
import {
  FetchDashboardData,
  getTodayAgendaDetails,
} from "../../../helpers/backend_helper";
import { Form } from "reactstrap";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import FunnelChart from "./FunnelChart";
import arrow from "../../../assets/images/icon/arrow.svg";
import calender_icon from "../../../assets/images/icon/calender.svg";
import DatePicker from "react-datepicker";
import plus_icon from "../../../assets/images-new/plus-icon.svg";

const Card = ({ imageSrc, title, value, units, link }) => (
  <div className="tabBox-wrapper">
    <Link to={link}>
      <div className="tab-details">
        <div className="d-flex align-items-center">
          <div className="tab-value">{value}</div>
          <div className="tab-ico ms-auto">
            <img src={imageSrc} alt={title} />
          </div>
        </div>
        <h2 className="tab-title">{title}</h2>
        {/*<div className="valueCounter d-flex align-items-center">
            <div className="candidate-value">
              <span>{units}</span>
            </div>
          </div>*/}
      </div>
    </Link>
  </div>
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState("");
  const [tabType, setTabType] = useState("current");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAgendaData();
  }, []);

  useEffect(() => {
    setDashboardData("");
    if (tabType !== "custom") {
      getDashboardData(tabType);
    }
  }, [tabType]);

  const getAgendaData = async () => {
    await getTodayAgendaDetails()
      .then(res => {
        setAgendaDetails(res?.data);
      })
      .catch(err => {});
  };

  const getDashboardData = async type => {
    let payload = `?type=${type}&startDate=${startDate}&endDate=${endDate}`;
    await FetchDashboardData(payload)
      .then(res => {
        if (res?.status) {
          setDashboardData(res?.data);
        } else {
          //   setError("No data available");
        }
      })
      .catch(err => {
        // toast.error(err?.response?.data?.message || "Something Went Wrong.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        // setError("No data Available");
      });
  };

  //hide-showw-in mobile-view
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails); // Toggle the state when button is clicked
  };

  const handleCloseClick = () => {
    setShowDetails(false); // Close the details when cross button is clicked
  };

  //date
  const [inputTypeStart, setInputTypeStart] = useState("text");
  const [inputTypeEnd, setInputTypeEnd] = useState("text");

  useEffect(() => {
    // Add class to body element when component mounts
    document.body.classList.add("dashboard-body");

    // Remove class from body element when component unmounts
    return () => {
      document.body.classList.remove("dashboard-body");
    };
  }, []);

  return (
    <div className="dashboard-wrapper dasboard-container">
      <Container fluid>
        <Row>
          <div className="inner-wrapper">

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="outerTab-box-wrapper">
                  <Row>
                    <Col xl={4} lg={6} md={6}>
                      {/* Pending Applications */}
                      <Card
                        imageSrc="../img/total-app-ico.svg"
                        title={
                          <>
                            Total Leads{" "}
                            {
                              <img
                                src={arrow}
                                alt="Chevron Icon"
                                className="right-chevron"
                              />
                            }
                          </>
                        }
                        value={dashboardData?.counts?.pendingCount || 0}
                        link={"/pending-list"}
                      />
                    </Col>

                    <Col xl={4} lg={6} md={6}>
                      {/* Screening Test */}
                      <Card
                        imageSrc="../img/total-app-ico.svg"
                        title={
                          <>
                            Total Dealers{" "}
                            {
                              <img
                                src={arrow}
                                alt="Chevron Icon"
                                className="right-chevron"
                              />
                            }
                          </>
                        }
                        value={dashboardData?.counts?.screeningUsers || 0}
                        link={"/screening-list"}
                      />
                    </Col>

                   
                  </Row>

                  

                
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
