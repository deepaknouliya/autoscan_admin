import {
  GET_RULES,
  SET_RULES,
  SET_RULES_SUCCESS,
  GET_RULES_SUCCESS,
  GET_RULES_FAIL,
  SET_RULES_FAIL,
  CLOSE_ALERT_BOX
} from "./actionTypes"

export const getDocumentRules = () => ({
  type: GET_RULES,
})

export const setDocumentRules = rules => ({
  type: SET_RULES,
  payload: rules,
})

export const getDocumentRulesSuccess = rules => ({
  type: GET_RULES_SUCCESS,
  payload: rules,
})

export const getDocumentRulesFail = error => ({
  type: GET_RULES_FAIL,
  payload: error,
})

export const setDocumentRulesSuccess = rules => ({
  type: SET_RULES_SUCCESS,
  payload: rules,
})

export const setDocumentRulesFail = error => ({
  type: SET_RULES_FAIL,
  payload: error,
})

export const closeAlertBox = () => ({
  type: CLOSE_ALERT_BOX,
})

