import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_DEEP_DIVE_EVENT_LIST,
  GET_START_UP_LIST,
  GET_PITCH_DAY_LIST,
  GET_OTHER_DETAILS,
  ADD_DEEP_DIVE_EVENT,
  UPDATE_DEEP_DIVE_EVENT,
  GET_DEEP_DIVE_EVENT_DETAILS,
  DELETE_DEEP_DIVE_EVENT,
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS,
  GET_ZOOM_MEETING_DETAILS_QA,
  GET_ZOOM_MEETING_DETAILS_POLL,
  GET_DEEP_DIVE_ASSESSMENT_REPORT,
  GET_ZOOM_MEETING_DETAILS_MEDIA,
  UPDATE_POLL_RANGE_VALUE,
  MERGE_ASSESSMENT_REPORT,
} from "./actionTypes";

import {
  getDeepDiveEventListSuccess,
  getDeepDiveEventListFail,
  getStartUpListSuccess,
  getStartUpListFail,
  getPitchDayListSuccess,
  getPitchDayListFail,
  getOtherDetailsSuccess,
  getOtherDetailsFail,
  addDeepDiveEventSuccess,
  addDeepDiveEventFail,
  updateDeepDiveEventSuccess,
  updateDeepDiveEventFail,
  getDeepDiveEventDetailsSuccess,
  getDeepDiveEventDetailsFail,
  deleteDeepDiveEventSuccess,
  deleteDeepDiveEventFail,
  getCompletedDeepDiveEventSuccess,
  getCompletedDeepDiveEventFail,
  getZoomMeetingDetailsParticipantsSuccess,
  getZoomMeetingDetailsParticipantsFail,
  getZoomMeetingDetailsQaSuccess,
  getZoomMeetingDetailsQaFail,
  getZoomMeetingDetailsPollSuccess,
  getZoomMeetingDetailsPollFail,
  getZoomMeetingDetailsMediaSuccess,
  getZoomMeetingDetailsMediaFail,
  getDeepDiveAssessmentReportSuccess,
  getDeepDiveAssessmentReportFail,
  updatePollRangeValueSuccess,
  updatePollRangeValueFail,
  mergeAssessmentReportSuccess,
  mergeAssessmentReportFail,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getDeepDiveEventListAPI,
  getStartUpListAPI,
  getPitchDayListAPI,
  getOtherDetailsAPI,
  addDeepDiveEventAPI,
  getDeepDiveEventDetailsAPI,
  updateDeepDiveEventAPI,
  deleteDeepDiveEventAPI,
  getCompletedDeepDiveEventAPI,
  getZoomMeetingDetailsParticipantsAPI,
  getZoomMeetingDetailsQAAPI,
  getZoomMeetingDetailsPollAPI,
  getDeepDiveAssessmentReportAPI,
  getZoomMeetingDetailsMediaAPI,
  updatePollRangeValueAPI,
  mergeAssessmentReportAPI,
} from "../../helpers/backend_helper";

function* mergeAssessmentReport(payload) {
  try {
    const response = yield call(mergeAssessmentReportAPI, payload);
    yield put(mergeAssessmentReportSuccess(response));
  } catch (error) {
    yield put(mergeAssessmentReportFail(error));
  }
}

function* updatePollRangeValue(payload) {
  try {
    const response = yield call(updatePollRangeValueAPI, payload);
    yield put(updatePollRangeValueSuccess(response));
  } catch (error) {
    yield put(updatePollRangeValueFail(error));
  }
}

function* fetchZoomMeetingDetailsMedia(payload) {
  try {
    const response = yield call(getZoomMeetingDetailsMediaAPI, payload);
    yield put(getZoomMeetingDetailsMediaSuccess(response));
  } catch (error) {
    yield put(getZoomMeetingDetailsMediaFail(error));
  }
}

function* fetchDeepDiveAssessmentReport(payload) {
  try {
    const response = yield call(getDeepDiveAssessmentReportAPI, payload);
    yield put(getDeepDiveAssessmentReportSuccess(response));
  } catch (error) {
    yield put(getDeepDiveAssessmentReportFail(error));
  }
}

function* fetchZoomMeetingDetailsQA(payload) {
  try {
    const response = yield call(getZoomMeetingDetailsQAAPI, payload);
    yield put(getZoomMeetingDetailsQaSuccess(response));
  } catch (error) {
    yield put(getZoomMeetingDetailsQaFail(error));
  }
}

function* fetchZoomMeetingDetailsPoll(payload) {
  try {
    const response = yield call(getZoomMeetingDetailsPollAPI, payload);
    yield put(getZoomMeetingDetailsPollSuccess(response));
  } catch (error) {
    yield put(getZoomMeetingDetailsPollFail(error));
  }
}

