import {
  GET_FOUNDER_STARTUPS,
  GET_FOUNDER_STARTUPS_SUCCESS,
  GET_STARTUPS_FAIL,
  UPDATE_KPIS,
  UPDATE_KPIS_FAIL,
  UPDATE_KPIS_SUCCESS,
  SET_KPI,
  SET_KPI_SUCCESS,
  SET_KPI_FAIL,
  REMOVE_KPI,
  REMOVE_KPI_SUCCESS,
  REMOVE_KPI_FAIL,
  CLOSE_ALERT_BOX,
  CANCEL_KPI
} from "./actionTypes"

export const getStartups = () => ({
  type: GET_FOUNDER_STARTUPS,
})

export const getStartupsSuccess = startups => ({
  type: GET_FOUNDER_STARTUPS_SUCCESS,
  payload: startups,
})

export const getStartupsFail = error => ({
  type: GET_STARTUPS_FAIL,
  payload: error,
})

export const setKPI = kpi => ({
  type: SET_KPI,
  payload: kpi,
})

export const setKPISuccess = res => ({
  type: SET_KPI_SUCCESS,
  payload: res,
})

export const setKPIFail = error => ({
  type: SET_KPI_FAIL,
  payload: error,
})

export const removeKPI = (kpi) => ({
  type: REMOVE_KPI,
  payload: kpi,
})

export const removeKPISuccess = res => ({
  type: REMOVE_KPI_SUCCESS,
  payload: res,
})

export const removeKPIFail = error => ({
  type: REMOVE_KPI_FAIL,
  payload: error,
})

export const updateKPIs = kpi => ({
  type: UPDATE_KPIS,
  payload: kpi,
})

export const updateKPIsSuccess = res => ({
  type: UPDATE_KPIS_SUCCESS,
  payload: res,
})

export const updateKPIsFail = error => ({
  type: UPDATE_KPIS_FAIL,
  payload: error,
})

export const cancelKPI = () => ({
  type: CANCEL_KPI,
})

export const closeAlertBox = () => ({
  type: CLOSE_ALERT_BOX,
})

