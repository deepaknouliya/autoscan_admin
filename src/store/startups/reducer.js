import {
  GET_STARTUPS,
  GET_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  UPDATE_URL_ALIAS_FAIL,
  UPDATE_URL_ALIAS_SUCCESS,
  UPDATE_URL_ALIAS,
  CLOSE_ALERT_BOX,
} from "./actionTypes"

const INIT_STATE = {
  startups: [],
  error: '',
  show: true,
  success: "",
}

const startups = (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_STARTUPS:
      return {
        ...state,
      }

    case GET_STARTUPS_SUCCESS:
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

    case UPDATE_URL_ALIAS:
      return {
        ...state,
      }

    case UPDATE_URL_ALIAS_FAIL:
      return {
        ...state,
        error: action.payload?.response?.data?.message || action.payload?.message || "",
        success: "",
        show: true,
      }

    case UPDATE_URL_ALIAS_SUCCESS:

      return {
        ...state,
        error: "",
        show: false,
        success: action.payload?.message,
      }

    case CLOSE_ALERT_BOX:
      return {
        ...state,
        error: "",
        success: "",
      }

    default:
      return state
  }
}

export default startups
