import {
  GET_DEEP_DIVE_EVENT_LIST_SUCCESS,
  GET_DEEP_DIVE_EVENT_LIST_FAIL,
  GET_START_UP_LIST_SUCCESS,
  GET_START_UP_LIST_FAIL,
  GET_PITCH_DAY_LIST_SUCCESS,
  GET_PITCH_DAY_LIST_FAIL,
  GET_OTHER_DETAILS_SUCCESS,
  GET_OTHER_DETAILS_FAIL,
  ADD_DEEP_DIVE_EVENT_SUCCESS,
  ADD_DEEP_DIVE_EVENT_FAIL,
  UPDATE_DEEP_DIVE_EVENT_SUCCESS,
  UPDATE_DEEP_DIVE_EVENT_FAIL,
  GET_DEEP_DIVE_EVENT_DETAILS_SUCCESS,
  GET_DEEP_DIVE_EVENT_DETAILS_FAIL,
  DELETE_DEEP_DIVE_EVENT_SUCCESS,
  DELETE_DEEP_DIVE_EVENT_FAIL,
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST_SUCCESS,
  GET_COMPLETED_DEEP_DIVE_EVENT_LIST_FAIL,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_FAIL,
  GET_ZOOM_MEETING_DETAILS_QA_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_QA_FAIL,
  GET_ZOOM_MEETING_DETAILS_POLL_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_POLL_FAIL,
  GET_DEEP_DIVE_ASSESSMENT_REPORT_SUCCESS,
  GET_DEEP_DIVE_ASSESSMENT_REPORT_FAIL,
  GET_ZOOM_MEETING_DETAILS_MEDIA_SUCCESS,
  GET_ZOOM_MEETING_DETAILS_MEDIA_FAIL,
  UPDATE_POLL_RANGE_VALUE_SUCCESS,
  UPDATE_POLL_RANGE_VALUE_FAIL,
  MERGE_ASSESSMENT_REPORT_SUCCESS,
  MERGE_ASSESSMENT_REPORT_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  newDeepDiveEvent: "",
  errorNewDeepDiveEvent: "",
  deepDiveEventList: [],
  startUpList: [],
  pitchDayList: [],
  otherDetails: [],
  updateDeepDiveEventSuccess: "",
  updateDeepDiveEventError: "",
  deepDiveEventDetails: {},
  errorDeepDiveEventDetails: "",
  deleteDeepDiveEventSuccess: "",
  deleteDeepDiveEventError: "",
  getCompletedDeepDiveEventSuccess: [],
  getCompletedDeepDiveEventFail: "",
  zoomeMeetingSuccess: [],
  zoomeMeetingFail: "",
  participants: {},
  participantsError: "",
  questionanswer: {},
  questionanswerError: "",
  polls: {},
  pollsError: "",
  deepDiveAssessmentReport: {},
  deepDiveAssessmentReportError: "",
  media: {},
  mediaError: "",
  updateRangeValue: {},
  updateRangeValueError: "",
  mergeAssessmentReport: {},
  mergeAssessmentReportError: "",
};

