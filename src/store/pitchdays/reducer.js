import {
  GET_FUNDING_DEAL_DETAILS_SUCCESS,
  GET_FUNDING_DEAL_DETAILS_FAIL,
  GET_ASSESSMENT_REPORT_SUCCESS,
  GET_ASSESSMENT_REPORT_FAIL,
  UPDATE_ROLE_SUCCESS,
  GET_PITCH_DAY_POSTS_SUCCESS,
  GET_PITCH_DAY_POSTS_FAIL,
  DELETE_PITCH_DAY_SUCCESS,
  DELETE_PITCH_DAY_FAIL,
  ADD_PITCH_DAY_SUCCESS,
  ADD_PITCH_DAY_FAIL,
  GET_PITCH_FOUNDERS_SUCCESS,
  GET_PITCH_FOUNDERS_FAIL,
  GET_PITCH_INVESTORS_SUCCESS,
  GET_PITCH_INVESTORS_FAIL,
  GET_PITCH_PANELLIST_SUCCESS,
  GET_PITCH_PANELLIST_FAIL,
  GET_PITCH_DAY_DETAIL_SUCCESS,
  GET_PITCH_DAY_DETAIL_FAIL,
  UPDATE_PITCH_DAY_SUCCESS,
  UPDATE_PITCH_DAY_FAIL,
  SEND_INVITE_TO_ALL_SUCCESS,
  SEND_INVITE_TO_ALL_FAIL,
  SEND_INVITE_TO_INVESTOR,
  SEND_INVITE_TO_INVESTOR_SUCCESS,
  SEND_INVITE_TO_INVESTOR_FAIL,
  SEND_INVITE_TO_FOUNDER_SUCCESS,
  SEND_INVITE_TO_FOUNDER_FAIL,
  GET_POST_EVENT_LIST_SUCCESS,
  GET_POST_EVENT_LIST_FAIL,
  GET_POST_EVENT_DETAIL_SUCCESS,
  GET_POST_EVENT_DETAIL_FAIL,
  FETCH_RECORDING_FAIL,
  FETCH_QA_SUCCESS,
  FETCH_QA_FAIL,
  FETCH_POLL_SUCCESS,
  FETCH_POLL_FAIL,
  FETCH_RECORDING_SUCCESS,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAIL,
  UPDATE_EVENT_QUESTION_SUCCESS,
  UPDATE_EVENT_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  ASSOCIATE_POLL_SUCCESS,
  ASSOCIATE_POLL_FAIL,
  GET_ASSOCIATE_POLL_SUCCESS,
  GET_ASSOCIATE_POLL_FAIL,
  GET_EVENT_PARTICIPANTS_SUCCESS,
  GET_EVENT_PARTICIPANTS_FAIL,
  FETCH_REGISTRANTS_SUCCESS,
  FETCH_REGISTRANTS_FAIL,
  UPDATE_ROLE,
  UPDATE_ROLE_FAIL,
  FETCH_POLL_REPORT_SUCCESS,
  FETCH_POLL_REPORT_FAIL,
  GENERATE_POLL_REPORT_SUCCESS,
  GENERATE_POLL_REPORT_FAIL,
  STORE_OTHER_DETAILS_SUCCESS,
  STORE_OTHER_DETAILS_FAIL,
  SEND_ZOOM_MEETING_INVITATION_SUCCESS,
  SEND_ZOOM_MEETING_INVITATION_FAIL,
  UPDATE_DEEPDIVE_ROLE_SUCCESS,
  UPDATE_DEEPDIVE_ROLE_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  pitchdays: [],
  error: "",
  success: "",
  updateError: "",
  updateSuccess: "",
  updateRoleError: "",
  updateRoleSuccess: "",
  founders: [],
  investors: [],
  panellist: [],
  pitchday: {},
  postEvents: [],
  errorPostEvent: "",
  postEvent: {},
  recording: {},
  errorPostRecording: "",
  qa: {},
  errorQa: {},
  poll: {},
  errorPoll: "",
  createError: "",
  createSuccess: "",
  addQueSuccess: "",
  addQueError: "",
  updateQueSuccess: {},
  updateQueError: {},
  questions: {},
  questionsError: {},
  associatePollSuccess: {},
  associatePollError: {},
  getPollSuccess: "",
  getPollError: "",
  polls: [],
  participants: [],
  participantsError: {},
  registrant: {},
  participants: {},
  pollReport: {},
  errorPollReport: "",
  assessmentReport: {},
  errorAssessmentReport: "",
  storeOtherDetails: "",
  errorStoreOtherDetails: "",
  zoomMeetingInvitationSuccess: "",
  zoomMeetingInvitationError: "",
  updateDeepDiveSuccess: "",
  updateDeepDiveError: "",
  deletePitchDaySuccess: "",
  deletePitchDayError: "",
  fundingDealDetailsSuccess: {},
  fundingDealDetailsFail: {},
};

