import {
  del,
  get,
  post,
  patch,
  patchFormData,
  postFormData,
} from "./api_helper";
import * as url from "./url_helper";
import authHeader from "./users/jwt-token-access/auth-token-header";
//import pitchdays from "store/pitchdays/reducer";
import qs from "qs";

const show_all_saas_data = JSON.parse(
  localStorage.getItem("roleWiseAccess")
)?.show_all_saas_data;

export const getFundingDealDetailsAPI = ({ payload }) => {
  const token = authHeader();

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const finalUrl = `${url.GET_FUNDING_DEAL_DETAILS}/${payload.funding_deal_id}`;

  return get(finalUrl, configHeaders);
};

export const mergeAssessmentReportAPI = payload => {
  const token = authHeader();

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const finalUrl =
    url.MERGE_ASSESSMENT_REPORT +
    "/" +
    payload.payload.post_id +
    "/founder/" +
    payload.payload.founderId;

  var reqData = qs.stringify({
    poll_id: payload?.payload?.poll_id,
  });

  return postFormData(finalUrl, reqData, configHeaders);
};

export const updatePollRangeValueAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  var reqData = qs.stringify({
    answers: payload.payload.answers,
  });

  return patchFormData(
    url.UPDATE_POLL_RANGE_VALUE +
      "/" +
      payload.payload.answers.poll_id +
      "/update/range/" +
      payload.payload.post_id,
    reqData,
    configHeaders
  );
};

export const getDeepDiveAssessmentReportAPI = payload => {
  const token = authHeader();

  let configHeaders;

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const finalUrl =
    url.GET_DEEP_DIVE_ASSESSMENT_REPORT +
    "/" +
    payload.payload.deepDiveAssessmentReportId;

  return get(finalUrl, configHeaders);
};

export const getZoomMeetingDetailsMediaAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_ZOOM_MEETING_DETAILS +
      "/" +
      payload.payload.deep_dive_event_id +
      "/" +
      payload.payload.data_type,
    configHeaders
  );
};

export const getZoomMeetingDetailsParticipantsAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_ZOOM_MEETING_DETAILS +
      "/" +
      payload.payload.deep_dive_event_id +
      "/" +
      payload.payload.data_type,
    configHeaders
  );
};

export const getZoomMeetingDetailsQAAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_ZOOM_MEETING_DETAILS +
      "/" +
      payload.payload.deep_dive_event_id +
      "/" +
      payload.payload.data_type,
    configHeaders
  );
};
export const getZoomMeetingDetailsPollAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_ZOOM_MEETING_DETAILS +
      "/" +
      payload.payload.deep_dive_event_id +
      "/" +
      payload.payload.data_type,
    configHeaders
  );
};

export const getCompletedDeepDiveEventAPI = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_DEEP_DIVE_EVENT_LIST + "?mode=past", configHeaders);
};

export const sendZoomMeetingInvitationAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }
  const finalUrl = `${url.SEND_ZOOM_MEETING_INVITATION}/${payload.payload.pitchdayId}`;
  return get(finalUrl, configHeaders);
};

