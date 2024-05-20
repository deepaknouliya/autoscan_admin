import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Import Routes
import { authProtectedRoutes, publicRoutes} from "./routes/index";
import AppRoute from "./routes/route";
// layouts

let VerticalLayout, NonAuthLayout;

VerticalLayout = require("./component/VerticalLayout").default;
NonAuthLayout = require("./component/NonAuthLayout").default;
// Import scss
import "./assets/scss/theme.scss";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const App = props => {
  const [data, setData] = useState({});
  let history = useHistory();

 

  const getLayout = () => {
    let layoutCls = VerticalLayout;
    return layoutCls;
  };

  const Layout = getLayout();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}
          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
          
        </Switch>
      </Router>
    </React.Fragment>
  );
};
const mapStateToProps = data => {
  return {
    layout: data.Layout,
  };
};
// App.propTypes = {
//   layout: PropTypes.object,
// }
export default connect(mapStateToProps, null)(App);
