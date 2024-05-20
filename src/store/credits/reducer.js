import {
  GET_INVESTORS,
  GET_INVESTORS_FAIL,
  GET_INVESTORS_SUCCESS,
  CLOSE_ALERT_BOX,
  ADD_CREDIT,
  ADD_CREDIT_SUCCESS,
  ADD_CREDIT_FAIL,
  CANCEL_ADD_CREDIT,
} from "./actionTypes"

const INIT_STATE = {
  investors: [],
  error: '',
  hasMore: false,
  success: "",
  page: 0,
  limit: 25,
  dataSize: 0,
}

const credits = (state = INIT_STATE, action) => {

  switch (action.type) {

    case GET_INVESTORS:
      return {
        ...state,
      }

    case GET_INVESTORS_SUCCESS:

      return {
        ...state,
        investors: action.payload.investors,
        dataSize: action.payload.dataSize,
      }

    case GET_INVESTORS_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      }

    case CLOSE_ALERT_BOX:
      return {
        ...state,
        error: "",
        success: "",
      }

    case ADD_CREDIT_FAIL:
      return {
        ...state,
        error: action.payload?.response?.data?.message || action.payload?.message || "",
        success: "",
        show: true,
      }

    case ADD_CREDIT_SUCCESS:
      return {
        ...state,
        error: "",
        show: false,
        investors: action.payload?.investors || [],
        success: action.payload?.message,
      }

    case ADD_CREDIT:
      return {
        ...state,
        error: "",
        success: "",
        show: true,
      }

    case CANCEL_ADD_CREDIT:
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

export default credits
