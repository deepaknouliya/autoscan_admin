import {
  GET_INVESTOR_SUCCESS,
  GET_INVESTOR_FAIL,
  TOGGLE_STATUS_SUCCESS,
  TOGGLE_STATUS_FAIL,
  GET_INVESTOR_DETAIL_SUCCESS,
  GET_INVESTOR_DETAIL_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  investors: [],
  investor: {}
}

const investors = (state = INIT_STATE, action) => {

  switch (action.type) {
    case GET_INVESTOR_SUCCESS:
      return {
        ...state,
        investors: action.payload,
      }

    case GET_INVESTOR_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case TOGGLE_STATUS_SUCCESS:
      return {
        ...state,
        investors: state.investors.map(investor =>
          investor._id === action.payload._id
            ? { investor, ...action.payload }
            : investor
        )
      }

    case TOGGLE_STATUS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_INVESTOR_DETAIL_SUCCESS:
      return {
        ...state,
        investor: action.payload.investor[0] || {},
      }

    case GET_INVESTOR_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default investors
