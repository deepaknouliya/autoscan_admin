import PropTypes from "prop-types";
import React, { Component } from "react";
import "react-drawer/lib/react-drawer.css";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Import menuDropdown
import ProfileMenu from "../TopbarDropdown/ProfileMenu";

import logo from "../../assets/images/logo.png";
import logoLightSvg from "../../assets/images/logo.svg";
import breadcums from "../../assets/images-new/breadcums.svg";
import close_breadcums from "../../assets/images-new/close-bradcums.svg";
import settings_icon from "../../assets/images-new/settings-icon.svg";
import alert_icon from "../../assets/images-new/alert.svg";
import profile from "../../assets/images-new/user.png";
import lock from "../../assets/images-new/lock.svg";
import logout from "../../assets/images-new/logout.svg";
import search_icon from "../../assets/images-new/search-icon.svg";
import down_chevron from "../../assets/images-new/down-chevron.svg";
import HeaderHeading from "./HeaderHeading";
const host = window.location.pathname;
console.log(host);
if (host.includes('mpp')) {
  import("../../assets/style.css");
  import("../../assets/style-new.css");
  import("../../assets/ReactCrop.css");
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      open: false,
      position: "right",
      scrolled: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }

  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  /**onscroll-header**/
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const navbarClass = this.state.scrolled
      ? "navbar-header scrolled"
      : "navbar-header";
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className={navbarClass}>
            <div className="d-flex header-name align-items-center gap-4">
              <div className="navbar-brand-box d-lg-none d-md-block">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                </Link>
              </div>

              {/* <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button> */}

              <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm header-item"
                id="vertical-menu-btn"
              >
                <img
                  src={breadcums}
                  alt="breadcums"
                  className="open-breadcums"
                />
                <img
                  src={close_breadcums}
                  alt="breadcums"
                  className="close-breadcums"
                />
              </button>

              <HeaderHeading />
            </div>

            <div className="d-flex profile-navbar">
           

              <div className="profile-card">
                <span>
                  <img src={profile} alt="profile" />
                </span>
                <div className="profile-content">
                  <h4 className="d-flex align-items-center gap-2">
                    Admin{" "}
                    <span>
                      <img src={down_chevron} alt="down chevron" />
                    </span>
                  </h4>
                </div>
                <ul className="profile-listing">
                  <p>Welcome Admin!</p>
                  <li>
                    <Link to="/change-password">
                      <span>
                        <img src={lock} alt="locak" />
                      </span>{" "}
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <span>
                        <img src={logout} alt="locak" />
                      </span>{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="d-flex profile-navbar">
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={this.toggleFullscreen}
                  className="btn header-item noti-icon"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>

              <ProfileMenu />
            </div> */}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps)(Header);

Header.propTypes = {
  t: PropTypes.any,
  toggleMenuCallback: PropTypes.any,
};