export const updateFundingDetailsAPI = payload => {
  const evaluationReportId = payload?.payload?.evaluationReportId;

  var reqData = qs.stringify({
    app_available: payload?.payload?.app_available[0],
    app_type: payload?.payload?.app_type[0],
    company_name: payload?.payload?.company_name,
    current_team_size: payload?.payload?.current_team_size,
    customers: payload?.payload?.customers,
    direct_competition: payload?.payload?.direct_competition,
    entry_barriers_substitutes: payload?.payload?.entry_barriers_substitutes,
    existing_global_players: payload?.payload?.existing_global_players,
    founded_in: payload?.payload?.founded_in,
    headquarters: payload?.payload?.headquarters,
    indirect_competition: payload?.payload?.indirect_competition,
    risks: payload?.payload?.risks,
    website: payload?.payload?.website,
    actual_valuation: payload?.payload?.actual_valuation,
    current_valuation: payload?.payload?.current_valuation,
    how_much_fund_raising: payload?.payload?.how_much_fund_raising,
    valuation_type: payload?.payload?.valuation_type,
    minimum_amount: payload?.payload?.minimum_amount,
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const finalUrl = `${url.UPDATE_FUNDING_DETAILS}/${evaluationReportId}`;

  return patchFormData(finalUrl, reqData, configHeaders);
};

export const storeOtherDetailsAPI = payload => {
  const assessmentReportId = payload.payload.assessmentReportId;
  const assessmentInvestorId = payload.payload.investorId;

  var reqData = qs.stringify({
    committed_amount: payload.payload.committedAmount,
    comments: payload.payload.comment,
    deal_manager: payload.payload.dealManager,
    areYouIntrested: payload.payload.intent,
    referenceName: payload.payload.reference,
  });
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const finalUrl = `${url.STORE_OTHER_DETAILS}/${assessmentReportId}/investor/${assessmentInvestorId}`;

  return postFormData(finalUrl, reqData, configHeaders);
};

export const deleteDeepDiveEventAPI = payload => {
  const deepDiveEventId = payload.payload._id;
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  const finalUrl = `${url.DELETE_DEEP_DIVE_EVENT}/${deepDiveEventId}`;
  return del(finalUrl, configHeaders);
};

export const getDeepDiveEventDetailsAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_DEEP_DIVE_EVENT_DETAILS}/${payload.payload.deepDiveid}`,
    configHeaders
  );
};

export const updateDeepDiveEventAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const formData = new FormData();
  Object.keys(payload.payload).forEach(key => {
    if (key === "images") {
      payload.payload[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, payload.payload[key]);
    }
  });

  return patchFormData(
    `${url.UPDATE_DEEP_DIVE_EVENT}/${payload.payload.deepDiveId}`,
    formData,
    configHeaders
  );
};

export const addDeepDiveEventAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const formData = new FormData();
  Object.keys(payload.payload).forEach(key => {
    if (key === "images") {
      payload.payload[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, payload.payload[key]);
    }
  });

  return postFormData(`${url.ADD_DEEP_DIVE_EVENT}`, formData, configHeaders);
};

export const getOtherDetailsAPI = payload => {
  const { pitchDays, userId } = payload.payload;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_OTHER_DETAILS}/${userId}?pitch_ids=${pitchDays}`,
    configHeaders
  );
};

export const getPitchDayListAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_PITCH_DAY_LIST}/${payload?.payload?.startupId}`,
    configHeaders
  );
};

const getAssessmentReportAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    `${url.GET_ASSESSMENT_REPORT}/${payload?.payload?.appliedFundingDealId}`,
    configHeaders
  );
  // return get(`${url.GET_ASSESSMENT_REPORT}/${payload?.payload?.assessmentReportId}`, configHeaders)
};

const createEducationSeriesEventAPI = payload => {
  const formData = new FormData();
  Object.keys(payload.payload).forEach(key => {
    if (key === "images") {
      payload.payload[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, payload.payload[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: token,
      },
    };
  }

  return postFormData(`${url.EDUCATION_SERIES}create`, formData, configHeaders);
  // return get(`${url.GET_ASSESSMENT_REPORT}/${payload?.payload?.assessmentReportId}`, configHeaders)
};

const getEducationSeriesEventAPI = ({ payload }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.EDUCATION_SERIES}getAll?mode=${payload?.mode}`,
    configHeaders
  );
};

const getEducationSeriesEventDetailsAPI = ({ payload }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.EDUCATION_SERIES}edit/${payload?.education_series_id}`,
    configHeaders
  );
};

const updateEducationSeriesEventAPI = ({ payload }) => {
  const { requestData } = payload;

  const formData = new FormData();
  Object.keys(requestData).forEach(key => {
    if (key === "images") {
      requestData[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, requestData[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: token,
      },
    };
  }

  return patchFormData(
    `${url.EDUCATION_SERIES}update/${payload?.education_series_id}`,
    formData,
    configHeaders
  );
};

const GetEducationSeriesEventReportParticipantsAPI = ({ payload }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.EDUCATION_SERIES}education-series-event/${payload?.education_series_id}/participants`,
    configHeaders
  );
};

const getFundingDealStatusListAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.GET_FUNDING_DEAL_STATUS_LIST}`, configHeaders);
};
const getonGetFundingDealTypeListAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.GET_FUNDING_DEAL_TYPE_LIST}`, configHeaders);
};

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data);

// Login Method
const postJwtLogin = data => {
  const postJwtLoginConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const form = new FormData();
  form.append("email", data.email);
  form.append("password", data.password);

  return postFormData(url.POST_JWT_LOGIN, form, postJwtLoginConfig);
};

// postForgetPwd
const postJwtForgetPwd = data => post(url.POST_JWT_PASSWORD_FORGET, data);

