import {
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST,
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST_SUCCESS,
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST_FAIL,
  GET_DEEP_DIVE_EVENT_LIST,
  GET_DEEP_DIVE_EVENT_LIST_SUCCESS,
  GET_DEEP_DIVE_EVENT_LIST_FAIL,
  GET_START_UP_LIST,
  GET_START_UP_LIST_SUCCESS,
  GET_START_UP_LIST_FAIL,
  GET_PITCH_DAY_LIST,
  GET_PITCH_DAY_LIST_SUCCESS,
  GET_PITCH_DAY_LIST_FAIL,
  GET_OTHER_DETAILS,
  GET_OTHER_DETAILS_SUCCESS,
  GET_OTHER_DETAILS_FAIL,
  ADD_DEEP_DIVE_EVENT,
  ADD_DEEP_DIVE_EVENT_SUCCESS,
  ADD_DEEP_DIVE_EVENT_FAIL,
  UPDATE_DEEP_DIVE_EVENT,
  UPDATE_DEEP_DIVE_EVENT_SUCCESS,
  UPDATE_DEEP_DIVE_EVENT_FAIL,
  GET_DEEP_DIVE_EVENT_DETAILS,
  GET_DEEP_DIVE_EVENT_DETAILS_SUCCESS,
  GET_DEEP_DIVE_EVENT_DETAILS_FAIL,
  DELETE_DEEP_DIVE_EVENT,
  DELETE_DEEP_DIVE_EVENT_SUCCESS,
  DELETE_DEEP_DIVE_EVENT_FAIL,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_FAIL,
  GET_ZOOM_MEETING_DETAILS_QA,
  GET_ZOOM_MEETING_DETAILS_QA_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_QA_FAIL,
  GET_ZOOM_MEETING_DETAILS_POLL,
  GET_ZOOM_MEETING_DETAILS_POLL_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_POLL_FAIL,
  GET_DEEP_DIVE_ASSESSMENT_REPORT,
  GET_DEEP_DIVE_ASSESSMENT_REPORT_SUCCESS,
  GET_DEEP_DIVE_ASSESSMENT_REPORT_FAIL,
  GET_ZOOM_MEETING_DETAILS_MEDIA,
  GET_ZOOM_MEETING_DETAILS_MEDIA_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_MEDIA_FAIL,
  UPDATE_POLL_RANGE_VALUE,
  UPDATE_POLL_RANGE_VALUE_SUCCESS,
  UPDATE_POLL_RANGE_VALUE_FAIL,
  MERGE_ASSESSMENT_REPORT_SUCCESS,
  MERGE_ASSESSMENT_REPORT_FAIL,
} from "./actionTypes";

// mergeAssessmentReport
export const mergeAssessmentReport = payload => ({
  type: MERGE_ASSESSMENT_REPORT,
  payload: payload,
});

export const mergeAssessmentReportSuccess = response => {
  return {
    type: MERGE_ASSESSMENT_REPORT_SUCCESS,
    payload: response,
  };
};

export const mergeAssessmentReportFail = error => ({
  type: MERGE_ASSESSMENT_REPORT_FAIL,
  payload: error,
});

export const updatePollRangeValue = payload => ({
  type: UPDATE_POLL_RANGE_VALUE,
  payload: payload,
});

export const updatePollRangeValueSuccess = response => {
  return {
    type: UPDATE_POLL_RANGE_VALUE_SUCCESS,
    payload: response,
  };
};

export const updatePollRangeValueFail = error => ({
  type: UPDATE_POLL_RANGE_VALUE_FAIL,
  payload: error,
});

export const getZoomMeetingDetailsMedia = payload => ({
  type: GET_ZOOM_MEETING_DETAILS_MEDIA,
  payload: payload,
});

export const getZoomMeetingDetailsMediaSuccess = response => {
  return {
    type: GET_ZOOM_MEETING_DETAILS_MEDIA_SUCCESS,
    payload: response,
  };
};

export const getZoomMeetingDetailsMediaFail = error => ({
  type: GET_ZOOM_MEETING_DETAILS_MEDIA_FAIL,
  payload: error,
});

export const getDeepDiveAssessmentReport = payload => ({
  type: GET_DEEP_DIVE_ASSESSMENT_REPORT,
  payload: payload,
});

export const getDeepDiveAssessmentReportSuccess = response => {
  return {
    type: GET_DEEP_DIVE_ASSESSMENT_REPORT_SUCCESS,
    payload: response,
  };
};

export const getDeepDiveAssessmentReportFail = error => ({
  type: GET_DEEP_DIVE_ASSESSMENT_REPORT_FAIL,
  payload: error,
});

/** Start
 * Get Deep Dive Event's Zoom Meeting Details. PARTICIPANTS
 */
export const getZoomMeetingDetailsParticipants = payload => ({
  type: GET_ZOOM_MEETING_DETAILS_PARTICIPANTS,
  payload: payload,
});

export const getZoomMeetingDetailsParticipantsSuccess = response => {
  return {
    type: GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_SUCCESS,
    payload: response,
  };
};

export const getZoomMeetingDetailsParticipantsFail = error => ({
  type: GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_FAIL,
  payload: error,
});
/** End
 * Get Deep Dive Event's Zoom Meeting Details.
 */

