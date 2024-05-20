import { call, put, takeEvery } from "redux-saga/effects"

import {
  GET_RULES,
  SET_RULES,
  SET_RULES_SUCCESS,
  GET_RULES_SUCCESS,
  GET_RULES_FAIL,
  SET_RULES_FAIL,
} from "./actionTypes"


import {
  setDocumentRulesFail,
  setDocumentRulesSuccess,
  getDocumentRulesFail,
  getDocumentRulesSuccess,
  setDocumentRules,
  getDocumentRules
} from "./actions"

//Include Both Helper File with needed methods
import {
  getDocRules,
  setDocRules,
} from "../../helpers/backend_helper"

function* fetchRules() {
  try {
    const response = yield call(getDocRules)
    yield put(getDocumentRulesSuccess(response))
  } catch (error) {
    yield put(getDocumentRulesFail(error))
  }
}

function* setNewRules({ payload: rules }) {
  try {
    yield call(setDocRules, rules)
    yield put(setDocumentRulesSuccess(rules))
    //yield call(getDocRules);
  } catch (error) {
    yield put(setDocumentRulesFail(error))
  }
}


function* rulesSaga() {
  yield takeEvery(GET_RULES, fetchRules)
  yield takeEvery(SET_RULES, setNewRules)
}

export default rulesSaga
