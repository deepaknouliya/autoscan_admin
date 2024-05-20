import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  CREATE_EDUCATION_SERIES_EVENT,
  GET_EDUCATION_SERIES_EVENT,
  GET_EDUCATION_SERIES_EVENT_DETAILS,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS,
  UPDATE_EDUCATION_SERIES_EVENT
} from "./actionTypes"

import {
  CreateEducationSeriesEventSuccess,
  CreateEducationSeriesEventFail,
  GetEducationSeriesEventSuccess,
  GetEducationSeriesEventFail,
  GetEducationSeriesEventDetailsSuccess,
  GetEducationSeriesEventDetailsFail,
  UpdateEducationSeriesEventSuccess,
  UpdateEducationSeriesEventFail,
  GetEducationSeriesEventReportParticipantsSuccess,
  GetEducationSeriesEventReportParticipantsFail
} from "./actions"

//Include Helper File with needed methods
import {
  createEducationSeriesEventAPI,
  getEducationSeriesEventAPI,
  getEducationSeriesEventDetailsAPI,
  updateEducationSeriesEventAPI,
  GetEducationSeriesEventReportParticipantsAPI
} from "../../helpers/backend_helper"

function* createEducationSeriesEvent(payload) {
  try {
    const response = yield call(createEducationSeriesEventAPI, payload)
    yield put(CreateEducationSeriesEventSuccess(response))
  } catch (error) {
    yield put(CreateEducationSeriesEventFail(error))
  }
}

function* getEducationSeriesEventList(payload) {
  try {
    const response = yield call(getEducationSeriesEventAPI, payload)
    yield put(GetEducationSeriesEventSuccess(response))
  } catch (error) {
    yield put(GetEducationSeriesEventFail(error))
  }
}

function* getEducationSeriesEventDetails(payload) {
  try {
    const response = yield call(getEducationSeriesEventDetailsAPI, payload)
    yield put(GetEducationSeriesEventDetailsSuccess(response))
  } catch (error) {
    yield put(GetEducationSeriesEventDetailsFail(error))
  }
}

function* updateEducationSeriesEvent(payload) {
  try {
    const response = yield call(updateEducationSeriesEventAPI, payload)
    yield put(UpdateEducationSeriesEventSuccess(response))
  } catch (error) {
    yield put(UpdateEducationSeriesEventFail(error))
  }
}

function* GetEducationSeriesEventReportParticipants(payload) {
  try {
    const response = yield call(GetEducationSeriesEventReportParticipantsAPI, payload)
    yield put(GetEducationSeriesEventReportParticipantsSuccess(response))
  } catch (error) {
    yield put(GetEducationSeriesEventReportParticipantsFail(error))
  }
}

function* educationSeriesSaga() {
  yield takeEvery(CREATE_EDUCATION_SERIES_EVENT, createEducationSeriesEvent)
  yield takeEvery(GET_EDUCATION_SERIES_EVENT, getEducationSeriesEventList)
  yield takeEvery(GET_EDUCATION_SERIES_EVENT_DETAILS, getEducationSeriesEventDetails)
  yield takeEvery(UPDATE_EDUCATION_SERIES_EVENT, updateEducationSeriesEvent)
  yield takeEvery(GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS, GetEducationSeriesEventReportParticipants)


}

export default educationSeriesSaga
