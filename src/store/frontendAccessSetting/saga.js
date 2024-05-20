import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  createSettingError,
  createSettingSuccess,
  deleteSettingError,
  deleteSettingSuccess,
  getAllAccessSettingsError,
  getAllAccessSettingsSuccess,
  getOneAccessSettingError,
  getOneAccessSettingSuccess,
  updateSettingError,
  updateSettingSuccess,
} from "./actions";

import {
  CREATE_NEW_SETTING,
  DELETE_SETTING,
  GET_ALL_SETTINGS,
  GET_ONE_SETTING,
  UPDATE_SETTING,
} from "./actionTypes";

import {
  createNewAccessSettingAPI,
  deleteAccessSettingAPI,
  getAllAccessSettingsAPI,
  getOneAccessSettingAPI,
  updateAccessSettingAPI,
} from "../../helpers/backend_helper";

function* fetchAllAccessSettings() {
  try {
    const response = yield call(getAllAccessSettingsAPI);
    yield put(getAllAccessSettingsSuccess(response));
  } catch (error) {
    yield put(getAllAccessSettingsError(error));
  }
}

function* fetchOneAccessSetting({ payload: { settingId } }) {
  try {
    const response = yield call(getOneAccessSettingAPI, settingId);
    yield put(getOneAccessSettingSuccess(response));
  } catch (error) {
    yield put(getOneAccessSettingError(error));
  }
}

function* createNewAccessSetting({ payload }) {
  try {
    const response = yield call(createNewAccessSettingAPI, payload);
    yield put(createSettingSuccess(response));
  } catch (error) {
    yield put(createSettingError(error));
  }
}

function* updateAccessSetting({ payload }) {
  try {
    const response = yield call(updateAccessSettingAPI, payload);
    yield put(updateSettingSuccess(response));
    yield fetchOneAccessSetting({ payload });
  } catch (error) {
    yield put(updateSettingError(error));
  }
}

function* deleteAccessSetting({ payload: { settingId } }) {
  try {
    const response = yield call(deleteAccessSettingAPI, settingId);
    yield put(deleteSettingSuccess(response));
    yield fetchAllAccessSettings();
  } catch (error) {
    yield put(deleteSettingError(error));
  }
}

function* accessSettingSaga() {
  yield takeLatest(GET_ALL_SETTINGS, fetchAllAccessSettings);
  yield takeLatest(GET_ONE_SETTING, fetchOneAccessSetting);
  yield takeEvery(CREATE_NEW_SETTING, createNewAccessSetting);
  yield takeEvery(UPDATE_SETTING, updateAccessSetting);
  yield takeEvery(DELETE_SETTING, deleteAccessSetting);
}

export default accessSettingSaga;
