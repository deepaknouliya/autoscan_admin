import {
  GET_FUNDING_DEAL_DETAILS,
  GET_FUNDING_DEAL_DETAILS_SUCCESS,
  GET_FUNDING_DEAL_DETAILS_FAIL,
  GET_ASSESSMENT_REPORT,
  GET_ASSESSMENT_REPORT_SUCCESS,
  GET_ASSESSMENT_REPORT_FAIL,
  GET_PITCH_DAY_POSTS,
  GET_PITCH_DAY_POSTS_FAIL,
  GET_PITCH_DAY_POSTS_SUCCESS,
  DELETE_PITCH_DAY,
  DELETE_PITCH_DAY_SUCCESS,
  DELETE_PITCH_DAY_FAIL,
  ADD_PITCH_DAY,
  ADD_PITCH_DAY_SUCCESS,
  ADD_PITCH_DAY_FAIL,
  GET_PITCH_FOUNDERS,
  GET_PITCH_FOUNDERS_SUCCESS,
  GET_PITCH_FOUNDERS_FAIL,
  GET_PITCH_INVESTORS,
  GET_PITCH_INVESTORS_SUCCESS,
  GET_PITCH_INVESTORS_FAIL,
  GET_PITCH_PANELLIST,
  GET_PITCH_PANELLIST_SUCCESS,
  GET_PITCH_PANELLIST_FAIL,
  GET_PITCH_DAY_DETAIL,
  GET_PITCH_DAY_DETAIL_SUCCESS,
  GET_PITCH_DAY_DETAIL_FAIL,
  UPDATE_PITCH_DAY,
  UPDATE_PITCH_DAY_SUCCESS,
  UPDATE_PITCH_DAY_FAIL,
  SEND_INVITE_TO_ALL,
  SEND_INVITE_TO_ALL_SUCCESS,
  SEND_INVITE_TO_ALL_FAIL,
  SEND_INVITE_TO_INVESTOR,
  SEND_INVITE_TO_INVESTOR_SUCCESS,
  SEND_INVITE_TO_INVESTOR_FAIL,
  SEND_INVITE_TO_FOUNDER,
  SEND_INVITE_TO_FOUNDER_SUCCESS,
  SEND_INVITE_TO_FOUNDER_FAIL,
  GET_POST_EVENT_LIST,
  GET_POST_EVENT_LIST_SUCCESS,
  GET_POST_EVENT_LIST_FAIL,
  GET_POST_EVENT_DETAIL,
  GET_POST_EVENT_DETAIL_SUCCESS,
  GET_POST_EVENT_DETAIL_FAIL,
  FETCH_RECORDING,
  FETCH_RECORDING_SUCCESS,
  FETCH_RECORDING_FAIL,
  FETCH_QA,
  FETCH_QA_SUCCESS,
  FETCH_QA_FAIL,
  FETCH_POLL_SUCCESS,
  FETCH_POLL,
  FETCH_POLL_FAIL,
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAIL,
  UPDATE_EVENT_QUESTION,
  UPDATE_EVENT_QUESTION_SUCCESS,
  UPDATE_EVENT_QUESTION_FAIL,
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  ASSOCIATE_POLL,
  ASSOCIATE_POLL_SUCCESS,
  ASSOCIATE_POLL_FAIL,
  GET_ASSOCIATE_POLL,
  GET_ASSOCIATE_POLL_SUCCESS,
  GET_ASSOCIATE_POLL_FAIL,
  GET_EVENT_PARTICIPANTS,
  GET_EVENT_PARTICIPANTS_SUCCESS,
  GET_EVENT_PARTICIPANTS_FAIL,
  FETCH_REGISTRANTS,
  FETCH_REGISTRANTS_FAIL,
  FETCH_REGISTRANTS_SUCCESS,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAIL,
  FETCH_POLL_REPORT,
  FETCH_POLL_REPORT_FAIL,
  GENERATE_POLL_REPORT,
  GENERATE_POLL_REPORT_SUCCESS,
  GENERATE_POLL_REPORT_FAIL,
  STORE_OTHER_DETAILS,
  STORE_OTHER_DETAILS_SUCCESS,
  STORE_OTHER_DETAILS_FAIL,
  SEND_ZOOM_MEETING_INVITATION,
  SEND_ZOOM_MEETING_INVITATION_SUCCESS,
  SEND_ZOOM_MEETING_INVITATION_FAIL,
  UPDATE_DEEPDIVE_ROLE,
  UPDATE_DEEPDIVE_ROLE_SUCCESS,
  UPDATE_DEEPDIVE_ROLE_FAIL,
} from "./actionTypes";

