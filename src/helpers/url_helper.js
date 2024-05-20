//LOGIN
export const POST_LOGIN = "/post-login";
export const POST_JWT_LOGIN = "/";
export const POST_PASSWORD_FORGET = "/forget-pwd";
export const POST_JWT_PASSWORD_FORGET = "crm/auth/jwt-forget-pwd";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/post-profile";

// Past Logs
export const GET_INVESTMENT_REPORT_PAST_LOGS_DATA =
  "/api/reports/assessmentreport/investment/report/logs";
export const GET_INVESTOR_KYC_STATUS_LOGS_DATA =
  "/api/admin/investor/get-investor-kyc-logs";

//PITCH_DAY_POSTS
export const GET_FUNDING_DEAL_DETAILS = "/api/post/getminimumamount";
export const GET_PITCH_DAY_POSTS = "/api/post/pitchday/getall";
export const DELETE_PITCH_DAY = "/api/post/pitchday/delete";
export const ADD_PITCH_DAY = "/api/post/pitchday/create";
// export const GET_PITCH_FOUNDERS = "/api/user/getusers/founder";
// export const GET_PITCH_INVESTORS = "/api/user/getusers/investor";
export const GET_PITCH_FOUNDERS = "/api/user/getusers/v2/founder";
export const GET_PITCH_INVESTORS = "/api/user/getusers/v2/investor";
export const GET_PITCH_PANELLIST = "/api/user/getpanellist";
export const GET_PITCH_DAY_DETAIL = "/api/post/pitchday/getdetail";
export const GET_PITCH_BOOKED_TIME_SLOTE_DETAIL =
  "/api/post/pitchday/getBookedTimeSlots";
export const UPDATE_PITCH_DAY = "/api/post/pitchday/update";
export const SEND_INVITATION_TO_ALL = "/api/post/pitchday/sendemail";
export const GET_POST_EVENT_LIST = "/api/post/pitchday/getall?mode=past";
export const GET_POST_EVENT_DETAIL = "/api/post/pitchday/getdetail";
export const GET_EVENT_ZOOM_MEETING_DETAILS = "/api/post/pitchday/meeting";
export const ADD_QUESTION = "/api/post/question/create";
export const UPDATE_EVENT_QUESTION =
  "/api/post/question/update/founderQuestion";
export const GET_QUESTIONS = "/api/post/question/get";
export const GET_FUNDING_QUESTIONS = "/api/admin/funding/question/all";
export const UPDATE_FUNDING_QUESTION =
  "/api/admin/funding/question/update/adminAction";
export const ADD_FUNDING_QUESTION = "/api/admin/funding/question/add/new";
export const DELETE_FUNDING_QUESTION_ADMIN =
  "/api/admin/funding/question/delete/question";
export const UPDATE_EVENT_REPORT_MEDIA_URL =
  "/api/post/pitchday/event-report/update-media-url";
export const UPDATE_EVENT_REPORT_MEDIA_VISIBILITY =
  "/api/post/pitchday/event-report/update-media-visibility";
export const UPDATE_EVENT_REPORT_QA_VISIBILITY =
  "/api/post/pitchday/event-report/update-qa-visibility";
export const UPDATE_EVENT_REPORT_POLL_VISIBILITY =
  "/api/post/pitchday/event-report/update-poll-visibility";
export const ADD_EDIT_EVENT_REPORT_QA =
  "/api/post/pitchday/event-report/add-edit-qa";
export const GET_EVENT_REPORT_MANUAL_QA =
  "/api/post/pitchday/event-report/admin/get-manual-qa";
export const FETCH_ALL_INVESTORS_RELATED_TO_SAAS =
  "/api/post/pitchday/event-report/get-saas-investors";
export const GET_EVENT_REPORT_IMAGES =
  "/api/post/pitchday/event-report/get-event-images";
export const ADD_EVENT_REPORT_IMAGES =
  "/api/post/pitchday/event-report/add-event-images";