export const getUserProfile = () => get(url.GET_USER_PROFILE);

// get pitchfounders
export const getPitchFounders = ({ payload: { selectedSaasParent } }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_PITCH_FOUNDERS + `?selectedSaasParent=${selectedSaasParent}`,
    configHeaders
  );
};

export const getDealManagers = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_DEAL_MANAGERS, configHeaders);
};

// get pitchfounders
export const getPitchInvestors = ({ payload: { selectedSaasParent } }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_PITCH_INVESTORS + `?selectedSaasParent=${selectedSaasParent}`,
    configHeaders
  );
};

// get pitchpanellist
export const getPitchPanellist = ({ payload: { selectedSaasParent } }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    url.GET_PITCH_PANELLIST + `?selectedSaasParent=${selectedSaasParent}`,
    configHeaders
  );
};

// get pitchdays
export const getPitchDays = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;

  return get(
    `${url.GET_PITCH_DAY_POSTS}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

// get pitchdays details
export const getPitchDaysDetail = pitchday => {
  const pitchdayId = pitchday._id;
  const currentTime =
    pitchday?.currentTime ?? moment().utc().format("YYYY-MM-DD hh:mm:ss A");
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_PITCH_DAY_DETAIL}/${pitchdayId}?editmode=true&&currentTime=${currentTime}`,
    configHeaders
  );
};

// get pitchdays details
export const getPitchBookedSlotes = async pitchday => {
  const pitchdayId = pitchday?._id ?? "";
  const currentTime = pitchday?.currentTime;
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  let resdata = await get(
    `${url.GET_PITCH_BOOKED_TIME_SLOTE_DETAIL}?postId=${pitchdayId}&&currentTime=${currentTime}`,
    configHeaders
  );
  return resdata;
};

// update pitchday
export const updatePitchday = pitchday => {
  const { id } = pitchday;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(pitchday).forEach(key => {
    if (key === "images") {
      pitchday[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else if (key === "pitch_day_marketing_images") {
      pitchday[key].map((file, index) => {
        formData.append("pitch_day_marketing_images[]", file);
      });
    } else {
      formData.append(key, pitchday[key]);
    }
  });

  const finalUrl = `${url.UPDATE_PITCH_DAY}/${id}`;
  return patchFormData(finalUrl, formData, configHeaders);
};

// delete pitchday
export const deletePitchDay = pitchday => {
  const pitchdayId = pitchday._id;
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  const finalUrl = `${url.DELETE_PITCH_DAY}/${pitchdayId}`;
  return del(finalUrl, configHeaders);
};

// add Pitch Day
export const addPitchDay = pitchday => {
  const formData = new FormData();
  Object.keys(pitchday).forEach(key => {
    if (key === "images") {
      pitchday[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else if (key === "pitch_day_marketing_images") {
      pitchday[key].map((file, index) => {
        formData.append("pitch_day_marketing_images[]", file);
      });
    } else {
      formData.append(key, pitchday[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: token,
      },
    };
  }

  return postFormData(url.ADD_PITCH_DAY, formData, configHeaders);
};

//send invitation
export const sendInvitationToAll = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.SEND_INVITATION_TO_ALL}/${id}/all`, configHeaders);
};

//send invitation to investors

export const sendInvitationToInvestor = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.SEND_INVITATION_TO_ALL}/${id}/investor`, configHeaders);
};

//send invitation to founders
export const sendInvitationToFounder = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.SEND_INVITATION_TO_ALL}/${id}/founder`, configHeaders);
};

// get Users
export const getUsers = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  let str = "";
  if (typeof data.type === "undefined") {
    data.type = "";
  } else {
    str += "/" + data.type;
  }
  if (typeof data.status === "undefined") {
    data.status = "";
  } else {
    str += "/" + data.status;
  }

  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;
  const show_all_saas_data = JSON.parse(
    localStorage.getItem("roleWiseAccess")
  )?.show_all_saas_data;

  return get(
    `${url.GET_USERS}${str}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

export const getUsersFromSaas = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  // let str = "";
  // if (typeof data.type === "undefined") {
  //   data.type = "";
  // } else {
  //   str += "/" + data.type;
  // }
  // if (typeof data.status === "undefined") {
  //   data.status = "";
  // } else {
  //   str += "/" + data.status;
  // }

  const authUser = JSON.parse(localStorage.getItem("authUser"));
  // const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;
  const show_all_saas_data = JSON.parse(
    localStorage.getItem("roleWiseAccess")
  )?.show_all_saas_data;

  return get(
    `${url.GET_USERS_FROM_SAAS}?userType=${data.type.userType}&saas_parent_id=${data.type.saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

// get users for csv export
export const getUsersAllExport = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_USERS}/export`, configHeaders);
};

// add user export cron job
export const saveUserExportMail = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
  }
  return post(url.ADD_USER_EXPORT_CRON, data, configHeaders);
};

