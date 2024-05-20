import {
  GET_APPLIED_FUNDING_FAIL,
  GET_APPLIED_FUNDING_SUCCESS,
  GET_DEAL_MANAGER_SUCCESS,
  GET_DEAL_MANAGER_FAIL,
  UPDATE_STATUS_FAIL,
  UPDATE_STATUS_SUCCESS,
  COPY_DEAL_STATUS_FAIL,
  COPY_DEAL_STATUS_SUCCESS,
  UPDATE_FUNDING_DETAILS_SUCCESS,
  UPDATE_FUNDING_DETAILS_FAIL,
  GET_APPLIED_FUNDING_DEAL_DETAILS_SUCCESS,
  GET_APPLIED_FUNDING_DEAL_DETAILS_FAIL,
  GET_ASSESSMENT_REPORT_SUCCESS,
  GET_ASSESSMENT_REPORT_FAIL,
  GET_FUNDING_DEAL_STATUS_LIST_SUCCESS,
  GET_FUNDING_DEAL_STATUS_LIST_FAIL,
  GET_FUNDING_DEAL_TYPE_LIST_FAIL,
  GET_FUNDING_DEAL_TYPE_LIST_SUCCESS,
  SEND_CONSENT_TO_INVESTOR_SUCCESS,
  SEND_CONSENT_TO_INVESTOR_FAIL,
} from "./actionType";

const INIT_STATE = {
  UpdateFundingDealStatusSuccess: undefined,
  UpdateFundingDealStatusError: undefined,
  CopyDealStatusSuccess: undefined,
  CopyDealStatusError: undefined,
  appliedFundings: [],
  appliedFundingDealDetails: {},
  appliedFundingDealDetailsErrors: "",
  dealManagers: [],
  manager: "",
  updateFundingDetails: "",
  updateFundingDetailsError: "",
  assessmentReportSuccess: {},
  assessmentREportFail: "",
  fundingDealStatusListSuccess: [],
  fundingDealStatusListFail: "",
  fundingDealTypeListSuccess: [],
  fundingDealTypeListFail: "",
  sendConsetSuccess: undefined,
  sendConsetFails: undefined,
};

const appliedFundings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ASSESSMENT_REPORT_SUCCESS:
      return {
        ...state,
        assessmentReportSuccess: action?.payload,
        assessmentREportFail: "",
      };

    case GET_ASSESSMENT_REPORT_FAIL:
      return {
        ...state,
        assessmentReportSuccess: "",
        assessmentREportFail:
          action?.payload?.payload?.response?.data?.message ||
          "Error something went wrong.",
      };
    case GET_APPLIED_FUNDING_DEAL_DETAILS_SUCCESS:
      return {
        ...state,
        appliedFundingDealDetails: action?.payload,
        appliedFundingDealDetailsErrors: "",
      };

    case GET_APPLIED_FUNDING_DEAL_DETAILS_FAIL:
      return {
        ...state,
        appliedFundingDealDetails: "",
        appliedFundingDealDetailsErrors:
          action?.payload?.payload?.response?.data?.message ||
          "Error something went wrong.",
      };
    case UPDATE_FUNDING_DETAILS_SUCCESS:
      return {
        ...state,
        updateFundingDetails:
          action?.payload?.payload?.response?.data?.message ||
          "Update Funding Deal Successfully.",
        updateFundingDetailsError: "",
      };

    case UPDATE_FUNDING_DETAILS_FAIL:
      return {
        ...state,
        updateFundingDetails: "",
        updateFundingDetailsError:
          action?.payload?.payload?.response?.data?.message ||
          "Error something went wrong.",
      };
    case GET_DEAL_MANAGER_SUCCESS:
      let manager = "";
      if (action.payload && action.payload.length > 0)
        manager = action.payload[0]._id;
      return {
        ...state,
        dealManagers: action.payload,
        manager: manager,
      };

    case GET_DEAL_MANAGER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_APPLIED_FUNDING_SUCCESS:
      return {
        ...state,
        appliedFundings: action.payload,
      };

    case GET_APPLIED_FUNDING_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        UpdateFundingDealStatusSuccess: true,
        UpdateFundingDealStatusError: false,
        // appliedFundings: {
        //     data: state.appliedFundings.data.map(appliedFunding => {

        //         return appliedFunding.applyforfundings._id === action.payload.applyforfundings._id
        //             ? { ...appliedFunding, applyforfundings: { ...appliedFunding.applyforfundings, ...action.payload.applyforfundings } }
        //             : appliedFunding
        //     }
        //     ),
        // }
      };

    case COPY_DEAL_STATUS_SUCCESS:
      return {
        ...state,
        CopyDealStatusSuccess: true,
        CopyDealStatusError: false,
      };

    case UPDATE_STATUS_FAIL:
      return {
        ...state,
        UpdateFundingDealStatusError: true,
        UpdateFundingDealStatusSuccess: false,
      };

    case COPY_DEAL_STATUS_FAIL:
      return {
        ...state,
        CopyDealStatusError: true,
        CopyDealStatusSuccess: false,
      };

    case GET_FUNDING_DEAL_STATUS_LIST_SUCCESS:
      return {
        ...state,
        fundingDealStatusListSuccess: action.payload.deal_status,
        fundingDealStatusListFail: [],
      };

    case GET_FUNDING_DEAL_STATUS_LIST_FAIL:
      return {
        ...state,
        fundingDealStatusListSuccess: [],
        fundingDealStatusListFail: action.payload,
      };

    case GET_FUNDING_DEAL_TYPE_LIST_SUCCESS:
      return {
        ...state,
        fundingDealTypeListSuccess: action.payload.deal_type,
        fundingDealTypeListFail: [],
      };

    case GET_FUNDING_DEAL_TYPE_LIST_FAIL:
      return {
        ...state,
        fundingDealTypeListSuccess: [],
        fundingDealTypeListFail: action.payload,
      };
    case SEND_CONSENT_TO_INVESTOR_SUCCESS:
      return {
        ...state,
        sendConsetSuccess: action.payload,
      };
    case SEND_CONSENT_TO_INVESTOR_FAIL:
      return {
        ...state,
        sendConsetFail: action.payload,
      };

    default:
      return state;
  }
};

export default appliedFundings;
