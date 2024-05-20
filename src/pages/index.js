import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

//import action
import { getChartsData } from "../../store/actions";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import axios from "axios";
import { Link } from "react-router-dom";

let show_all_saas_data = JSON.parse(
  localStorage.getItem("roleWiseAccess")
)?.show_all_saas_data;
let authUser = JSON.parse(localStorage.getItem("authUser"));
let saas_parent_id = authUser?.userInfo?.saas_parent_id;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        {
          title: "Revenue",
          iconClass: "bx-archive-in",
          description: "$35, 723",
        },
        {
          title: "Average Price",
          iconClass: "bx-purchase-tag-alt",
          description: "$16.2",
        },
      ],
      email: [
        { title: "Week", linkto: "#", isActive: false },
        { title: "Month", linkto: "#", isActive: false },
        { title: "Year", linkto: "#", isActive: true },
      ],
      modal: false,
      subscribemodal: false,
      chartSeries: [],
      periodType: "yearly",
      onboarding_email_sent: 0,
      onboarding_info_clear: 0,
      onboarding_info_received: 0,

      onboarding_rejected: 0,
      onboarding_incomplete: 0,
      ca_shared: 0,
      onboarding_drop_count: 0,
      ca_drop_count: 0,
      ca_signed_by_investor_pending_by_trustee: 0,
      ca_signed_by_all_process_completed: 0,
      saas_name: "Mamypoko",
      is_super_admin: JSON.parse(localStorage.getItem("authUser"))?.userInfo
        ?.is_super_admin,
      access: JSON.parse(localStorage.getItem("roleWiseAccess")),
    };

    this.togglemodal.bind(this);
    this.togglesubscribemodal.bind(this);
  }

  showAllDataSetting() {
    const roleId = JSON.parse(localStorage.getItem("authUser"))?.userInfo
      ?.roleId;

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/admin/role/role-wise-access/${roleId}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("authUser"))?.token,
          },
        }
      )
      .then(res => {
        localStorage.setItem(
          "roleWiseAccess",
          JSON.stringify(res.data.roleWiseAccess)
        );
        let authUser = JSON.parse(localStorage.getItem("authUser"));
        this.setState({
          access: res.data.roleWiseAccess,
          is_super_admin: authUser?.userInfo?.is_super_admin,
        });
      })
      .catch(error => {
        console.log("route-error", error?.message);
      });
  }

  componentDidMount() {
    const { onGetChartsData } = this.props;
    this.showAllDataSetting();
    // setTimeout(() => this.setState({ subscribemodal: true }), 2000);
    onGetChartsData("yearly");
  }

  togglemodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  togglesubscribemodal = () => {
    this.setState(prevState => ({
      subscribemodal: !prevState.subscribemodal,
    }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, chartSeries: this.props.chartsData });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dashboard | Mamypoko - Admin</title>
          </MetaTags>
          <Container fluid>
            <h3 className="mb-5">Welcome to Mamypoko Admin Panel !</h3>
            {/* Render Breadcrumb */}
            {/* <Breadcrumbs
              title={this.props.t("Dashboards")}
              breadcrumbItem={this.props.t("Dashboard")}
            /> */}

            <Row>
              <Col xl="4">
                {/* <WelcomeComp /> */}
                {/* <MonthlyEarning /> */}
              </Col>
              <Col xl="4">{/* <ActivityComp /> */}</Col>
              <Col xl="4">{/* <TopCities /> */}</Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
  chartsData: Dashboard.chartsData,
});

const mapDispatchToProps = dispatch => ({
  onGetChartsData: periodType => dispatch(getChartsData(periodType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Dashboard));
