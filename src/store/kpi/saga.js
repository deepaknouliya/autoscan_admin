import { call, put, takeEvery } from "redux-saga/effects"

import {
  GET_FOUNDER_STARTUPS,
  SET_KPI,
  REMOVE_KPI,
  GET_CURRENCY,
  UPDATE_KPIS,
} from "./actionTypes"


import {
  //setKPI,
  setKPIFail,
  setKPISuccess,

  updateKPIsSuccess,
  updateKPIsFail,

  //removeKPI,
  removeKPIFail,
  removeKPISuccess,

  getStartupsFail,
  getStartupsSuccess,
  fetchCurrenciesFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getStartupsWithKPIs,
  setKpi,
  removeStartupKpi,
  updateKPIs,
} from "../../helpers/backend_helper"

function* fetchStartups() {
  try {
    const response = yield call(getStartupsWithKPIs)
    yield put(getStartupsSuccess(response))
  } catch (error) {
    yield put(getStartupsFail(error))
  }
}

function* setNewKPI({ payload: kpi }) {
  try {
    const response = yield call(setKpi, kpi)
    yield put(setKPISuccess(response))
  } catch (error) {
    yield put(setKPIFail(error))
  }
}

function* removeKPI({ payload: kpi }) {
  try {
    const response = yield call(removeStartupKpi, kpi)
    yield put(removeKPISuccess(response))
  } catch (error) {
    yield put(removeKPIFail(error))
  }
}

function* updateAllKPIs({ payload: kpi }) {
  try {
    const response = yield call(updateKPIs, kpi)
    yield put(updateKPIsSuccess(response))
  } catch (error) {
    yield put(updateKPIsFail(error))
  }
}

function* KPIsSaga() {
  yield takeEvery(GET_FOUNDER_STARTUPS, fetchStartups)
  yield takeEvery(SET_KPI, setNewKPI)
  yield takeEvery(REMOVE_KPI, removeKPI)
  yield takeEvery(UPDATE_KPIS, updateAllKPIs)
}

export default KPIsSaga