export const DELETE_EVENT_REPORT_IMAGE =
  "/api/post/pitchday/event-report/delete-event-image";

export const ASSOCIATE_POLL = "/api/post/pitchday";
export const GET_POLL = "/api/post/poll/get";
export const UPDATE_PITCHDAY_ROLE = "/api/post/pitchday";
export const GENERATE_REPORT = "/api/post/pitchday";
// export const GET_ASSESSMENT_REPORT = "/api/reports/assessmentreport"
export const GET_ASSESSMENT_REPORT = "/api/applyforfunding/assessment";
export const STORE_OTHER_DETAILS = "/api/reports/assessmentreport";
export const GET_FUNDING_DEAL_STATUS_LIST =
  "/api/admin/generalmaster/deal_status";
export const GET_FUNDING_DEAL_TYPE_LIST = "/api/admin/generalmaster/deal_type";
export const GET_TIME_ZONE_TYPE_LIST = "/api/admin/generalmaster/zonelist";

// Education Series Event
export const EDUCATION_SERIES = "/api/educationSeries/";

// Deep Dive Event
/*  Params:mode: [past,upcoming,all] */
export const GET_DEEP_DIVE_EVENT_LIST = "/api/post/deepdive/getall";
export const GET_START_UP_LIST = "/api/post/deepdive/allstartup";
export const GET_PITCH_DAY_LIST = "/api/post/deepdive/pitchdaylist";
export const GET_OTHER_DETAILS = "/api/post/deepdive/autoinvitation";
export const ADD_DEEP_DIVE_EVENT = "/api/post/deepdive/create";
export const GET_DEEP_DIVE_EVENT_DETAILS = "/api/post/deepdive/getdetail";
export const UPDATE_DEEP_DIVE_EVENT = "/api/post/deepdive/update";
export const DELETE_DEEP_DIVE_EVENT = "/api/post/deepdive/delete";
export const GET_ZOOM_MEETING_DETAILS = "/api/post/deepdive/meeting";
export const GET_DEEP_DIVE_ASSESSMENT_REPORT = "api/reports/assessmentreport";
export const UPDATE_DEEPDIVE_ROLE = "/api/post/deepdive";
export const UPDATE_POLL_RANGE_VALUE = "/api/post/deepdive/poll";
export const MERGE_ASSESSMENT_REPORT = "/api/reports/assessmentreport/deepdive";

//USERS
export const GET_USERS = "/api/user/getall";
export const GET_USERS_FROM_SAAS = "/api/user/getallfromsaas";
export const GET_USER_ADDITIONAL_INFO = "/api/user/get/additional/info";
export const GET_ALL_USERS_TOTAL_COUNT = "/api/user/get/all/total/count";
export const ADD_USER_EXPORT_CRON = "/api/user/add/export/cron";
export const GET_USERS2 = "/api/user/getall/v2";
export const INVESTMENT_USER_WISE_LIST =
  "/api/user/investment/userwise/list";
export const GET_USERS3 = "/api/user/getall/v3";
export const GET_KYC = "/api/user/getkyc";
export const GET_KYC_V2 = "/api/user/getkyc/v2";
export const GET_USERS_REFERENCE_TAGGING =
  "/api/user/list/for/reference/tagging";
export const GET_USER_PROFILE = "/api/user/getdetail";
export const ADD_NEW_USER = "/auth/register";
export const LOGIN_AS_USER = "/api/user/loginasuser";
export const UPDATE_USER = "/api/user/update";
export const DELETE_USER = "/api/user/delete";

//groups
export const GET_GROUPS = "/api/admin/group/getall";
export const ADD_NEW_GROUPS = "/api/admin/group/create";
export const UPDATE_GROUPS = "/api/admin/group";
export const DELETE_GROUPS = "/api/admin/group";
export const UPDATE_TERM_SHEET = "/api/admin/funding/update/termsheetstatus";

