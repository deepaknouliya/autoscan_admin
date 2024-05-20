import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

// users
import user1 from "../../assets/images/users/avatar.png";
import serach_icon from "../../assets/images/icon/search-icon.svg";
import bell from "../../assets/images/icon/bell.svg";

import { connect } from "react-redux";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      name: "Admin",
      // user: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }));
  }

  componentDidMount() {
    const userData = this.getUserName();
    if (userData) {
      this.setState({ name: userData.username, user: userData.user });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.success !== this.props.success) {
      const userData = this.getUserName();
      if (userData) {
        this.setState({ name: userData.username, user: userData.user });
      }
    }
  }

  getUserName() {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      return obj;
    }
    return null;
  }

  render() {
    const profile_pic =
      JSON.parse(localStorage.getItem("roleWiseAccess"))?.profile_pic || "";

    return (
      <React.Fragment>
        {/* <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search anything..." aria-label="Search"/>
          <span><img src={serach_icon} alt="search"/></span>
        </form>
    
        <div className="bell-icon position-relative">
          <Link to="">
            <img src={bell} />
            <span></span>
          </Link>
        </div> */}

        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item"
            id="page-header-user-dropdown"
            tag="button"
          >
            <div className="profile-icon">
              <h5>{"A"}</h5>
            </div>

            <span className="d-none d-xl-inline-block ms-1">
              {this.state.name}
            </span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem tag="a" href={`edit-user/${this.state.user?.id}`}>
              <i className="bx bx-user font-size-16 align-middle ms-1" />
              Profile
            </DropdownItem>
            <div className="dropdown-divider" />
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
              <span>Logout</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

ProfileMenu.propTypes = {
  t: PropTypes.any,
  success: PropTypes.string,
};

const mapStateToProps = state => {
  const { success } = state.Profile;
  return { success };
};

export default withRouter(
  connect(mapStateToProps, {})(withTranslation()(ProfileMenu))
);
