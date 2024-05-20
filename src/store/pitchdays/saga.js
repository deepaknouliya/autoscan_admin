import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_ASSESSMENT_REPORT,
  GET_PITCH_DAY_POSTS,
  DELETE_PITCH_DAY,
  ADD_PITCH_DAY,
  GET_PITCH_FOUNDERS,
  GET_PITCH_INVESTORS,
  GET_PITCH_DAY_DETAIL,
  UPDATE_PITCH_DAY,
  SEND_INVITE_TO_ALL,
  SEND_INVITE_TO_INVESTOR,
  SEND_INVITE_TO_FOUNDER,
  GET_POST_EVENT_LIST,
  FETCH_RECORDING,
  GET_POST_EVENT_DETAIL,
  FETCH_QA,
  FETCH_POLL,
  ADD_QUESTION,
  UPDATE_EVENT_QUESTION,
  GET_QUESTION,
  ASSOCIATE_POLL,
  GET_ASSOCIATE_POLL,
  GET_EVENT_PARTICIPANTS,
  FETCH_REGISTRANTS,
  UPDATE_ROLE,
  FETCH_POLL_REPORT,
  GENERATE_POLL_REPORT,
  STORE_OTHER_DETAILS,
  SEND_ZOOM_MEETING_INVITATION,
  UPDATE_DEEPDIVE_ROLE,
  GET_FUNDING_DEAL_DETAILS,
  GET_PITCH_PANELLIST,
} from "./actionTypes";

import {
  getPitchDaysSuccess,
  getPitchDaysFail,
  deletePitchDaySuccess,
  deletePitchDayFail,
  addPitchDaySuccess,
  addPitchDayFail,
  updateRoleSuccess,
  updateRoleFail,
  fetchPollReportSuccess,
  fetchPollReportFail,
  generatePollReportSuccess,
  generatePollReportFail,
  getAssessmentReportSuccess,
  getAssessmentReportFail,
  storeOtherDetailsSuccess,
  storeOtherDetailsFail,
  sendZoomMeetingInvitationSuccess,
  sendZoomMeetingInvitationFail,
  updateDeepDiveRoleSuccess,
  updateDeepDiveRoleFail,
  GetFundingDealDetailsSuccess,
  GetFundingDealDetailsFail,
  getEventParticipants,
  getEventParticipantsSuccess,
  getEventParticipantsFail,
} from "./actions";

//Include Helper File with needed methods
import {
  getPitchDays,
  deletePitchDay,
  addPitchDay,
  getPitchFounders,
  getPitchInvestors,
  getPitchPanellist,
  getPitchDaysDetail,
  updatePitchday,
  sendInvitationToAll,
  sendInvitationToFounder,
  sendInvitationToInvestor,
  getPostEventList,
  getRecording,
  getQA,
  getPoll,
  getPostEventDetail,
  addQuestions,
  updateEventQuestion,
  getQuestions,
  AssociatePoll,
  getAssociatePoll,
  getEventParticipantsAPI,
  getRegistrants,
  updateRole,
  getPollReport,
  generatePollReport,
  getAssessmentReportAPI,
  storeOtherDetailsAPI,
  sendZoomMeetingInvitationAPI,
  updateDeepDiveRole,
  getFundingDealDetailsAPI,
} from "../../helpers/backend_helper";
import {
  fetchPollSuccess,
  fetchPollFail,
  fetchQaFail,
  fetchQaSuccess,
  fetchRecordingFail,
  fetchRecordingSuccess,
  getPitchDayDetailFail,
  getPitchDayDetailSuccess,
  getPitchFoundersFail,
  getPitchFoundersSuccess,
  getPitchInvestorsFail,
  getPitchInvestorsSuccess,
  getPitchPanellistSuccess,
  getPitchPanllistFail,
  getPostEventDetailFail,
  getPostEventDetailSuccess,
  getPostEventListFail,
  getPostEventListSuccess,
  sendInvitationToAllFail,
  sendInvitationToAllSuccess,
  sendInvitationToFounderFail,
  sendInvitationToFounderSuccess,
  sendInvitationToInvestorFail,
  sendInvitationToInvestorSuccess,
  updatePitchDayFail,
  updatePitchDaySuccess,
  addQuestionsSuccess,
  addQuestionsFail,
  updateEventQuestionsSuccess,
  updateEventQuestionsFail,
  getQuestionsSuccess,
  getQuestionsFail,
  associatePoll,
  associatePollSuccess,
  associatePollFail,
  getAssociatePollSuccess,
  getAssociatePollFail,
  fetchRegistrants,
  fetchRegistrantsFail,
  fetchRegistrantsSuccess,
} from "../../store/actions";