/** Start
 * Get Deep Dive Event's Zoom Meeting Details. PARTICIPANTS
 */
export const getZoomMeetingDetailsQa = payload => ({
  type: GET_ZOOM_MEETING_DETAILS_QA,
  payload: payload,
});

export const getZoomMeetingDetailsQaSuccess = response => {
  return {
    type: GET_ZOOM_MEETING_DETAILS_QA_SUCCESS,
    payload: response,
  };
};

export const getZoomMeetingDetailsQaFail = error => ({
  type: GET_ZOOM_MEETING_DETAILS_QA_FAIL,
  payload: error,
});
/** End
 * Get Deep Dive Event's Zoom Meeting Details.
 */

/** Start
 * Get Deep Dive Event's Zoom Meeting Details. PARTICIPANTS
 */
export const getZoomMeetingDetailsPoll = payload => ({
  type: GET_ZOOM_MEETING_DETAILS_POLL,
  payload: payload,
});

export const getZoomMeetingDetailsPollSuccess = response => {
  return {
    type: GET_ZOOM_MEETING_DETAILS_POLL_SUCCESS,
    payload: response,
  };
};

export const getZoomMeetingDetailsPollFail = error => ({
  type: GET_ZOOM_MEETING_DETAILS_POLL_FAIL,
  payload: error,
});
/** End
 * Get Deep Dive Event's Zoom Meeting Details.
 */

export const getCompletedDeepDiveEvent = payload => ({
  type: GET_COMPLETED_DEEP_DIVE_EVENT_LIST,
  payload: payload,
});

export const getCompletedDeepDiveEventSuccess = list => {
  return {
    type: GET_COMPLETED_DEEP_DIVE_EVENT_LIST_SUCCESS,
    payload: list,
  };
};

export const getCompletedDeepDiveEventFail = error => ({
  type: GET_COMPLETED_DEEP_DIVE_EVENT_LIST_FAIL,
  payload: error,
});

export const getDeepDiveEventList = payload => ({
  type: GET_DEEP_DIVE_EVENT_LIST,
  payload: payload,
});

export const getDeepDiveEventListSuccess = list => {
  return {
    type: GET_DEEP_DIVE_EVENT_LIST_SUCCESS,
    payload: list,
  };
};

export const getDeepDiveEventListFail = error => ({
  type: GET_DEEP_DIVE_EVENT_LIST_FAIL,
  payload: error,
});

export const getStartUpList = () => ({
  type: GET_START_UP_LIST,
});

export const getStartUpListSuccess = list => ({
  type: GET_START_UP_LIST_SUCCESS,
  payload: list,
});

export const getStartUpListFail = error => ({
  type: GET_START_UP_LIST_FAIL,
  payload: error,
});

export const getPitchDayList = payload => ({
  type: GET_PITCH_DAY_LIST,
  payload: payload,
});

export const getPitchDayListSuccess = list => ({
  type: GET_PITCH_DAY_LIST_SUCCESS,
  payload: list,
});

export const getPitchDayListFail = error => ({
  type: GET_PITCH_DAY_LIST_FAIL,
  error: error,
});

export const getOtherDetails = payload => ({
  type: GET_OTHER_DETAILS,
  payload: payload,
});

export const getOtherDetailsSuccess = list => ({
  type: GET_OTHER_DETAILS_SUCCESS,
  payload: list,
});

export const getOtherDetailsFail = error => ({
  type: GET_OTHER_DETAILS_FAIL,
  error: error,
});

export const addDeepDiveEvent = payload => ({
  type: ADD_DEEP_DIVE_EVENT,
  payload: payload,
});

export const addDeepDiveEventSuccess = list => ({
  type: ADD_DEEP_DIVE_EVENT_SUCCESS,
  payload: list,
});

export const addDeepDiveEventFail = error => ({
  type: ADD_DEEP_DIVE_EVENT_FAIL,
  error: error,
});

export const getDeepDiveEventDetails = payload => {
  console.log("===>>>=== payload ===<<<===", payload);
  return {
    type: GET_DEEP_DIVE_EVENT_DETAILS,
    payload: payload,
  };
};

export const getDeepDiveEventDetailsSuccess = payload => ({
  type: GET_DEEP_DIVE_EVENT_DETAILS_SUCCESS,
  payload: payload,
});

export const getDeepDiveEventDetailsFail = payload => ({
  type: GET_DEEP_DIVE_EVENT_DETAILS_FAIL,
  payload: payload,
});

export const updateDeepDiveEvent = payload => ({
  type: UPDATE_DEEP_DIVE_EVENT,
  payload: payload,
});

export const updateDeepDiveEventSuccess = payload => ({
  type: UPDATE_DEEP_DIVE_EVENT_SUCCESS,
  payload: payload,
});

export const updateDeepDiveEventFail = payload => ({
  type: UPDATE_DEEP_DIVE_EVENT_FAIL,
  payload: payload,
});

export const deleteDeepDiveEvent = payload => ({
  type: DELETE_DEEP_DIVE_EVENT,
  payload: payload,
});

export const deleteDeepDiveEventSuccess = payload => ({
  type: DELETE_DEEP_DIVE_EVENT_SUCCESS,
  payload: payload,
});

export const deleteDeepDiveEventFail = payload => ({
  type: DELETE_DEEP_DIVE_EVENT_FAIL,
  payload: payload,
});