// sendZoomMeetingInvitation

export const sendZoomMeetingInvitation = pitchdays => ({
  type: SEND_ZOOM_MEETING_INVITATION,
  payload: pitchdays,
});

export const sendZoomMeetingInvitationSuccess = pitchdays => ({
  type: SEND_ZOOM_MEETING_INVITATION_SUCCESS,
  payload: pitchdays,
});

export const sendZoomMeetingInvitationFail = error => ({
  type: SEND_ZOOM_MEETING_INVITATION_FAIL,
  payload: error,
});

export const getPitchDays = () => ({
  type: GET_PITCH_DAY_POSTS,
});

export const getPitchDaysSuccess = pitchdays => ({
  type: GET_PITCH_DAY_POSTS_SUCCESS,
  payload: pitchdays,
});

export const getPitchDaysFail = error => ({
  type: GET_PITCH_DAY_POSTS_FAIL,
  payload: error,
});

export const getPitchDayDetail = pitchday => ({
  type: GET_PITCH_DAY_DETAIL,
  payload: pitchday,
});

export const getPitchDayDetailSuccess = pitchdays => ({
  type: GET_PITCH_DAY_DETAIL_SUCCESS,
  payload: pitchdays,
});

export const getPitchDayDetailFail = error => ({
  type: GET_PITCH_DAY_DETAIL_FAIL,
  payload: error,
});

export const updatePitchDay = pitchday => ({
  type: UPDATE_PITCH_DAY,
  payload: pitchday,
});

// export const getAssessmentReport = pitchday => {
//   return {
//     type: GET_ASSESSMENT_REPORT,
//     payload: pitchday,
//   };
// };

// export const getAssessmentReportSuccess = pitchday => ({
//   type: GET_ASSESSMENT_REPORT_SUCCESS,
//   payload: pitchday,
// });

// export const getAssessmentReportFail = pitchday => ({
//   type: GET_ASSESSMENT_REPORT_FAIL,
//   payload: pitchday,
// });

export const updatePitchDaySuccess = pitchday => ({
  type: UPDATE_PITCH_DAY_SUCCESS,
  payload: pitchday,
});

export const updatePitchDayFail = error => ({
  type: UPDATE_PITCH_DAY_FAIL,
  payload: error,
});

// UPDATE_DEEPDIVE_ROLE
export const updateDeepDiveRole = pitchday => ({
  type: UPDATE_DEEPDIVE_ROLE,
  payload: pitchday,
});

export const updateDeepDiveRoleSuccess = pitchday => ({
  type: UPDATE_DEEPDIVE_ROLE_SUCCESS,
  payload: pitchday,
});

export const updateDeepDiveRoleFail = error => ({
  type: UPDATE_DEEPDIVE_ROLE_FAIL,
  payload: error,
});

export const updateRole = pitchday => ({
  type: UPDATE_ROLE,
  payload: pitchday,
});

export const updateRoleSuccess = pitchday => ({
  type: UPDATE_ROLE_SUCCESS,
  payload: pitchday,
});

export const updateRoleFail = error => ({
  type: UPDATE_ROLE_FAIL,
  payload: error,
});

export const getPitchFounders = (payload) => ({
  type: GET_PITCH_FOUNDERS,
  payload : payload
});

export const getPitchFoundersSuccess = pitchfounders => ({
  type: GET_PITCH_FOUNDERS_SUCCESS,
  payload: pitchfounders,
});

export const getPitchFoundersFail = error => ({
  type: GET_PITCH_FOUNDERS_FAIL,
  payload: error,
});

export const getPitchInvestors = (payload) => ({
  type: GET_PITCH_INVESTORS,
  payload : payload
});

export const getPitchPanellist = (payload) => ({
  type: GET_PITCH_PANELLIST,
  payload : payload
});

export const getPitchInvestorsSuccess = pitchinvestors => ({
  type: GET_PITCH_INVESTORS_SUCCESS,
  payload: pitchinvestors,
});

