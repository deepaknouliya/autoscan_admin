import { 
  GET_GENERAL_POSTS,
  ADD_GENERAL_POSTS,
  UPDATE_GENERAL_POSTS,
  DELETE_GENERAL_POSTS,
  GET_USER_POSTS,
  ADD_USER_POSTS,
  UPDATE_USER_POSTS,
  DELETE_USER_POSTS,
  GET_GENERAL_POSTS_SUCCESS,
  GET_GENERAL_POSTS_FAIL,
  ADD_GENERAL_POSTS_SUCCESS,
  ADD_GENERAL_POSTS_FAIL,
  UPDATE_GENERAL_POSTS_SUCCESS,
  UPDATE_GENERAL_POSTS_FAIL,
  DELETE_GENERAL_POSTS_SUCCESS,
  DELETE_GENERAL_POSTS_FAIL,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  ADD_USER_POSTS_SUCCESS,
  ADD_USER_POSTS_FAIL,
  UPDATE_USER_POSTS_SUCCESS,
  UPDATE_USER_POSTS_FAIL,
  DELETE_USER_POSTS_SUCCESS,
  DELETE_USER_POSTS_FAIL
} from "./actionTypes"

// general posts actions


export const getGeneralPosts = () => ({
  type: GET_GENERAL_POSTS,
})
export const getGeneralPostsSuccess = () => ({
  type: GET_GENERAL_POSTS_SUCCESS,
})

export const getGeneralPostsFail = error => ({
  type: GET_GENERAL_POSTS_FAIL,
  payload: error,
})

export const addGeneralPost = post => ({
  type: ADD_GENERAL_POSTS,
  payload: post,
})

export const addGeneralPostSuccess = post => ({
  type: ADD_GENERAL_POSTS_SUCCESS,
  payload: post,
})

export const addGeneralPostFail = error => ({
  type: ADD_GENERAL_POSTS_FAIL,
  payload: error,
})

export const updateGeneralPost = post => ({
  type: UPDATE_GENERAL_POSTS,
  payload: post,
})

export const updateGeneralPostSuccess = post => ({
  type: UPDATE_GENERAL_POSTS_SUCCESS,
  payload: post,
})

export const updateGeneralPostFail = error => ({
  type: UPDATE_GENERAL_POSTS_FAIL,
  payload: error,
})


export const deleteGeneralPost = post => ({
  type: DELETE_GENERAL_POSTS,
  payload: post,
})

export const deleteGeneralPostSuccess = post => ({
  type: DELETE_GENERAL_POSTS_SUCCESS,
  payload: post,
})

export const deleteGeneralPostFail = error => ({
  type: DELETE_GENERAL_POSTS_FAIL,
  payload: error,
})

// users posts actions

export const getUserPosts = () => ({
  type: GET_USER_POSTS
})

export const getUserPostsSuccess = () => ({
  type: GET_USER_POSTS_SUCCESS
})

export const getUserPostsFail = error => ({
  type: GET_USER_POSTS_FAIL,
  payload: error,
})


export const addUserPost = post => ({
  type: ADD_USER_POSTS,
  payload: post,
})

export const addUserPostSuccess = post => ({
  type: ADD_USER_POSTS_SUCCESS,
  payload: post,
})

export const addUserPostFail = error => ({
  type: ADD_USER_POSTS_FAIL,
  payload: error,
})


export const updateUserPost = post => ({
  type: UPDATE_USER_POSTS,
  payload: post,
})

export const updateUserPostSuccess = post => ({
  type: UPDATE_USER_POSTS_SUCCESS,
  payload: post,
})

export const updateUserPostFail = error => ({
  type: UPDATE_USER_POSTS_FAIL,
  payload: error,
})

export const deleteUserPost = post => ({
  type: DELETE_USER_POSTS,
  payload: post,
})

export const deleteUserPostSuccess = post => ({
  type: DELETE_USER_POSTS_SUCCESS,
  payload: post,
})

export const deleteUserPostFail = error => ({
  type: DELETE_USER_POSTS_FAIL,
  payload: error,
})