function* fetchZoomMeetingDetailsParticipants(payload) {
  try {
    const response = yield call(getZoomMeetingDetailsParticipantsAPI, payload);
    yield put(getZoomMeetingDetailsParticipantsSuccess(response));
  } catch (error) {
    yield put(getZoomMeetingDetailsParticipantsFail(error));
  }
}

function* fetchCompletedDeepDiveEvent() {
  try {
    const response = yield call(getCompletedDeepDiveEventAPI);
    yield put(getCompletedDeepDiveEventSuccess(response));
  } catch (error) {
    yield put(getCompletedDeepDiveEventFail(error));
  }
}

function* deleteDeepDiveEvent(payload) {
  try {
    const response = yield call(deleteDeepDiveEventAPI, payload);
    yield put(deleteDeepDiveEventSuccess(response));
  } catch (error) {
    yield put(deleteDeepDiveEventFail(error));
  }
}

function* getDeepDiveEventDetails(payload) {
  try {
    const response = yield call(getDeepDiveEventDetailsAPI, payload);
    yield put(getDeepDiveEventDetailsSuccess(response));
  } catch (error) {
    yield put(getDeepDiveEventDetailsFail(error));
  }
}

function* updateDeepDiveEvent(payload) {
  try {
    const response = yield call(updateDeepDiveEventAPI, payload);
    yield put(updateDeepDiveEventSuccess(response));
  } catch (error) {
    yield put(updateDeepDiveEventFail(error));
  }
}

function* addDeepDiveEvent(payload) {
  try {
    const response = yield call(addDeepDiveEventAPI, payload);
    yield put(addDeepDiveEventSuccess(response));
  } catch (error) {
    yield put(addDeepDiveEventFail(error));
  }
}

function* fetchOtherDetails(payload) {
  try {
    const response = yield call(getOtherDetailsAPI, payload);
    yield put(getOtherDetailsSuccess(response));
  } catch (error) {
    yield put(getOtherDetailsFail(error));
  }
}

function* fetchPitchDayList(payload) {
  try {
    const response = yield call(getPitchDayListAPI, payload);
    yield put(getPitchDayListSuccess(response));
  } catch (error) {
    yield put(getPitchDayListFail(error));
  }
}

function* fetchDeepDiveEventList(payload) {
  try {
    const response = yield call(getDeepDiveEventListAPI, payload);
    yield put(getDeepDiveEventListSuccess(response));
  } catch (error) {
    yield put(getDeepDiveEventListFail(error));
  }
}

function* fetchStartUpList() {
  try {
    const response = yield call(getStartUpListAPI);
    yield put(getStartUpListSuccess(response.Startup));
  } catch (error) {
    yield put(getStartUpListFail(error));
  }
}

function* deepDiveEventSaga() {
  yield takeEvery(GET_DEEP_DIVE_EVENT_LIST, fetchDeepDiveEventList);
  yield takeEvery(GET_START_UP_LIST, fetchStartUpList);
  yield takeEvery(GET_PITCH_DAY_LIST, fetchPitchDayList);
  yield takeEvery(GET_OTHER_DETAILS, fetchOtherDetails);
  yield takeEvery(ADD_DEEP_DIVE_EVENT, addDeepDiveEvent);
  yield takeEvery(GET_DEEP_DIVE_EVENT_DETAILS, getDeepDiveEventDetails);
  yield takeEvery(UPDATE_DEEP_DIVE_EVENT, updateDeepDiveEvent);
  yield takeEvery(DELETE_DEEP_DIVE_EVENT, deleteDeepDiveEvent);
  yield takeEvery(
    GET_COMPLETED_DEEP_DIVE_EVENT_LIST,
    fetchCompletedDeepDiveEvent
  );
  yield takeEvery(
    GET_ZOOM_MEETING_DETAILS_PARTICIPANTS,
    fetchZoomMeetingDetailsParticipants
  );
  yield takeEvery(GET_ZOOM_MEETING_DETAILS_QA, fetchZoomMeetingDetailsQA);
  yield takeEvery(GET_ZOOM_MEETING_DETAILS_POLL, fetchZoomMeetingDetailsPoll);
  yield takeEvery(
    GET_DEEP_DIVE_ASSESSMENT_REPORT,
    fetchDeepDiveAssessmentReport
  );
  yield takeEvery(GET_ZOOM_MEETING_DETAILS_MEDIA, fetchZoomMeetingDetailsMedia);
  yield takeEvery(UPDATE_POLL_RANGE_VALUE, updatePollRangeValue);
  yield takeEvery(MERGE_ASSESSMENT_REPORT, mergeAssessmentReport);
}

export default deepDiveEventSaga;
