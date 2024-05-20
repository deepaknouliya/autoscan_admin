import {
  GET_STARTUPS,
  GET_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  GET_STARTUP_DEALS,
  GET_STARTUP_DEALS_SUCCESS,
  GET_STARTUP_DEALS_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  startups: [],
  error: "",
  show: true,
  success: "",
  startupDeals: [],
  startupDealsShow: true,
  startupDealsError: "",
  startupDealsSuccess: "",
};

const reports = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_STARTUPS:
      return {
        ...state,
      };

    case GET_STARTUPS_SUCCESS:
      return {
        ...state,
        startups: action.payload.startups,
      };

    case GET_STARTUPS_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

    case GET_STARTUP_DEALS:
      return {
        ...state,
      };

    case GET_STARTUP_DEALS_SUCCESS:
      return {
        ...state,
        startupDeals: action.payload.startups,
      };

    case GET_STARTUP_DEALS_FAIL:
      return {
        ...state,
        startupDealsError: action.payload,
        startupDealsSuccess: "",
      };

    default:
      return state;
  }
};

export default reports;