export const getPitchPanellistSuccess = pitchpanellists => ({
  type: GET_PITCH_PANELLIST_SUCCESS,
  payload: pitchpanellists,
});

export const getPitchInvestorsFail = error => ({
  type: GET_PITCH_INVESTORS_FAIL,
  payload: error,
});
export const getPitchPanllistFail= error => ({
  type: GET_PITCH_PANELLIST_FAIL,
  payload: error,
});

export const deletePitchDay = pitchday => ({
  type: DELETE_PITCH_DAY,
  payload: pitchday,
});

export const deletePitchDaySuccess = pitchday => ({
  type: DELETE_PITCH_DAY_SUCCESS,
  payload: pitchday,
});

export const deletePitchDayFail = error => ({
  type: DELETE_PITCH_DAY_FAIL,
  payload: error,
});

export const addPitchDay = pitchday => ({
  type: ADD_PITCH_DAY,
  payload: pitchday,
});

export const addPitchDaySuccess = pitchday => ({
  type: ADD_PITCH_DAY_SUCCESS,
  payload: pitchday,
});

export const addPitchDayFail = error => ({
  type: ADD_PITCH_DAY_FAIL,
  payload: error,
});

export const sendInvitationToAll = pitchday => ({
  type: SEND_INVITE_TO_ALL,
  payload: pitchday,
});

export const sendInvitationToAllSuccess = pitchday => ({
  type: SEND_INVITE_TO_ALL_SUCCESS,
  payload: pitchday,
});

export const sendInvitationToAllFail = error => ({
  type: SEND_INVITE_TO_ALL_FAIL,
  payload: error,
});

export const sendInvitationToInvestor = pitchday => ({
  type: SEND_INVITE_TO_INVESTOR,
  payload: pitchday,
});

export const sendInvitationToInvestorSuccess = pitchday => ({
  type: SEND_INVITE_TO_INVESTOR_SUCCESS,
  payload: pitchday,
});

export const sendInvitationToInvestorFail = error => ({
  type: SEND_INVITE_TO_INVESTOR_FAIL,
  payload: error,
});

export const sendInvitationToFounder = pitchday => ({
  type: SEND_INVITE_TO_FOUNDER,
  payload: pitchday,
});

export const sendInvitationToFounderSuccess = pitchday => ({
  type: SEND_INVITE_TO_FOUNDER_SUCCESS,
  payload: pitchday,
});

export const sendInvitationToFounderFail = error => ({
  type: SEND_INVITE_TO_FOUNDER_FAIL,
  payload: error,
});

export const getPostEventList = () => ({
  type: GET_POST_EVENT_LIST,
});

export const getPostEventListSuccess = pitchdays => ({
  type: GET_POST_EVENT_LIST_SUCCESS,
  payload: pitchdays,
});

export const getPostEventListFail = error => ({
  type: GET_POST_EVENT_LIST_FAIL,
  payload: error,
});

export const getPostEventDetail = payload => ({
  type: GET_POST_EVENT_DETAIL,
  payload: payload,
});

export const getPostEventDetailSuccess = pitchday => ({
  type: GET_POST_EVENT_DETAIL_SUCCESS,
  payload: pitchday,
});

export const getPostEventDetailFail = error => ({
  type: GET_POST_EVENT_DETAIL_FAIL,
  payload: error,
});

export const fetchRecording = id => ({
  type: FETCH_RECORDING,
  payload: id,
});

export const fetchRecordingSuccess = pitchday => ({
  type: FETCH_RECORDING_SUCCESS,
  payload: pitchday,
});

export const fetchRecordingFail = error => ({
  type: FETCH_RECORDING_FAIL,
  payload: error,
});

export const fetchQa = id => ({
  type: FETCH_QA,
  payload: id,
});

export const fetchQaSuccess = pitchday => ({
  type: FETCH_QA_SUCCESS,
  payload: pitchday,
});

export const fetchQaFail = error => ({
  type: FETCH_QA_FAIL,
  payload: error,
});

export const fetchPoll = id => ({
  type: FETCH_POLL,
  payload: id,
});

export const fetchPollSuccess = pitchday => ({
  type: FETCH_POLL_SUCCESS,
  payload: pitchday,
});

export const fetchPollFail = error => ({
  type: FETCH_POLL_FAIL,
  payload: error,
});