const pitchdays = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEND_ZOOM_MEETING_INVITATION_SUCCESS:
      return {
        ...state,
        zoomMeetingInvitationSuccess:
          action.payload?.response?.data?.message ||
          "Save other details successfully.",
        zoomMeetingInvitationError: "",
      };

    case SEND_ZOOM_MEETING_INVITATION_FAIL:
      return {
        ...state,
        zoomMeetingInvitationError:
          action.payload?.response?.data?.message || "Something went wrong",
        zoomMeetingInvitationSuccess: "",
      };
    case STORE_OTHER_DETAILS_SUCCESS:
      return {
        ...state,
        storeOtherDetails:
          action.payload?.response?.data?.message ||
          "Save other details successfully.",
        errorStoreOtherDetails: "",
      };

    case STORE_OTHER_DETAILS_FAIL:
      return {
        ...state,
        errorStoreOtherDetails:
          action.payload?.response?.data?.message || "Something went wrong",
        storeOtherDetails: "",
      };
    case GET_ASSESSMENT_REPORT_SUCCESS:
      return {
        ...state,
        assessmentReport: action.payload,
        errorAssessmentReport: "",
      };

    case GET_ASSESSMENT_REPORT_FAIL:
      return {
        ...state,
        errorAssessmentReport:
          action.payload?.response?.data?.message || "Something went wrong",
        assessmentReport: {},
      };

    case GET_PITCH_DAY_POSTS_SUCCESS:
      return {
        ...state,
        pitchdays: action.payload,
        error: "",
      };

    case GET_PITCH_DAY_POSTS_FAIL:
      return {
        ...state,
        error: "Not able to fetch pitch days!",
        pitchdays: "",
      };

    case GET_PITCH_FOUNDERS_SUCCESS:
      return {
        ...state,
        founders: action.payload,
      };

    case GET_PITCH_FOUNDERS_FAIL:
      return {
        ...state,
        error: "Not able to fetch pitch founders!",
        success: "",
      };

    case GET_PITCH_INVESTORS_SUCCESS:
      return {
        ...state,
        investors: action.payload,
      };
    case GET_PITCH_PANELLIST_SUCCESS:
      return {
        ...state,
        panellist: action.payload,
      }; 
    
    case GET_PITCH_PANELLIST_FAIL:
      return {
        ...state,
        error: "Not able to fetch pitch panelist!",
        success: "",
      }; 
      
    case GET_PITCH_INVESTORS_FAIL:
      return {
        ...state,
        error: "Not able to fetch pitch investors!",
        success: "",
      };

    case DELETE_PITCH_DAY_SUCCESS:
      return {
        ...state,
        deletePitchDaySuccess: true,
        deletePitchDayError: false,
      };

    case DELETE_PITCH_DAY_FAIL: {
      return {
        ...state,
        deletePitchDayError: true,
        deletePitchDaySuccess: false,
      };
    }

    case GET_PITCH_DAY_DETAIL_SUCCESS:
      return {
        ...state,
        pitchday: action.payload.post,
      };

    case GET_PITCH_DAY_DETAIL_FAIL: {
      return {
        ...state,
        error: "Not able to fetch pitch day!",
        success: "",
      };
    }

    case ADD_PITCH_DAY_SUCCESS:
      return {
        ...state,
        createSuccess: "Event created successfully",
        createError: "",
      };

    case ADD_PITCH_DAY_FAIL:
      return {
        ...state,
        createError:
        action.payload?.response?.data?.message||"Something went wrong to create event, Please verify fields and Try again",
        createSuccess: "",
      };

    case UPDATE_PITCH_DAY_SUCCESS:
      return {
        ...state,
        updateSuccess: "Event updated successfully!",
        updateError: "",
      };

    case UPDATE_PITCH_DAY_FAIL:
      return {
        ...state,
        updateError:
          action.payload?.response?.data?.message || "Something went wrong",
        updateSuccess: "",
      };

    case UPDATE_DEEPDIVE_ROLE_SUCCESS:
      return {
        ...state,
        updateDeepDiveSuccess: "role updated successfully!",
        updateDeepDiveError: "",
      };

    case UPDATE_DEEPDIVE_ROLE_FAIL:
      return {
        ...state,
        updateDeepDiveError:
          action.payload?.response?.data?.message || "Something went wrong",
        updateDeepDiveSuccess: "",
      };

    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        updateRoleSuccess: "role updated successfully!",
        updateRoleError: "",
      };

    case UPDATE_ROLE_FAIL:
      return {
        ...state,
        updateRoleError:
          action.payload?.response?.data?.message || "Something went wrong",
        updateRoleSuccess: "",
      };

    case SEND_INVITE_TO_ALL_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: "",
      };

    case SEND_INVITE_TO_ALL_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

    case SEND_INVITE_TO_INVESTOR_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: "",
      };

    case SEND_INVITE_TO_INVESTOR_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

    case SEND_INVITE_TO_FOUNDER_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: "",
      };

    case SEND_INVITE_TO_FOUNDER_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

    case GET_POST_EVENT_LIST_SUCCESS:
      return {
        ...state,
        postEvents: action.payload,
      };

    case GET_POST_EVENT_LIST_FAIL:
      return {
        ...state,
        errorPostEvent: "Not able to fetch pitch days!",
        success: "",
      };

    case GET_POST_EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        postEvent: action.payload,
        participants: action.payload?.participants,
      };

    case GET_POST_EVENT_DETAIL_FAIL:
      return {
        ...state,
        errorPostEvent: "Not able to fetch post event details!",
        success: "",
      };

    case FETCH_RECORDING_SUCCESS:
      return {
        ...state,
        recording: action.payload,
      };

    case FETCH_RECORDING_FAIL:
      return {
        ...state,
        errorRecording: "Not able to fetch!",
        success: "",
      };

    case FETCH_QA_SUCCESS:
      return {
        ...state,
        qa: action.payload,
        errorQa: {}
      };

    case FETCH_QA_FAIL:
      return {
        ...state,
        errorQa: action.payload,
        qa: {},
      };
    case FETCH_POLL_SUCCESS:
      return {
        ...state,
        poll: action.payload,
      };

    case FETCH_POLL_FAIL:
      return {
        ...state,
        errorPoll: "Not able to fetch!",
        success: "",
      };

    case FETCH_POLL_REPORT_SUCCESS:
      return {
        ...state,
        pollReport: action.payload,
      };

    case FETCH_POLL_REPORT_FAIL:
      return {
        ...state,
        errorPollReport: "Not able to fetch!",
        success: "",
      };

    case GET_EVENT_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        participants: action?.payload,
        participantsError: {},
      };

    case GET_EVENT_PARTICIPANTS_FAIL:
      return {
        ...state,
        participantsError: action?.payload,
        success: {},
      };

    case FETCH_REGISTRANTS_SUCCESS:
      return {
        ...state,
        registrant: action.payload,
      };

    case FETCH_REGISTRANTS_FAIL:
      return {
        ...state,
        errorRegistrant: "Not able to fetch!",
        success: "",
      };

    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        addQueSuccess: "Question added successfully!",
        addQueError: "",
      };

    case ADD_QUESTION_FAIL:
      return {
        ...state,
        addQueError:
          action.payload?.response?.data?.message || "Something went wrong",
        addQueSuccess: "",
      };

    case UPDATE_EVENT_QUESTION_SUCCESS:
      return {
        ...state,
        updateQueSuccess: action.payload,
        updateQueError: {},
      };

    case UPDATE_EVENT_QUESTION_FAIL:
      return {
        ...state,
        updateQueError: action.payload,
        updateQueSuccess: {},
      };

    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.payload,
      };

    case GET_QUESTION_FAIL:
      return {
        ...state,
        questionsError: action.payload,
        questions: {},
      };

    case ASSOCIATE_POLL_SUCCESS:
      return {
        ...state,
        associatePollSuccess: action.payload,
        associatePollError: {},
      };

    case ASSOCIATE_POLL_FAIL:
      return {
        ...state,
        associatePollError: action.payload,
        associatePollSuccess: {},
      };

    case GET_ASSOCIATE_POLL_SUCCESS:
      return {
        ...state,
        polls: action.payload,
      };

    case GET_ASSOCIATE_POLL_FAIL:
      return {
        ...state,
        getPollError: "Not able to fetch questions!",
        getPollSuccess: "",
      };

    case GENERATE_POLL_REPORT_SUCCESS:
      return {
        ...state,
        pollReportSuccess: "Report generate succesfully!",
        pollReportError: "",
      };

    case GENERATE_POLL_REPORT_FAIL:
      return {
        ...state,
        pollReportError:
          action.payload?.response?.data?.message || "Something went wrong",
        pollReportSuccess: "",
      };

    case GET_FUNDING_DEAL_DETAILS_SUCCESS:
      return {
        ...state,
        fundingDealDetailsSuccess: action.payload,
        fundingDealDetailsFail: {},
      };

    case GET_FUNDING_DEAL_DETAILS_FAIL:
      return {
        ...state,
        fundingDealDetailsFail: action.payload,
        fundingDealDetailsSuccess: {},
      };

    default:
      return state;
  }
};

export default pitchdays;
