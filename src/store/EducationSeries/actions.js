import {
  CREATE_EDUCATION_SERIES_EVENT,
  CREATE_EDUCATION_SERIES_EVENT_SUCCESS,
  CREATE_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT,
  GET_EDUCATION_SERIES_EVENT_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT_DETAILS,
  GET_EDUCATION_SERIES_EVENT_DETAILS_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_DETAILS_FAIL,
  UPDATE_EDUCATION_SERIES_EVENT,
  UPDATE_EDUCATION_SERIES_EVENT_SUCCESS,
  UPDATE_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_FAIL,
} from "./actionTypes"

export const CreateEducationSeriesEvent = (payload) => {
  return ({
    type: CREATE_EDUCATION_SERIES_EVENT,
    payload
  })
}

export const CreateEducationSeriesEventSuccess = (payload) => ({
  type: CREATE_EDUCATION_SERIES_EVENT_SUCCESS,
  payload
})

export const CreateEducationSeriesEventFail = (payload) => ({
  type: CREATE_EDUCATION_SERIES_EVENT_FAIL,
  payload
})

export const GetEducationSeriesEvent = (payload) => {
  return ({
    type: GET_EDUCATION_SERIES_EVENT,
    payload
  })
}

export const GetEducationSeriesEventSuccess = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_SUCCESS,
  payload
})

export const GetEducationSeriesEventFail = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_FAIL,
  payload
})

export const GetEducationSeriesEventDetails = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_DETAILS,
  payload
})

export const GetEducationSeriesEventDetailsSuccess = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_DETAILS_SUCCESS,
  payload
})

export const GetEducationSeriesEventDetailsFail = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_DETAILS_FAIL,
  payload
})

export const UpdateEducationSeriesEvent = (payload) => ({
  type: UPDATE_EDUCATION_SERIES_EVENT,
  payload
})

export const UpdateEducationSeriesEventSuccess = (payload) => ({
  type: UPDATE_EDUCATION_SERIES_EVENT_SUCCESS,
  payload
})

export const UpdateEducationSeriesEventFail = (payload) => ({
  type: UPDATE_EDUCATION_SERIES_EVENT_FAIL,
  payload
})

export const GetEducationSeriesEventReportParticipants = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS,
  payload
})

export const GetEducationSeriesEventReportParticipantsSuccess = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_SUCCESS,
  payload
})

export const GetEducationSeriesEventReportParticipantsFail = (payload) => ({
  type: GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_FAIL,
  payload
})