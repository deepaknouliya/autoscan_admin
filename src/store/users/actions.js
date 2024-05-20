import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_SUCCESS,
  GET_USERS,
  GET_USERS_FROM_SAAS,
  GET_FOUNDERS,
  GET_INVESTORS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_FROM_SAAS_SUCCESS,
  GET_USERS_FROM_SAAS_FAIL,
  ADD_NEW_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER,
  DELETE_FUNDING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./actionTypes";

export const getUsers = (type, status) => ({
  type: GET_USERS,
  payload: { type, status },
});

export const getUsersFromSaas = (type, status) => {
  return {
    type: GET_USERS_FROM_SAAS,
    payload: { type, status },
  };
};

export const getFounders = () => ({
  type: GET_FOUNDERS,
});

export const getInvestors = () => ({
  type: GET_INVESTORS,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFail = error => ({
  type: GET_USERS_FAIL,
  payload: error,
});

export const getUsersFromSaasSuccess = ({ users }) => ({
  type: GET_USERS_FROM_SAAS_SUCCESS,
  payload: users,
});

export const getUsersFromSaasFail = error => ({
  type: GET_USERS_FROM_SAAS_FAIL,
  payload: error,
});

export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});

export const getUserProfileSuccess = userProfile => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: userProfile,
});

export const getUserProfileFail = error => ({
  type: GET_USER_PROFILE_FAIL,
  payload: error,
});

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user,
});

export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const addUserFail = error => ({
  type: ADD_USER_FAIL,
  payload: error,
});

export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFail = error => ({
  type: UPDATE_USER_FAIL,
  payload: error,
});

export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user,
});

export const deleteFunding = user => ({
  type: DELETE_FUNDING,
  payload: user,
});

export const deleteUserSuccess = user => ({
  type: DELETE_USER_SUCCESS,
  payload: user,
});

export const deleteUserFail = error => ({
  type: DELETE_USER_FAIL,
  payload: error,
});
