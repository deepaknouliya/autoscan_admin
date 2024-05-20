import {
  GET_RULES,
  SET_RULES,
  SET_RULES_SUCCESS,
  GET_RULES_SUCCESS,
  GET_RULES_FAIL,
  SET_RULES_FAIL,
  CLOSE_ALERT_BOX,
} from "./actionTypes"

const INIT_STATE = {
  rules: {},
  error: '',
  success: '',
  disabled: true,
}

const docs = (state = INIT_STATE, action) => {

  switch (action.type) {
    case GET_RULES:
      return {
        ...state,
        rules: action.payload,
      }

    case GET_RULES_SUCCESS:
      return {
        ...state,
        rules: action.payload.rules,
      }

    case GET_RULES_FAIL:
      return {
        ...state,
        error: action.payload,
        success: "",
      }

    case SET_RULES_SUCCESS:
      return {
        ...state,
        success: "New document rules saved !",
        error: "",
        rules: action.payload,
      }

    case SET_RULES_FAIL:
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
    default:
      return state
  }
}

export default docs