export const fetchPollReport = id => ({
  type: FETCH_POLL_REPORT,
  payload: id,
});

export const fetchPollReportSuccess = pitchday => ({
  type: FETCH_POLL_REPORT_SUCCESS,
  payload: pitchday,
});

export const fetchPollReportFail = error => ({
  type: FETCH_POLL_REPORT_FAIL,
  payload: error,
});

export const getEventParticipants = id => ({
  type: GET_EVENT_PARTICIPANTS,
  payload: id,
});

export const getEventParticipantsSuccess = pitchday => ({
  type: GET_EVENT_PARTICIPANTS_SUCCESS,
  payload: pitchday,
});

export const getEventParticipantsFail = error => ({
  type: GET_EVENT_PARTICIPANTS_FAIL,
  payload: error,
});

export const fetchRegistrants = id => ({
  type: FETCH_REGISTRANTS,
  payload: id,
});

export const fetchRegistrantsSuccess = pitchday => ({
  type: FETCH_REGISTRANTS_SUCCESS,
  payload: pitchday,
});

export const fetchRegistrantsFail = error => ({
  type: FETCH_REGISTRANTS_FAIL,
  payload: error,
});

export const updateEventQuestions = pitchday => ({
  type: UPDATE_EVENT_QUESTION,
  payload: pitchday,
});

export const updateEventQuestionsSuccess = pitchday => ({
  type: UPDATE_EVENT_QUESTION_SUCCESS,
  payload: pitchday,
});

export const updateEventQuestionsFail = error => ({
  type: UPDATE_EVENT_QUESTION_FAIL,
  payload: error,
});

export const addQuestions = pitchday => ({
  type: ADD_QUESTION,
  payload: pitchday,
});

export const addQuestionsSuccess = pitchday => ({
  type: ADD_QUESTION_SUCCESS,
  payload: pitchday,
});

export const addQuestionsFail = error => ({
  type: ADD_QUESTION_FAIL,
  payload: error,
});

export const getQuestions = id => ({
  type: GET_QUESTION,
  payload: id,
});

export const getQuestionsSuccess = pitchday => ({
  type: GET_QUESTION_SUCCESS,
  payload: pitchday,
});

export const getQuestionsFail = error => ({
  type: GET_QUESTION_FAIL,
  payload: error,
});

export const associatePoll = pitchday => ({
  type: ASSOCIATE_POLL,
  payload: pitchday,
});

export const associatePollSuccess = pitchday => ({
  type: ASSOCIATE_POLL_SUCCESS,
  payload: pitchday,
});

export const associatePollFail = error => ({
  type: ASSOCIATE_POLL_FAIL,
  payload: error,
});

export const getAssociatePoll = id => ({
  type: GET_ASSOCIATE_POLL,
  payload: id,
});

export const getAssociatePollSuccess = pitchday => ({
  type: GET_ASSOCIATE_POLL_SUCCESS,
  payload: pitchday,
});

export const getAssociatePollFail = error => ({
  type: GET_ASSOCIATE_POLL_FAIL,
  payload: error,
});

export const generatePollReport = payload => ({
  type: GENERATE_POLL_REPORT,
  payload: payload,
});

export const generatePollReportSuccess = pitchday => ({
  type: GENERATE_POLL_REPORT_SUCCESS,
  payload: pitchday,
});

export const generatePollReportFail = error => ({
  type: GENERATE_POLL_REPORT_FAIL,
  payload: error,
});

export const storeOtherDetails = payload => ({
  type: STORE_OTHER_DETAILS,
  payload: payload,
});

export const storeOtherDetailsSuccess = pitchday => ({
  type: STORE_OTHER_DETAILS_SUCCESS,
  payload: pitchday,
});

export const storeOtherDetailsFail = error => ({
  type: STORE_OTHER_DETAILS_FAIL,
  payload: error,
});

export const GetFundingDealDetails = payload => ({
  type: GET_FUNDING_DEAL_DETAILS,
  payload: payload,
});

export const GetFundingDealDetailsSuccess = payload => ({
  type: GET_FUNDING_DEAL_DETAILS_SUCCESS,
  payload: payload,
});

export const GetFundingDealDetailsFail = payload => ({
  type: GET_FUNDING_DEAL_DETAILS_FAIL,
  payload: payload,
});
