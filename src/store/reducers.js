import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//pitchdays
import pitchdays from "./pitchdays/reducer";

//users
import users from "./users/reducer";

//Dashboard
import Dashboard from "./dashboard/reducer";
import Posts from "./posts/reducer";

// subscriptions
import subscription from "./subscriptions/reducer";

// appliedFunding
import appliedFunding from "./appliedFunding/reducer";

// investors
import investors from "./investors/reducer";
import credits from "./credits/reducer";

// document
import docs from "./document/reducer";

// kpis
import kpi from "./kpi/reducer";
import startups from "./startups/reducer";
import reports from "./reports/reducer";

// DeepDiveEvent
import deepDiveEvent from "./deepDiveEvent/reducer";

// Education Series
import educationSeriesEvent from "./EducationSeries/reducer";

// frontend-access-setting reducer
import frontendAccessSetting from "./frontendAccessSetting/reducer";

const appReducer = combineReducers({
  Layout,
  Login,
  ForgetPassword,
  Profile,
  pitchdays,
  users,
  Posts,
  Dashboard,
  subscription,
  appliedFunding,
  investors,
  docs,
  kpi,
  startups,
  reports,
  deepDiveEvent,
  educationSeriesEvent,
  credits,
  frontendAccessSetting,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "LOGOUT_USER") {
    // console.log("state", state);
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