function* sendZoomMeetingInvitation(payload) {
  try {
    const response = yield call(sendZoomMeetingInvitationAPI, payload);
    yield put(sendZoomMeetingInvitationSuccess(response));
  } catch (error) {
    yield put(sendZoomMeetingInvitationFail(error));
  }
}

function* storeOtherDetails(payload) {
  try {
    const response = yield call(storeOtherDetailsAPI, payload);
    yield put(storeOtherDetailsSuccess(response));
  } catch (error) {
    yield put(storeOtherDetailsFail(error));
  }
}

function* fetchAssessmentReport(payload) {
  try {
    // const response = yield call(getAssessmentReportAPI, payload);
    // yield put(getAssessmentReportSuccess(response));
  } catch (error) {
    // yield put(getAssessmentReportFail(error));
  }
}

function* fetchPitchDays() {
  try {
    const response = yield call(getPitchDays);
    yield put(getPitchDaysSuccess(response.posts));
  } catch (error) {
    yield put(getPitchDaysFail(error));
  }
}

function* onDeletePitchDay({ payload: pitchday }) {
  try {
    const response = yield call(deletePitchDay, pitchday);
    yield put(deletePitchDaySuccess(response));
  } catch (error) {
    yield put(deletePitchDayFail(error));
  }
}

function* onAddPitchDay({ payload: pitchday }) {
  try {
    yield call(addPitchDay, pitchday);
    yield put(addPitchDaySuccess(pitchday));
  } catch (error) {
    yield put(addPitchDayFail(error));
  }
}

function* fetchPitchFounders(payload) {
  try {
    const response = yield call(getPitchFounders,payload);
    yield put(getPitchFoundersSuccess(response));
  } catch (error) {
    yield put(getPitchFoundersFail(error));
  }
}

function* fetchPitchInvestors(payload) {
  try {
    const response = yield call(getPitchInvestors,payload);
    yield put(getPitchInvestorsSuccess(response));
  } catch (error) {
    yield put(getPitchInvestorsFail(error));
  }
}

function* fetchPitchPanellist(payload) {
  try {
    const response = yield call(getPitchPanellist,payload);
    yield put(getPitchPanellistSuccess(response));
  } catch (error) {
    yield put(getPitchPanllistFail(error));
  }
}

function* onGetPitchDay({ payload: pitchday }) {
  try {
    const response = yield call(getPitchDaysDetail, pitchday);
    yield put(getPitchDayDetailSuccess(response));
  } catch (error) {
    yield put(getPitchDayDetailFail(error));
  }
}

function* onUpdatePitchDay({ payload: pitchday }) {
  try {
    yield call(updatePitchday, pitchday);
    yield put(updatePitchDaySuccess(pitchday));
  } catch (error) {
    yield put(updatePitchDayFail(error));
  }
}

function* onSendInvitationToAll({ payload: pitchday }) {
  try {
    yield call(sendInvitationToAll, pitchday);
    yield put(sendInvitationToAllSuccess("Email sent successfully"));
  } catch (error) {
    yield put(sendInvitationToAllFail("Something went wrong"));
  }
}

