import {
  GET_STARTUPS,
  GET_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  UPDATE_URL_ALIAS,
  UPDATE_URL_ALIAS_SUCCESS,
  UPDATE_URL_ALIAS_FAIL,
  CLOSE_ALERT_BOX,
} from "./actionTypes"

export const getStartups = () => ({
  type: GET_STARTUPS,
})

export const getStartupsSuccess = startups => ({
  type: GET_STARTUPS_SUCCESS,
  payload: startups,
})

export const getStartupsFail = error => ({
  type: GET_STARTUPS_FAIL,
  payload: error,
})

export const updateUrlAlias = (data) => ({
  type: UPDATE_URL_ALIAS,
  payload: data,
})

export const updateUrlAliasSuccess = message => ({
  type: UPDATE_URL_ALIAS_SUCCESS,
  payload: message,
})

export const updateUrlAliasFail = error => ({
  type: UPDATE_URL_ALIAS_FAIL,
  payload: error,
})

export const closeAlertBox = () => ({
  type: CLOSE_ALERT_BOX,
})