export const getAllUsersTotalCount = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_ALL_USERS_TOTAL_COUNT, configHeaders);
};

export const getUsersAll2 = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_USERS}${query}`, configHeaders);
};

export const getUsers2 = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_USERS2}${query}`, configHeaders);
};

export const investmentUserWiseList = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.INVESTMENT_USER_WISE_LIST}${query}`, configHeaders);
};

export const getInvestors2 = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_USERS3}${query}`, configHeaders);
};

export const getKyc = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_KYC}${query}`, configHeaders);
};

export const getKycV2 = (query = "?page=1") => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_KYC_V2}${query}`, configHeaders);
};

export const getUserAdditionalInfo = user_id => {
  const token = authHeader();
  let headers;
  if (token) {
    headers = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_USER_ADDITIONAL_INFO}?user_id=${user_id}`, headers);
};

export const getTimezones = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_TIME_ZONE_TYPE_LIST}`, configHeaders);
};

export const getAllUsersForReference = () => {
  const token = authHeader();
  let configHeaders;
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  // return get(url.GET_USERS_REFERENCE_TAGGING, configHeaders);
  return get(
    `${url.GET_USERS_REFERENCE_TAGGING}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

export const getAllUsersForReferenceEvenDisabled = () => {
  const token = authHeader();
  let configHeaders;
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  // return get(url.GET_USERS_REFERENCE_TAGGING, configHeaders);
  return get(
    `/api/admin/user/list/for/reference/tagging/even-disabled?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

//get founders
export const getFounders = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_FOUNDERS, configHeaders);
};

//login as user
export const loginAsUser = user => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(user).forEach(key => {
    formData.append(key, user[key]);
  });
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  user.adminuser_id = authUser?.userInfo?.user_id;
  return post(url.LOGIN_AS_USER, user, configHeaders);
};

// add user
export const addNewUser = user => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(user).forEach(key => {
    formData.append(key, user[key]);
  });

  return postFormData(url.ADD_NEW_USER, formData, configHeaders);
};

// update user
export const updateUser = user => {
  const { id } = user;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(user).forEach(key => {
    formData.append(key, user[key]);
  });
  const finalUrl = `${url.UPDATE_USER}/${id}`;

  return patchFormData(finalUrl, formData, configHeaders);
};

// delete user
export const deleteUser = user => {
  const userId = user._id;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  const finalUrl = `${url.DELETE_USER}/${userId}`;
  return del(finalUrl, configHeaders);
};

/*
Module:GROUPS
*
*/

// add groups
export const addNewGroup = group => {
  let configHeaders = {
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
    },
  };
  return post(url.ADD_NEW_GROUPS, group, configHeaders);
};

// update groups
export const updateGroup = group => {
  let configHeaders = {
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
    },
  };
  return patch(`${url.UPDATE_GROUPS}/${group._id}`, group, configHeaders);
};

export const updateTermSheetStatus = payload => {
  const formData = new FormData();
  formData.append("id", payload._id);
  formData.append("term_sheet_status", payload.term_sheet_status);
  formData.append("term_sheet_file", payload.term_sheet_file);
  formData.append("user_os", payload.userOS);
  formData.append("user_location", payload.userLocation);
  formData.append("user_device", payload.userDevice);
  formData.append("user_ip", payload.userIP);
  formData.append("user_browser", payload.userBrowser);
  formData.append("user_name", payload.userName);
  formData.append("user_email", payload.userEmail);
  formData.append("user_id", payload.userId);
  formData.append("funding_deal_id", payload.funding_deal_id);

  let configHeaders = {
    headers: {
      Authorization: authHeader(),
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  };
  return postFormData(
    `${url.UPDATE_TERM_SHEET}/${payload._id}`,
    formData,
    configHeaders
  );
};

// delete groups
export const deleteGroup = id => {
  let configHeaders = {
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
    },
  };
  return del(`${url.DELETE_GROUPS}/${id}`, configHeaders);
};