function* onSendInvitationToInvestor({ payload: pitchday }) {
  try {
    yield call(sendInvitationToInvestor, pitchday);
    yield put(sendInvitationToInvestorSuccess("Email sent successfully"));
  } catch (error) {
    yield put(sendInvitationToInvestorFail("Something went wrong"));
  }
}
function* onSendInvitationToFounder({ payload: pitchday }) {
  try {
    yield call(sendInvitationToFounder, pitchday);
    yield put(sendInvitationToFounderSuccess("Email sent successfully"));
  } catch (error) {
    yield put(sendInvitationToFounderFail("Something went wrong"));
  }
}

function* fetchPostEventList() {
  try {
    const response = yield call(getPostEventList);
    yield put(getPostEventListSuccess(response.posts));
  } catch (error) {
    yield put(getPostEventListFail(error));
  }
}

function* fetchPostEventDetail(payload) {
  try {
    const response = yield call(getPostEventDetail, payload);
    yield put(getPostEventDetailSuccess(response.post));
  } catch (error) {
    yield put(getPostEventDetailFail(error));
  }
}

function* onFetchRecording({ payload: id }) {
  try {
    const response = yield call(getRecording, id);
    yield put(fetchRecordingSuccess(response.posts));
  } catch (error) {
    yield put(fetchRecordingFail(error));
  }
}

function* onFetchQa({ payload: id }) {
  try {
    const response = yield call(getQA, id);
    yield put(fetchQaSuccess(response.posts));
  } catch (error) {
    yield put(fetchQaFail(error));
  }
}

function* onFetchPoll({ payload: id }) {
  try {
    const response = yield call(getPoll, id);
    yield put(fetchPollSuccess(response.posts));
  } catch (error) {
    yield put(fetchPollFail(error));
  }
}

function* onFetchPollReport({ payload: id }) {
  try {
    const response = yield call(getPollReport, id);
    yield put(fetchPollReportSuccess(response.posts));
  } catch (error) {
    yield put(fetchPollReportFail(error));
  }
}

function* onGetEventParticipants({ payload: id }) {
  try {
    const response = yield call(getEventParticipantsAPI, id);
    yield put(getEventParticipantsSuccess(response));
  } catch (error) {
    yield put(getEventParticipantsFail(error));
  }
}

function* onFetchRegistrants({ payload: id }) {
  try {
    const response = yield call(getRegistrants, id);
    yield put(fetchRegistrantsSuccess(response?.posts));
  } catch (error) {
    yield put(fetchRegistrantsFail(error));
  }
}

function* fetchQuestions({ payload: id }) {
  try {
    const response = yield call(getQuestions, id);
    yield put(getQuestionsSuccess(response.questions));
  } catch (error) {
    yield put(getQuestionsFail(error));
  }
}

function* onAddQuestions({ payload: pitchday }) {
  try {
    yield call(addQuestions, pitchday);
    yield put(addQuestionsSuccess(pitchday));
    yield call(fetchQuestions, { payload: pitchday.post_id });
  } catch (error) {
    yield put(addQuestionsFail(error));
  }
}

function* onUpdateEventQuestions({ payload }) {
  try {
    yield call(updateEventQuestion, payload);
    yield put(updateEventQuestionsSuccess(payload));
    yield call(fetchQuestions, { payload: payload.post_id });
  } catch (error) {
    yield put(updateEventQuestionsFail(error));
  }
}

function* fetchPolls({ payload: id }) {
  try {
    const response = yield call(getAssociatePoll, id);

    yield put(getAssociatePollSuccess(response.investors));
  } catch (error) {
    yield put(getAssociatePollFail(error));
  }
}

function* onAssociatePoll({ payload: pitchday }) {
  try {
    const response = yield call(AssociatePoll, pitchday);
    yield put(associatePollSuccess(response));
    // yield call(fetchPolls, { payload: pitchday.post_id });
    yield call(fetchPostEventDetail, { payload: { postId: pitchday.post_id } });
  } catch (error) {
    yield put(associatePollFail(error));
  }
}

