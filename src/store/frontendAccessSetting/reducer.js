import {
  CREATE_NEW_SETTING,
  CREATE_NEW_SETTING_ERROR,
  CREATE_NEW_SETTING_SUCCESS,
  DELETE_SETTING,
  DELETE_SETTING_ERROR,
  DELETE_SETTING_SUCCESS,
  GET_ALL_SETTINGS,
  GET_ALL_SETTINGS_ERROR,
  GET_ALL_SETTINGS_SUCCESS,
  GET_ONE_SETTING,
  GET_ONE_SETTING_ERROR,
  GET_ONE_SETTING_SUCCESS,
  UPDATE_SETTING,
  UPDATE_SETTING_ERROR,
  UPDATE_SETTING_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  allAccessSettings: [],
  accessSetting: {},
  successMessage: null,
  errorMessage: null,
};

const accessSettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SETTINGS_SUCCESS:
      return {
        ...state,
        allAccessSettings: action?.payload?.data?.allSettings || [],
        successMessage: action?.payload?.message,
        errorMessage: null,
      };
    case GET_ALL_SETTINGS_ERROR:
      return {
        ...state,
        allAccessSettings: [],
        successMessage: null,
        errorMessage: action?.payload?.response?.data?.message,
      };

    case GET_ONE_SETTING_SUCCESS:
      return {
        ...state,
        accessSetting: action?.payload?.data?.setting || {},
        successMessage: action?.payload?.message,
        errorMessage: null,
      };
    case GET_ONE_SETTING_ERROR:
      return {
        ...state,
        accessSetting: {},
        successMessage: null,
        errorMessage: action?.payload?.response?.data?.message,
      };

    case CREATE_NEW_SETTING_SUCCESS:
      return {
        ...state,
        successMessage: action?.payload?.message,
        errorMessage: null,
      };
    case CREATE_NEW_SETTING_ERROR:
      return {
        ...state,
        successMessage: null,
        errorMessage: action?.payload?.response?.data?.message,
      };

    case UPDATE_SETTING_SUCCESS:
      return {
        ...state,
        successMessage: action?.payload?.message,
        errorMessage: null,
      };
    case UPDATE_SETTING_ERROR:
      return {
        ...state,
        successMessage: null,
        errorMessage: action?.payload?.response?.data?.message,
      };

    case DELETE_SETTING_SUCCESS:
      return {
        ...state,
        successMessage: action?.payload?.message,
        errorMessage: null,
      };
    case DELETE_SETTING_ERROR:
      return {
        ...state,
        successMessage: null,
        errorMessage: action?.payload?.response?.data?.message,
      };

    default:
      return state;
  }
};

export default accessSettingReducer;