// get groups
export const getGroups = group => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;

  let configHeaders = {
    headers: { Authorization: authHeader() },
  };

  return get(
    `${url.GET_GROUPS}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

// add subscription
export const addNewSubscription = subscription => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(subscription).forEach(key => {
    formData.append(key, subscription[key]);
  });

  return postFormData(url.ADD_NEW_SUBSCRIPTION, formData, configHeaders);
};

//get subscripttions
export const getSubscriptions = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_SUBSCRIPTIONS, configHeaders);
};

//get applied fundings
export const getAppliedFunding = (param = "") => {
  const token = authHeader();
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  let prm = param?.payload;
  return get(
    `${url.GET_APPLIED_FUNDING}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}${prm}`,
    configHeaders
  );
};

export const getAppliedFundingDetails = ({ payload }) => {
  const token = authHeader();
  let configHeaders;

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_FUNDING_DEAL_DETAILS}/${payload.apply_funding_deal_id}`,
    configHeaders
  );
};

//delete applyforfunding
export const deletefunding = user => {
  const userId = user._id;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  const finalUrl = `${url.DELETE_FUNDING}/${userId}`;
  return del(finalUrl, configHeaders);
};

// get all investors
export const getInvestors = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_INVESTORS, configHeaders);
};

export const fetchInvestorsWithCreditInfo = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_INVESTORS_WITH_CREDIT_INFO}${data.query}`,
    configHeaders
  );
};

// toggle investor status
export const toggleInvestorStatus = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.TOGGLE_STATUS}/${id}`, configHeaders);
};

// get investors detail
export const getInvestorDetail = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_INVESTOR_DETAIL}/${id}`, configHeaders);
};

export const sendZoomInvestorIntentUpdate = fundingDealId => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }
  const formData = new FormData();
  formData.append("funding_deal_id", fundingDealId);
  const finalUrl = `${url.SEND_ZOOM_INVESTOR_INTENT_UPDATE}/${fundingDealId}`;
  return patchFormData(finalUrl, formData, configHeaders);
};

// update applied funding status
export const updateStatus = statusPayload => {
  const { id } = statusPayload;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(statusPayload).forEach(key => {
    formData.append(key, statusPayload[key]);
  });

  const finalUrl = `${url.UPDATE_STATUS}/${id}`;

  return patchFormData(finalUrl, formData, configHeaders);
};

//send consent to investors
export const sendConsentToInvestor = fundingDealId => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }
  const formData = new FormData();
  formData.append("funding_deal_id", fundingDealId);
  const finalUrl = `${url.SEND_CONSENT_TO_INVESTORS}/${fundingDealId}`;
  return patchFormData(finalUrl, formData, configHeaders);
};

// copy applied funding
export const copyDealStatus = statusPayload => {
  const { id } = statusPayload;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(statusPayload).forEach(key => {
    formData.append(key, statusPayload[key]);
  });

  const finalUrl = `${url.COPY_DEAL_STATUS}/${id}`;

  return patchFormData(finalUrl, formData, configHeaders);
};

// get postevent list
export const getPostEventList = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;
  const show_all_saas_data = JSON.parse(
    localStorage.getItem("roleWiseAccess")
  )?.show_all_saas_data;

  return get(
    `${url.GET_POST_EVENT_LIST}&saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}`,
    configHeaders
  );
};

// PHP - Participents
export const getPostEventDetail = ({ payload: { postId, showAll } }) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    `${url.GET_POST_EVENT_DETAIL}/${postId}?showAll=${showAll}`,
    configHeaders
  );
};

// get recording
export const getRecording = id => {
  const token = authHeader();

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(
    `${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/recordings`,
    configHeaders
  );
};

// get qa
export const getQA = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/qa`, configHeaders);
};

export const updateEventReportMediaURL = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.UPDATE_EVENT_REPORT_MEDIA_URL}`, reqBody, configHeaders);
};

export const updateEventReportMediaVisibility = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(
    `${url.UPDATE_EVENT_REPORT_MEDIA_VISIBILITY}`,
    reqBody,
    configHeaders
  );
};

export const updateEventReportQAVisibility = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(
    `${url.UPDATE_EVENT_REPORT_QA_VISIBILITY}`,
    reqBody,
    configHeaders
  );
};

export const updateEventReportPollVisibility = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(
    `${url.UPDATE_EVENT_REPORT_POLL_VISIBILITY}`,
    reqBody,
    configHeaders
  );
};

export const addEditEventManualQA = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.ADD_EDIT_EVENT_REPORT_QA}`, reqBody, configHeaders);
};

