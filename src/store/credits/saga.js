import { call, put, takeEvery } from "redux-saga/effects"

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


import {
  // getInvestors,
  getInvestorsSuccess,
  getInvestorsFail,
  addCreditSuccess,
  addCreditFail,
  closeAlertBox,
} from "./actions"

import {
  fetchInvestorsWithCreditInfo,
  addCredits
} from "../../helpers/backend_helper"

function* fetchInvestorsList({payload: data}) {
  try {
    const response = yield call(fetchInvestorsWithCreditInfo, data)
    yield put(getInvestorsSuccess(response))
  } catch (error) {
    yield put(getInvestorsFail(error))
  }
}

function* addCreditsToInvestor({ payload: data }) {
  try {
    const response = yield call(addCredits, data)
    yield put(addCreditSuccess(response))
  } catch (error) {
    yield put(addCreditFail(error))
  }
}

function* CreditsSaga() {
  yield takeEvery(GET_INVESTORS, fetchInvestorsList)
  yield takeEvery(ADD_CREDIT, addCreditsToInvestor)
}

export default CreditsSaga
