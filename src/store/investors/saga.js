import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_INVESTOR,
  GET_INVESTOR_DETAIL,
  TOGGLE_STATUS
} from "./actionTypes"

import {
  getInvestorsSuccess,
  getInvestorsFail,
  toggleStatusSuccess,
  toggleStatusFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getInvestorDetail,
  getInvestors,
  toggleInvestorStatus
} from "../../helpers/backend_helper"
import { getInvestorDetailFail, getInvestorDetailSuccess } from "../../store/actions"


function* fetchInvestors() {
  try {
    // const response = yield call(getInvestors)
    // yield put(getInvestorsSuccess(response))
  } catch (error) {
    // yield put(getInvestorsFail(error))
  }
}


function* onToggleStatus({ payload: id }) {

  try {
    const response = yield call(toggleInvestorStatus, id)
    yield put(toggleStatusSuccess(response))

  } catch (error) {
    yield put(toggleStatusFail(error))
  }
}

function* onGetInvestorDetail({ payload: id }) {

  try {
    const response = yield call(getInvestorDetail, id)
    yield put(getInvestorDetailSuccess(response))

  } catch (error) {
    yield put(getInvestorDetailFail(error))
  }
}

function* investorsSaga() {
  yield takeEvery(GET_INVESTOR, fetchInvestors)
  yield takeEvery(TOGGLE_STATUS, onToggleStatus)
  yield takeEvery(GET_INVESTOR_DETAIL, onGetInvestorDetail)
}

export default investorsSaga
