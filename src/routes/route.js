import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const [roleWiseAccess, setRoleWiseAccess] = useState({});

  return (
    <ErrorBoundary {...rest}>
      <Route
        {...rest}
        render={props => {
          let date1 = JSON.parse(localStorage.getItem("logintime"));
          date1 = new Date(date1);
          let date2 = new Date();
          if (date1) {
            if (date1.getDate() < date2.getDate()) {
              localStorage.clear();
            }
          }

          if (isAuthProtected && !localStorage.getItem("authUser")) {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
          const is_super_admin = JSON.parse(localStorage.getItem("authUser"))
            ?.userInfo?.is_super_admin;
          if (!is_super_admin) {
            if (
              ["/admin-settings", "/frontend-settings"].includes(
                props.location.pathname
              )
            ) {
              return <Redirect to={{ pathname: "/access-denied" }} />;
            }

            if (
              roleWiseAccess[
                props.location.pathname.replaceAll("-", "_").slice(1)
              ] === false
            ) {
              return <Redirect to={{ pathname: "/access-denied" }} />;
            }
          }

          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }}
      />
    </ErrorBoundary>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    // localStorage.clear();
    // window.location.href = "/";
    // return;
  }

  render() {
    return this.props.children;
  }
}

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AppRoute;