export const fetchAllEventManualQAs = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.GET_EVENT_REPORT_MANUAL_QA}`, reqBody, configHeaders);
};

export const fetchAllInvestorsRelatedToSaas = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(
    `${url.FETCH_ALL_INVESTORS_RELATED_TO_SAAS}`,
    reqBody,
    configHeaders
  );
};

export const fetchAllEventImages = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.GET_EVENT_REPORT_IMAGES}`, reqBody, configHeaders);
};

export const addEventImage = formData => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }
  return postFormData(
    `${url.ADD_EVENT_REPORT_IMAGES}`,
    formData,
    configHeaders
  );
};

export const deleteEventImage = reqBody => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.DELETE_EVENT_REPORT_IMAGE}`, reqBody, configHeaders);
};

// get poll
export const getPoll = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/poll`, configHeaders);
};

// get poll report
export const getPollReport = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    `${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/poll_report`,
    configHeaders
  );
};

// get participants
export const getEventParticipantsAPI = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    `${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/participants`,
    configHeaders
  );
};

// get Registrant
export const getRegistrants = id => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(
    `${url.GET_EVENT_ZOOM_MEETING_DETAILS}/${id}/registrants`,
    configHeaders
  );
};

// add questions
export const addQuestions = pitchday => {
  const formData = new FormData();
  Object.keys(pitchday).forEach(key => {
    if (key === "images") {
      pitchday[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, pitchday[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart / form - data; boundary = ${formData._boundary} `,
        Authorization: token,
      },
    };
  }

  return postFormData(url.ADD_QUESTION, formData, configHeaders);
};

// update event report q/a
export const updateEventQuestion = payload => {
  const formData = new FormData();
  Object.keys(payload).forEach(key => {
    if (key === "images") {
      payload[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, payload[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart / form - data; boundary = ${formData._boundary} `,
        Authorization: token,
      },
    };
  }

  return postFormData(url.UPDATE_EVENT_QUESTION, formData, configHeaders);
};

// get question of pitch
export const getQuestions = pitchday => {
  const pitchdayId = pitchday;
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_QUESTIONS}/${pitchdayId}`, configHeaders);
};

//add question in funding deal
export const addNewQuestion = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return post(`${url.ADD_FUNDING_QUESTION}`, data, configHeaders);
};

//get question of apply for funding
export const getFundingQuestions = fundingId => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_FUNDING_QUESTIONS}/${fundingId}`, configHeaders);
};

//update question
export const updateQuestion = (questionId, data) => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return post(
    `${url.UPDATE_FUNDING_QUESTION}/${questionId}`,
    data,
    configHeaders
  );
};

//delete question from admin
export const deleteFundingQuestionFromAdmin = questionId => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return post(
    `${url.DELETE_FUNDING_QUESTION_ADMIN}/${questionId}`,
    {},
    configHeaders
  );
};

// add polls
export const AssociatePoll = pitchday => {
  const { founder_id, post_id } = pitchday;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  }

  return patchFormData(
    `${url.ASSOCIATE_POLL}/${post_id}/founders/${founder_id}/poll`,
    pitchday,
    configHeaders
  );
  // return postFormData(`${url.ASSOCIATE_POLL}/${pitch_id}/founders/${investor_id}/poll/${poll_id}/${minimum_amount}`, formData, configHeaders)
};

// get poll of pitch
export const getAssociatePoll = pitchday => {
  const pitchdayId = pitchday;
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(`${url.GET_POLL}/${pitchdayId}`, configHeaders);
};

// update role
export const updateRole = pitchday => {
  // const { _id } = pitchday;
  const { email, pitch_day_id, user_type } = pitchday;

  const finalUrl = `${url.UPDATE_PITCHDAY_ROLE}/${pitch_day_id}/role/${user_type}?email=${email}`;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(pitchday).forEach(key => {
    if (key !== "_id") {
      formData.append(key, pitchday[key]);
    }
  });

  // const finalUrl = `${url.UPDATE_ROLE}`
  return patchFormData(finalUrl, formData, configHeaders);
};

