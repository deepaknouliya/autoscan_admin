import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {} from "../../store/actions";
import { Link } from "react-router-dom";
//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";
// import settings from "../../assets/images/icon/setting-ico.svg";
import { getUserInfo } from "../../helpers/authHelper";

import logo from "../../assets/images-new/logo.png";
import dashboards from "../../assets/images-new/dashboards.svg";
import Feedback from "../../assets/images-new/feedback.svg";
import leadManagement from "../../assets/images-new/lead-management.svg";
import contact_management from "../../assets/images-new/contatact-mana.svg";
import campaign from "../../assets/images-new/campaign.svg";
import settings from "../../assets/images-new/contatact-mana.svg";
import logo_collapse from "../../assets/images-new/logo-collapse.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdownId: null,
    };
  }

  toggleDropdown = dropdownId => {
    this.setState(prevState => ({
      activeDropdownId:
        prevState.activeDropdownId === dropdownId ? null : dropdownId,
    }));
  };

  render() {
    // Dynamic class based on isActive state
    const { activeDropdownId } = this.state;

    const userInfo = getUserInfo();
    const isSuperAdmin = userInfo?.tokenDetails?.isSuperAdmin || false;
    const isAdmin = userInfo?.tokenDetails?.isAdmin || false;

    return (
      <React.Fragment>
        <div className="vertical-menu">
          <div className="navbar-brand-box">
            <Link className="logo logo-light" to="/dashboard">
              <span className="logo-lg text-center">
                <img
                  src={logo}
                  alt="logo"
                  height="30"
                  width="180"
                  className="logo-img"
                />
                <img
                  src={logo_collapse}
                  alt="logo"
                  height="30"
                  width="180"
                  className="logo-collpase"
                />
              </span>
            </Link>
          </div>
          <div data-simplebar="true" className="h-100">
            <div id="sidebar-menu" className="cus-scr">
              <h4 className="heading-sixteen">MENU</h4>
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="mm-active">
                  <Link to="/dashboard">
                    <img src={dashboards} alt="" />
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li className="mm-active">
                  <Link to="/brand-management">
                    <img src={leadManagement} alt="" />
                    <span>Brand Management</span>
                  </Link>
                </li>
                <li className="mm-active">
                  <Link to="/model-management">
                    <img src={leadManagement} alt="" />
                    <span>Model Management</span>
                  </Link>
                </li>
                <li className="mm-active">
                  <Link to="/varient-management">
                    <img src={leadManagement} alt="" />
                    <span>Varient Management</span>
                  </Link>
                </li>
                <li className="mm-active">
                  <Link to="/car-management">
                    <img src={leadManagement} alt="" />
                    <span>Car Management</span>
                  </Link>
                </li>
              

               
                <li className="mm-active dropdown-list">
                  <Link to="#">
                    <img src={settings} alt="" />
                    <span>Manage Users</span>
                  </Link>

                  <ul className="dropdown">
                    <li>
                      <Link to="/role-list">Roles Management</Link>
                    </li>
                    <li>
                      <Link to="/user-list">Manage User</Link>
                    </li>
                   
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-background"></div>
        </div>
      </React.Fragment>
    );
  }
}

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStateToProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
