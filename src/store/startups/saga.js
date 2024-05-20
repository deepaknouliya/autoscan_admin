import { call, put, takeEvery } from "redux-saga/effects";

import { GET_STARTUPS, UPDATE_URL_ALIAS } from "./actionTypes";

import {
  getStartupsFail,
  getStartupsSuccess,
  updateUrlAlias,
  updateUrlAliasSuccess,
  updateUrlAliasFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getStartups,
  updateStartupUrlAlias,
} from "../../helpers/backend_helper";

function* fetchStartups() {
  try {
    const response = yield call(getStartups);
    yield put(getStartupsSuccess(response));
  } catch (error) {
    yield put(getStartupsFail(error));
  }
}

function* updateUrlAliasForStartup({ payload: data }) {
  try {
    const response = yield call(updateStartupUrlAlias, data);
    console.log("RESPONSE: ", response);
    yield put(updateUrlAliasSuccess(response));
  } catch (error) {
    yield put(updateUrlAliasFail(error));
  }
}

function* StartupsSaga() {
  yield takeEvery(GET_STARTUPS, fetchStartups);
  yield takeEvery(UPDATE_URL_ALIAS, updateUrlAliasForStartup);
}

export default StartupsSaga;