export const updateDeepDiveRole = pitchday => {
  const { email, pitch_day_id, user_type } = pitchday;

  const finalUrl = `${url.UPDATE_DEEPDIVE_ROLE}/${pitch_day_id}/role/${user_type}?email=${email}`;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    };
  }

  const formData = new FormData();

  Object.keys(pitchday).forEach(key => {
    if (key !== "_id") {
      formData.append(key, pitchday[key]);
    }
  });

  // const finalUrl = `${url.UPDATE_ROLE}`
  return patchFormData(finalUrl, formData, configHeaders);
};

// generate Report
export const generatePollReport = pitchday => {
  const formData = new FormData();
  Object.keys(pitchday).forEach(key => {
    if (key === "images") {
      pitchday[key].map((file, index) => {
        formData.append("images[]", file);
      });
    } else {
      formData.append(key, pitchday[key]);
    }
  });

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        Authorization: token,
      },
    };
  }

  return postFormData(
    url.GENERATE_REPORT +
      "/" +
      pitchday?.pitch_id +
      "/assessmentreport/" +
      pitchday.founder_id,
    formData,
    configHeaders
  );
};

// get DeepDiveEventList
export const getDeepDiveEventListAPI = payload => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_DEEP_DIVE_EVENT_LIST, configHeaders);
};

// Get StartUpList
export const getStartUpListAPI = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_START_UP_LIST, configHeaders);
};

const getDocRules = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return get(url.GET_DOCUMENT_RULES, configHeaders);
};

const setDocRules = rules => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return patchFormData(url.SET_DOCUMENT_RULES, rules, configHeaders);
};

const getStartups = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  console.log("fetching startups: ", url.GET_STARTUPS);
  return get(url.GET_STARTUPS, configHeaders);
};

const getStartupDeals = () => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  let query = new URL(window.location.href);
  let funding_deal_id = query.searchParams.get("funding_round_id");
  console.log("fetching startup deals: ", url.GET_STARTUP_DEAL);
  return get(url.GET_STARTUP_DEAL, configHeaders);
};

const getStartupsWithKPIs = (sortQuery = "createdAt=-1") => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const saas_parent_id = authUser?.userInfo?.saas_parent_id;
  const is_super_admin = authUser?.userInfo?.is_super_admin;

  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  let sort = sortQuery.split("=");
  return get(
    `${url.GET_STARTUPS_KPI}?saas_parent_id=${saas_parent_id}&is_super_admin=${is_super_admin}&show_all_saas_data=${show_all_saas_data}
  `,
    configHeaders
  );
};

export const addCredits = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  console.log("posting: ", data);
  return postFormData(url.ADD_CREDITS, data, configHeaders);
};

const setKpi = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return postFormData(url.SET_KPI, data, configHeaders);
};

const removeStartupKpi = kpi => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return postFormData(
    `${url.REMOVE_KPI}/${kpi.kpi_type}/kpi`,
    { startup_id: kpi.startup_id, name: kpi.name },
    configHeaders
  );
};

const updateKPIs = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return patchFormData(url.UPDATE_KPIS, data, configHeaders);
};

const updateStartupUrlAlias = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: token,
      },
    };
  }
  return patchFormData(url.UPDATE_URL_ALIAS, data, configHeaders);
};

const getCurrencies = () => {
  return get(url.GET_CURRENCIES);
};

// get dashboard charts data
export const getWeeklyData = () => get(url.GET_WEEKLY_DATA);
export const getYearlyData = () => get(url.GET_YEARLY_DATA);
export const getMonthlyData = () => get(url.GET_MONTHLY_DATA);

// for investor groups
const saveApplyForFundingInvestorGroups = data => {
  const token = authHeader();
  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  return postFormData(url.URL_SAVE_INVESTOR_GROUPS, data, configHeaders);
};

/*
  aid = assessment report _id
  uid = user _id (investor)
*/
const getPastLogsData = (aid, uid, type, pan) => {
  const token = authHeader();

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  let userType = "",
    panNum = "";
  if (typeof type !== "undefined") {
    userType = type;

    if (typeof pan !== "undefined") {
      panNum = pan;
    }
  }
  const finalUrl = `${url.GET_INVESTMENT_REPORT_PAST_LOGS_DATA}/${aid}/${uid}?type=${userType}&pan=${panNum}`;

  return get(finalUrl, configHeaders);
};

const getInvestorKycUpdateLogs = data => {
  const token = authHeader();

  let configHeaders;
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  const finalUrl = `${url.GET_INVESTOR_KYC_STATUS_LOGS_DATA}`;

  return post(finalUrl, data, configHeaders);
};

