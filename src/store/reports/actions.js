import {
  GET_STARTUPS,
  GET_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  GET_STARTUP_DEALS,
  GET_STARTUP_DEALS_SUCCESS,
  GET_STARTUP_DEALS_FAIL,
} from "./actionTypes";

export const getStartups = () => ({
  type: GET_STARTUPS,
});

export const getStartupsSuccess = startups => ({
  type: GET_STARTUPS_SUCCESS,
  payload: startups,
});

export const getStartupsFail = error => ({
  type: GET_STARTUPS_FAIL,
  payload: error,
});

export const getStartupDeals = () => ({
  type: GET_STARTUP_DEALS,
});

export const getStartupDealsSuccess = startups => ({
  type: GET_STARTUP_DEALS_SUCCESS,
  payload: startups,
});

export const getStartupDealsFail = error => ({
  type: GET_STARTUP_DEALS_FAIL,
  payload: error,
});
