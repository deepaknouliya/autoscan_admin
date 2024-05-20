import {
  CREATE_EDUCATION_SERIES_EVENT_SUCCESS,
  CREATE_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT_DETAILS_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_DETAILS_FAIL,
  UPDATE_EDUCATION_SERIES_EVENT_SUCCESS,
  UPDATE_EDUCATION_SERIES_EVENT_FAIL,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_SUCCESS,
  GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  educationSeries: {},
  educationSeriesError: {},
  educationSeriesList: {},
  educationSeriesListError: {},
  educationSeriesDetails: {},
  educationSeriesDetailsError: {},
  educationSeriesUpdate: {},
  educationSeriesUpdateError: {},
  educationSeriesEventReportParticipants: {},
  educationSeriesEventReportParticipantsError: {},
}

const EducationSeries = (state = INIT_STATE, action) => {

  switch (action.type) {
    case CREATE_EDUCATION_SERIES_EVENT_SUCCESS:
      return {
        ...state,
        educationSeries: action.payload,
        educationSeriesError: {}
      }

    case CREATE_EDUCATION_SERIES_EVENT_FAIL:
      return {
        ...state,
        educationSeriesError: action.payload,
        educationSeries: {}
      }

    case GET_EDUCATION_SERIES_EVENT_SUCCESS:
      return {
        ...state,
        educationSeriesList: action.payload,
        educationSeriesListError: {}
      }

    case GET_EDUCATION_SERIES_EVENT_FAIL:
      return {
        ...state,
        educationSeriesListError: action.payload,
        educationSeriesList: {}
      }

    case GET_EDUCATION_SERIES_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        educationSeriesDetails: action.payload,
        educationSeriesDetailsError: {}
      }

    case GET_EDUCATION_SERIES_EVENT_DETAILS_FAIL:
      return {
        ...state,
        educationSeriesDetailsError: action.payload,
        educationSeriesDetails: {}
      }

    case UPDATE_EDUCATION_SERIES_EVENT_SUCCESS:
      return {
        ...state,
        educationSeriesUpdate: action.payload,
        educationSeriesUpdateError: {}
      }

    case UPDATE_EDUCATION_SERIES_EVENT_FAIL:
      return {
        ...state,
        educationSeriesUpdateError: action.payload,
        educationSeriesUpdate: {}
      }

    case GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        educationSeriesEventReportParticipants: action.payload,
        educationSeriesEventReportParticipantsError: {}
      }

    case GET_EDUCATION_SERIES_EVENT_REPORT_PARTICIPANTS_FAIL:
      return {
        ...state,
        educationSeriesEventReportParticipantsError: action.payload,
        educationSeriesEventReportParticipants: {}
      }

    default:
      return state
  }
}

export default EducationSeries
