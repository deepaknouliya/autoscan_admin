import { call, put, takeEvery } from "redux-saga/effects";

import { GET_STARTUPS, GET_STARTUP_DEALS } from "./actionTypes";

import {
  getStartupsFail,
  getStartupsSuccess,
  getStartupDealsFail,
  getStartupDealsSuccess,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getStartUpListAPI,
  getStartups,
  getStartupDeals,
} from "../../helpers/backend_helper";

function* fetchStartups() {
  try {
    const response = yield call(getStartups);
    yield put(getStartupsSuccess(response));
  } catch (error) {
    yield put(getStartupsFail(error));
  }
}

function* fetchStartupDeals() {
  try {
    const response = yield call(getStartupDeals);
    yield put(getStartupDealsSuccess(response));
  } catch (error) {
    yield put(getStartupDealsFail(error));
  }
}

function* ReportsSaga() {
  yield takeEvery(GET_STARTUPS, fetchStartups);
  yield takeEvery(GET_STARTUP_DEALS, fetchStartupDeals);
}

export default ReportsSaga;