//founder
export const GET_FOUNDERS = "/api/user/founder/getall";

//subscription
export const ADD_NEW_SUBSCRIPTION = "/api/admin/subscriptionplan/create";
export const GET_SUBSCRIPTIONS = "/api/subscriptionplan/getall";

//applied funding
export const GET_APPLIED_FUNDING = "/api/applyforfunding/getall";
export const GET_APPLIED_FUNDING_DETAILS = "/api/applyforfunding/getdetail";
export const GET_DEAL_MANAGERS = "/api/applyforfunding/deal/managers";
export const SEND_ZOOM_INVESTOR_INTENT_UPDATE =
  "/api/applyforfunding/zoominvestorintentupdate";
export const UPDATE_STATUS = "/api/applyforfunding/updatestatusinfo";
export const COPY_DEAL_STATUS = "/api/applyforfunding/createCopyDeal";
export const DELETE_FUNDING = "/api/applyforfunding/delete";
export const UPDATE_FUNDING_DETAILS = "api/user/evaluationreports";
export const SEND_CONSENT_TO_INVESTORS =
  "/api/applyforfunding/sendconsenttoinvestors";

//dashboard charts data
export const GET_WEEKLY_DATA = "/weekly-data";
export const GET_YEARLY_DATA = "/yearly-data";
export const GET_MONTHLY_DATA = "/monthly-data";

// dashboard user post url

export const ADD_USER_POST = "/api/post/general/create";
export const UPDATE_USER_POST = "/api/post/general/update/";
export const DELETE_USER_POST = "/api/post/general/delete/";

//INESTORS
export const GET_INVESTORS = "/api/user/getusers/investor";
export const TOGGLE_STATUS = "/api/user/toggle/status";
export const GET_INVESTOR_DETAIL = "/api/user/investor/getdetailbyuserid";

// Document
export const GET_DOCUMENT_RULES = "/api/admin/document/rules";
export const SET_DOCUMENT_RULES = "/api/admin/document/rules";

//Startups
export const GET_STARTUPS = "mapStateToProps";
// KPIS
export const GET_STARTUPS_KPI = "/api/admin/founder/startups/all";
export const GET_STARTUP_DEAL = "/api/admin/founder/startupdeals/all";
export const SET_KPI = "/api/admin/set/kpi";
export const UPDATE_KPIS = "/api/admin/update/kpis";
export const REMOVE_KPI = "/api/admin/remove";
export const UPDATE_URL_ALIAS = "/api/admin/startup/update/url/alias";
export const GET_INVESTORS_WITH_CREDIT_INFO =
  "/api/admin/investors/with/credit-info";
export const ADD_CREDITS = "/api/admin/investors/add/credit";
export const GET_CURRENCIES =
  "https://openexchangerates.org/api/currencies.json";

// /api/user/getusers/investor
/**
 * Send Zoome Meeting Endpoint
 */
export const SEND_ZOOM_MEETING_INVITATION =
  "/api/post/pitchday/sendmail/zoomdetails";

// For investor groups
export const URL_SAVE_INVESTOR_GROUPS =
  "/api/applyforfunding/add/investor/groups";
export const USER_SYNDICATE_URL = "/api/admin/syndicate";
export const GET_ALL_SETTINGS_URL = "/api/admin/frontend-access/get-all";
export const GET_ONE_SETTING_URL = "/api/admin/frontend-access/get-one";
export const CREATE_NEW_SETTING_URL = "/api/admin/frontend-access/create";
export const UPDATE_SETTING_URL = "/api/admin/frontend-access/update";
export const DELETE_SETTING_URL = "/api/admin/frontend-access/delete";

export const DOWNLOAD_CSV = "/admin/candidate-details/downloadcsv";
export const DASHBOARD_DATA = "/admin/common/getdashboarddata";
export const AGENDA_DATA = "/admin/common/getagendadetails";
// export const DOWNLOAD_DEPART_CSV = "/admin/department/downloadCsv";