const toCommaFormat = v => {
  let fmt_val = "";
  const formatter = new Intl.NumberFormat("en-US");
  try {
    fmt_val = formatter.format(v);
    if (fmt_val === "NaN") fmt_val = v;
  } catch (err) {
    console.log(err);
  }
  return fmt_val;
};

const toCommaFormatWithK = v => {
  if (v > 1000) {
    v = v / 1000;
  }
  let fmt_val = "";
  const formatter = new Intl.NumberFormat("en-US");
  try {
    fmt_val = formatter.format(v);
    if (fmt_val === "NaN") fmt_val = v;
  } catch (err) {
    console.log(err);
  }
  if (v > 1000) {
    fmt_val = fmt_val + "k";
  }
  return fmt_val;
};

const getAllSyndicatesForUser = userId => {
  const token = authHeader();
  let configHeaders = {};
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  let finalUrl = `${url.USER_SYNDICATE_URL}/get-all-syndicates?user_id=${userId}`;

  return get(finalUrl, configHeaders);
};

const updateSyndicateStatus = (reqBody, userId) => {
  const token = authHeader();
  let configHeaders = {};
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }
  let finalUrl = `${url.USER_SYNDICATE_URL}/update-syndicate-and-saas-logs/${userId}`;
  return post(finalUrl, reqBody, configHeaders);
};

const getSaasLogsForUser = userId => {
  const token = authHeader();
  let configHeaders = {};
  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  let finalUrl = `${url.USER_SYNDICATE_URL}/get-saas-logs/${userId}`;

  return get(finalUrl, configHeaders);
};

export const getAllAccessSettingsAPI = () => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(url.GET_ALL_SETTINGS_URL, {
    ...configHeaders,
  });
};

export const getOneAccessSettingAPI = settingId => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.GET_ONE_SETTING_URL}/${settingId}`, {
    ...configHeaders,
  });
};

export const createNewAccessSettingAPI = reqBody => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return post(url.CREATE_NEW_SETTING_URL, reqBody, {
    ...configHeaders,
  });
};

export const updateAccessSettingAPI = reqBody => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return post(url.UPDATE_SETTING_URL, reqBody, {
    ...configHeaders,
  });
};

export const deleteAccessSettingAPI = settingId => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.DELETE_SETTING_URL}/${settingId}`, {
    ...configHeaders,
  });
};

export const downloadCSVReport = (payload) => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return post(`${url.DOWNLOAD_CSV}`, payload, {
    ...configHeaders,
  });
};


// export const downloadDepartmentCSVReport = (payload) => {
//   const token = authHeader();
//   console.log('ss',payload);
//   let configHeaders = {};

//   if (token) {
//     configHeaders = {
//       headers: {
//         Authorization: token,
//       },
//     };
//   }

//   return post(`${url.DOWNLOAD_DEPART_CSV}`, payload, {
//     ...configHeaders,
//   });
// };


export const FetchDashboardData = (payload) => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.DASHBOARD_DATA}` + payload, {
    ...configHeaders,
  });
};

export const getTodayAgendaDetails = () => {
  const token = authHeader();

  let configHeaders = {};

  if (token) {
    configHeaders = {
      headers: {
        Authorization: token,
      },
    };
  }

  return get(`${url.AGENDA_DATA}`, {
    ...configHeaders,
  });
};

export {
  getAssessmentReportAPI,
  getLoggedInUser,
  isUserAuthenticated,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
  getDocRules,
  setDocRules,
  getStartupsWithKPIs,
  getStartups,
  getStartupDeals,
  setKpi,
  removeStartupKpi,
  getCurrencies,
  updateKPIs,
  getFundingDealStatusListAPI,
  getonGetFundingDealTypeListAPI,
  saveApplyForFundingInvestorGroups,
  createEducationSeriesEventAPI,
  getEducationSeriesEventAPI,
  getEducationSeriesEventDetailsAPI,
  updateEducationSeriesEventAPI,
  GetEducationSeriesEventReportParticipantsAPI,
  updateStartupUrlAlias,
  getPastLogsData,
  toCommaFormat,
  getAllSyndicatesForUser,
  updateSyndicateStatus,
  getSaasLogsForUser,
  toCommaFormatWithK,
  getInvestorKycUpdateLogs,
};