function* onUpdateRole({ payload: pitchday }) {
  try {
    yield call(updateRole, pitchday);
    yield put(updateRoleSuccess(pitchday));
    yield call(fetchPostEventDetail, { payload: { postId: pitchday._id } });
  } catch (error) {
    yield put(updateRoleFail(error));
  }
}

function* onUpdateDeepDiveRole({ payload: pitchday }) {
  try {
    yield call(updateDeepDiveRole, pitchday);
    yield put(updateDeepDiveRoleSuccess(pitchday));
    yield call(fetchPostEventDetail, { payload: { postId: pitchday._id } });
  } catch (error) {
    yield put(updateDeepDiveRoleFail(error));
  }
}

function* onGeneratePollReport({ payload: pitchday }) {
  try {
    yield call(generatePollReport, pitchday);
    yield put(generatePollReportSuccess(pitchday));
  } catch (error) {
    yield put(generatePollReportFail(error));
  }
}

function* onGetFundingDealDetails({ payload: pitchday }) {
  try {
    yield call(getFundingDealDetailsAPI, payload);
    yield put(GetFundingDealDetailsSuccess(payload));
  } catch (error) {
    yield put(GetFundingDealDetailsFail(error));
  }
}

function* pitchdaysSaga() {
  yield takeEvery(GET_ASSESSMENT_REPORT, fetchAssessmentReport);
  yield takeEvery(GET_PITCH_DAY_POSTS, fetchPitchDays);
  yield takeEvery(DELETE_PITCH_DAY, onDeletePitchDay);
  yield takeEvery(ADD_PITCH_DAY, onAddPitchDay);
  yield takeEvery(GET_PITCH_FOUNDERS, fetchPitchFounders);
  yield takeEvery(GET_PITCH_INVESTORS, fetchPitchInvestors);
  yield takeEvery(GET_PITCH_PANELLIST, fetchPitchPanellist);
  yield takeEvery(GET_PITCH_DAY_DETAIL, onGetPitchDay);
  yield takeEvery(UPDATE_PITCH_DAY, onUpdatePitchDay);
  yield takeEvery(SEND_INVITE_TO_ALL, onSendInvitationToAll);
  yield takeEvery(SEND_INVITE_TO_INVESTOR, onSendInvitationToInvestor);
  yield takeEvery(SEND_INVITE_TO_FOUNDER, onSendInvitationToFounder);
  yield takeEvery(GET_POST_EVENT_LIST, fetchPostEventList);
  yield takeEvery(GET_POST_EVENT_DETAIL, fetchPostEventDetail);
  yield takeEvery(FETCH_RECORDING, onFetchRecording);
  yield takeEvery(FETCH_QA, onFetchQa);
  yield takeEvery(FETCH_POLL, onFetchPoll);
  yield takeEvery(ADD_QUESTION, onAddQuestions);
  yield takeEvery(UPDATE_EVENT_QUESTION, onUpdateEventQuestions);
  yield takeEvery(GET_QUESTION, fetchQuestions);
  yield takeEvery(ASSOCIATE_POLL, onAssociatePoll);
  yield takeEvery(GET_ASSOCIATE_POLL, fetchPolls);
  yield takeEvery(GET_EVENT_PARTICIPANTS, onGetEventParticipants);
  yield takeEvery(FETCH_REGISTRANTS, onFetchRegistrants);
  yield takeEvery(UPDATE_ROLE, onUpdateRole);
  yield takeEvery(FETCH_POLL_REPORT, onFetchPollReport);
  yield takeEvery(GENERATE_POLL_REPORT, onGeneratePollReport);
  yield takeEvery(STORE_OTHER_DETAILS, storeOtherDetails);
  yield takeEvery(SEND_ZOOM_MEETING_INVITATION, sendZoomMeetingInvitation);
  yield takeEvery(UPDATE_DEEPDIVE_ROLE, onUpdateDeepDiveRole);
  yield takeEvery(GET_FUNDING_DEAL_DETAILS, onGetFundingDealDetails);
}

export default pitchdaysSaga;
