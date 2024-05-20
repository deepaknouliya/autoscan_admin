import {
  GET_FOUNDER_STARTUPS,
  GET_FOUNDER_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  SET_KPI,
  SET_KPI_SUCCESS,
  SET_KPI_FAIL,
  REMOVE_KPI,
  REMOVE_KPI_SUCCESS,
  REMOVE_KPI_FAIL,

  UPDATE_KPIS,
  UPDATE_KPIS_FAIL,
  UPDATE_KPIS_SUCCESS,

  CLOSE_ALERT_BOX,
  CANCEL_KPI,
} from "./actionTypes"

const INIT_STATE = {
  startups: [],
  error: '',
  show: true,
  addMore: false,
  startup: null,
  success: "",
}

const kpi = (state = INIT_STATE, action) => {

  switch (action.type) {


    case GET_FOUNDER_STARTUPS:
      return {
        ...state,
      }

    case GET_FOUNDER_STARTUPS_SUCCESS:
      return {
        ...state,
        startups: action.payload.startups,
      }

    case GET_STARTUPS_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      }

    case SET_KPI_FAIL:
      return {
        ...state,
        error: action.payload?.response?.data?.message || action.payload?.message || "",
        success: "",
        show: true,
      }

    case SET_KPI_SUCCESS:

      return {
        ...state,
        error: "",
        show: false,
        addMore: false,
        startup: action.payload?.startup || {},
        success: action.payload?.message,
      }

    case SET_KPI:
      return {
        ...state,
      }

    case REMOVE_KPI_FAIL:
      return {
        ...state,
        error: action.payload.message,
        success: "",
        show: true,
      }

    case REMOVE_KPI_SUCCESS:
      return {
        ...state,
        error: "",
        show: false,
        success: action.payload.message,
      }

    case REMOVE_KPI:
      return {
        ...state,
      }

    case UPDATE_KPIS_FAIL:
      return {
        ...state,
        error: action.payload.message,
        success: "",
      }

    case UPDATE_KPIS_SUCCESS:
      return {
        ...state,
        error: "",
        success: action.payload.message,
      }

    case UPDATE_KPIS:
      return {
        ...state,
      }

    case CLOSE_ALERT_BOX:
      return {
        ...state,
        error: "",
        success: "",
      }

    case CANCEL_KPI:
      return {
        ...state,
        error: "",
        show: false,
        success: "",
      }

    default:
      return state
  }
}

export default kpi