const deepDiveEvent = (state = INIT_STATE, action) => {
  switch (action.type) {
    case MERGE_ASSESSMENT_REPORT_SUCCESS:
      return {
        ...state,
        mergeAssessmentReport: action.payload,
        mergeAssessmentReportError: "",
      };
    case MERGE_ASSESSMENT_REPORT_FAIL:
      return {
        ...state,
        mergeAssessmentReportError:
          "Something went wrong for update poll range value.",
        mergeAssessmentReport: {},
      };

    case UPDATE_POLL_RANGE_VALUE_SUCCESS:
      return {
        ...state,
        updateRangeValue: action.payload,
        updateRangeValueError: "",
      };
    case UPDATE_POLL_RANGE_VALUE_FAIL:
      return {
        ...state,
        updateRangeValueError:
          "Something went wrong for update poll range value.",
        updateRangeValue: {},
      };

    case GET_ZOOM_MEETING_DETAILS_MEDIA_SUCCESS:
      return {
        ...state,
        media: action.payload,
        mediaError: "",
      };
    case GET_ZOOM_MEETING_DETAILS_MEDIA_FAIL:
      return {
        ...state,
        mediaError: "Something went wrong for deep dive assessment report.",
        media: {},
      };

    case GET_DEEP_DIVE_ASSESSMENT_REPORT_SUCCESS:
      return {
        ...state,
        deepDiveAssessmentReport: action.payload,
        deepDiveAssessmentReportError: "",
      };
    case GET_DEEP_DIVE_ASSESSMENT_REPORT_FAIL:
      return {
        ...state,
        deepDiveAssessmentReportError:
          "Something went wrong for deep dive assessment report.",
        deepDiveAssessmentReport: {},
      };

    case GET_ZOOM_MEETING_DETAILS_POLL_SUCCESS:
      return {
        ...state,
        polls: action.payload,
      };
    case GET_ZOOM_MEETING_DETAILS_POLL_FAIL:
      return {
        ...state,
        pollsError: "Something went worng Poll",
        polls: {},
      };

    case GET_ZOOM_MEETING_DETAILS_QA_SUCCESS:
      return {
        ...state,
        questionanswer: action.payload,
      };
    case GET_ZOOM_MEETING_DETAILS_QA_FAIL:
      return {
        ...state,
        questionanswerError: "Something went worng for QA",
        questionanswer: {},
      };
    /** START
     * Get Deep Dive Event's Zoom Meeting Details
     */
    case GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        participants: action.payload,
      };
    case GET_ZOOM_MEETING_DETAILS_PARTICIPANTS_FAIL:
      return {
        ...state,
        participantsError: "Something went wrong for Participants",
        participants: {},
      };
    /** END
     * Get Deep Dive Event's Zoom Meeting Details
     */

    case GET_COMPLETED_DEEP_DIVE_EVENT_LIST_SUCCESS:
      return {
        ...state,
        getCompletedDeepDiveEventSuccess: action.payload.posts,
        getCompletedDeepDiveEventFail: "",
      };
    case GET_COMPLETED_DEEP_DIVE_EVENT_LIST_FAIL:
      return {
        ...state,
        getCompletedDeepDiveEventFail:
          action.payload?.response?.data?.message || "Something went wrong",
        getCompletedDeepDiveEventSuccess: [],
      };
    case ADD_DEEP_DIVE_EVENT_SUCCESS:
      return {
        ...state,
        newDeepDiveEvent: "Deep Dive Event created successfully",
        errorNewDeepDiveEvent: "",
      };

    case ADD_DEEP_DIVE_EVENT_FAIL:
      return {
        ...state,
        errorNewDeepDiveEvent:
          "Something went wrong. Please check fields and try again.",
        newDeepDiveEvent: "",
      };

    case GET_OTHER_DETAILS_SUCCESS:
      return {
        ...state,
        otherDetails: action.payload.AutoInvitedUser,
        error: "",
      };

    case GET_OTHER_DETAILS_FAIL:
      return {
        ...state,
        error:
          action.payload?.response?.data?.message || "Something went wrong",
        otherDetails: [],
      };

    case GET_DEEP_DIVE_EVENT_LIST_SUCCESS:
      return {
        ...state,
        deepDiveEventList: action.payload?.posts || [],
        error: "",
      };

    case GET_DEEP_DIVE_EVENT_LIST_FAIL:
      return {
        ...state,
        error:
          action.payload?.response?.data?.message || "Something went wrong",
        deepDiveEventList: [],
      };

    case GET_START_UP_LIST_SUCCESS:
      return {
        ...state,
        startUpList: action.payload,
        error: "",
      };

    case GET_START_UP_LIST_FAIL:
      return {
        ...state,
        error:
          action.payload?.response?.data?.message || "Something went wrong",
        startUpList: [],
      };
    case GET_PITCH_DAY_LIST_SUCCESS:
      return {
        ...state,
        pitchDayList: action.payload,
        error: "",
      };

    case GET_PITCH_DAY_LIST_FAIL:
      return {
        ...state,
        error:
          action.payload?.response?.data?.message || "Something went wrong",
        pitchDayList: [],
      };
    case GET_DEEP_DIVE_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        deepDiveEventDetails: action.payload.post || {},
        errorDeepDiveEventDetails: "",
      };

    case GET_DEEP_DIVE_EVENT_DETAILS_FAIL:
      return {
        ...state,
        errorDeepDiveEventDetails:
          action.payload?.response?.data?.message || "Something went wrong",
        deepDiveEventDetails: [],
      };
    case UPDATE_DEEP_DIVE_EVENT_SUCCESS:
      return {
        ...state,
        updateDeepDiveEventSuccess: "Deep Dive Event updated successfully.",
        error: "",
      };

    case UPDATE_DEEP_DIVE_EVENT_FAIL:
      return {
        ...state,
        updateDeepDiveEventError:
          action.payload?.response?.data?.message || "Something went wrong",
        error: "",
      };
    case DELETE_DEEP_DIVE_EVENT_SUCCESS:
      return {
        ...state,
        deleteDeepDiveEventSuccess: "Deep Dive Event deleted successfully.",
        deleteDeepDiveEventError: "",
      };

    case DELETE_DEEP_DIVE_EVENT_FAIL:
      return {
        ...state,
        deleteDeepDiveEventError:
          action.payload?.response?.data?.message || "Something went wrong",
        deleteDeepDiveEventSuccess: "",
      };
    default:
      return state;
  }
};

export default deepDiveEvent;
