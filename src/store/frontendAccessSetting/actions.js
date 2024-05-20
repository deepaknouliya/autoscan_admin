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

export const getAllAccessSettings = () => ({
  type: GET_ALL_SETTINGS,
});
export const getAllAccessSettingsSuccess = (payload = {}) => ({
  type: GET_ALL_SETTINGS_SUCCESS,
  payload: {
    ...payload,
  },
});
export const getAllAccessSettingsError = (error = {}) => ({
  type: GET_ALL_SETTINGS_ERROR,
  payload: {
    ...error,
  },
});

export const getOneAccessSetting = (payload = {}) => ({
  type: GET_ONE_SETTING,
  payload: {
    ...payload,
  },
});
export const getOneAccessSettingSuccess = accessSetting => ({
  type: GET_ONE_SETTING_SUCCESS,
  payload: {
    ...accessSetting,
  },
});
export const getOneAccessSettingError = errorMessage => ({
  type: GET_ONE_SETTING_ERROR,
  payload: {
    ...errorMessage,
  },
});

export const createSetting = reqBody => ({
  type: CREATE_NEW_SETTING,
  payload: {
    ...reqBody,
  },
});
export const createSettingSuccess = accessSetting => ({
  type: CREATE_NEW_SETTING_SUCCESS,
  payload: {
    ...accessSetting,
  },
});
export const createSettingError = errorMessage => ({
  type: CREATE_NEW_SETTING_ERROR,
  payload: {
    ...errorMessage,
  },
});

export const updateSetting = reqBody => ({
  type: UPDATE_SETTING,
  payload: {
    ...reqBody,
  },
});
export const updateSettingSuccess = accessSetting => ({
  type: UPDATE_SETTING_SUCCESS,
  payload: {
    ...accessSetting,
  },
});
export const updateSettingError = errorMessage => ({
  type: UPDATE_SETTING_ERROR,
  payload: {
    ...errorMessage,
  },
});

export const deleteSetting = reqBody => ({
  type: DELETE_SETTING,
  payload: {
    ...reqBody,
  },
});
export const deleteSettingSuccess = accessSetting => ({
  type: DELETE_SETTING_SUCCESS,
  payload: {
    ...accessSetting,
  },
});
export const deleteSettingError = errorMessage => ({
  type: DELETE_SETTING_ERROR,
  payload: {
    ...errorMessage,
  },
});
