import {
  GET_INVESTOR,
  GET_INVESTOR_SUCCESS,
  GET_INVESTOR_FAIL,
  TOGGLE_STATUS,
  TOGGLE_STATUS_SUCCESS,
  TOGGLE_STATUS_FAIL,
  GET_INVESTOR_DETAIL,
  GET_INVESTOR_DETAIL_SUCCESS,
  GET_INVESTOR_DETAIL_FAIL,
} from "./actionTypes"

// export const getInvestors = () => ({
//   type: GET_INVESTOR,
// })

// export const getInvestorsSuccess = investors => ({
//   type: GET_INVESTOR_SUCCESS,
//   payload: investors,
// })

// export const getInvestorsFail = error => ({
//   type: GET_INVESTOR_FAIL,
//   payload: error,
// })


export const toggleStatus = id => ({
  type: TOGGLE_STATUS,
  payload: id,
})

export const toggleStatusSuccess = investor => ({
  type: TOGGLE_STATUS_SUCCESS,
  payload: investor,
})

export const toggleStatusFail = error => ({
  type: TOGGLE_STATUS_FAIL,
  payload: error,
})

export const getInvestorDetail = id => ({
  type: GET_INVESTOR_DETAIL,
  payload: id,
})

export const getInvestorDetailSuccess = investor => ({
  type: GET_INVESTOR_DETAIL_SUCCESS,
  payload: investor,
})

export const getInvestorDetailFail = error => ({
  type: GET_INVESTOR_DETAIL_FAIL,
  payload: error,
})

