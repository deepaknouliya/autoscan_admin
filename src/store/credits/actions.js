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

export const getInvestors = data => ({
  type: GET_INVESTORS,
  payload: data,
})

export const getInvestorsSuccess = investors => ({
  type: GET_INVESTORS_SUCCESS,
  payload: investors,
})

export const getInvestorsFail = error => ({
  type: GET_INVESTORS_FAIL,
  payload: error,
})

export const closeAlertBox = () => ({
  type: CLOSE_ALERT_BOX,
})

export const addCredit = data => ({
  type: ADD_CREDIT,
  payload: data,
})

export const addCreditSuccess = res => ({
  type: ADD_CREDIT_SUCCESS,
  payload: res,
})

export const addCreditFail = error => ({
  type: ADD_CREDIT_FAIL,
  payload: error,
})

export const cancelAddCredit = () => ({
  type: CANCEL_ADD_CREDIT,
})

