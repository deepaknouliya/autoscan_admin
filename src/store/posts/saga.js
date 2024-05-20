import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_GENERAL_POSTS,
  ADD_GENERAL_POSTS,
  UPDATE_GENERAL_POSTS,
  DELETE_GENERAL_POSTS,
  GET_USER_POSTS,
  ADD_USER_POSTS,
  UPDATE_USER_POSTS,
  DELETE_USER_POSTS
} from "./actionTypes"

import {
  getGeneralPostsSuccess,
  getGeneralPostsFail,
  addGeneralPostSuccess,
  addGeneralPostFail,
  updateGeneralPostSuccess,
  updateGeneralPostFail,
  deleteGeneralPostSuccess,
  deleteGeneralPostFail,
  getUserPostsSuccess,
  getUserPostsFail,
  addUserPostSuccess,
  addUserPostFail,
  updateUserPostSuccess,
  updateUserPostFail,
  deleteUserPostSuccess,
  deleteUserPostFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getGeneralPosts,
  addNewGeneralPost,
  updateGeneralPost,
  deleteGeneralPost,
  getUserPosts,
  addNewUserPost,
  updateUserPost,
  deleteUserPost
} from "../../helpers/backend_helper"

function* fetchGeneralPosts() {
  try {
    const response = yield call(getGeneralPosts)
    yield put(getGeneralPostsSuccess(response))
  } catch (error) {
    yield put(getGeneralPostsFail(error))
  }
}

function* onAddNewGeneralPost({ payload: post }) {
  try {
    yield call(addNewGeneralPost, post)
    yield put(addGeneralPostSuccess(user))
    yield call(fetchGeneralPosts);
  } catch (error) {

    yield put(addGeneralPostFail(error))
  }
}

function* onUpdateGeneralPost({ payload: post }) {
  try {
    const response = yield call(updateGeneralPost, post)
    yield put(updateGeneralPostSuccess(response))
  } catch (error) {
    yield put(updateGeneralPostFail(error))
  }
}

function* onDeleteGeneralPost({ payload: post }) {
  try {
    const response = yield call(deleteGeneralPost, post)
    yield put(deleteGeneralPostSuccess(response))
  } catch (error) {
    yield put(deleteGeneralPostFail(error))
  }
}

// user posts saga

function* fetchUserPosts() {
  try {
    const response = yield call(getUserPosts)
    yield put(getUserPostsSuccess(response))
  } catch (error) {
    yield put(getUserPostsFail(error))
  }
}

function* onAddNewUserPost({ payload: post }) {
  try {
    yield call(addNewUserPost, post)
    yield put(addUserPostSuccess(user))
    yield call(fetchUserPosts);
  } catch (error) {

    yield put(addUserPostFail(error))
  }
}

function* onUpdateUserPost({ payload: post }) {
  try {
    const response = yield call(updateUserPost, post)
    yield put(updateUserPostSuccess(response))
  } catch (error) {
    yield put(updateUserPostFail(error))
  }
}

function* onDeleteUserPost({ payload: post }) {
  try {
    const response = yield call(deleteUserPost, post)
    yield put(deleteUserPostSuccess(response))
  } catch (error) {
    yield put(deleteUserPostFail(error))
  }
}

function* postsSaga() {
  yield takeEvery(GET_GENERAL_POSTS, fetchGeneralPosts)
  yield takeEvery(ADD_GENERAL_POSTS, onAddNewGeneralPost)
  yield takeEvery(UPDATE_GENERAL_POSTS, onUpdateGeneralPost)
  yield takeEvery(DELETE_GENERAL_POSTS, onDeleteGeneralPost)
  yield takeEvery(GET_USER_POSTS, fetchUserPosts)
  yield takeEvery(ADD_USER_POSTS, onAddNewUserPost)
  yield takeEvery(UPDATE_USER_POSTS, onUpdateUserPost)
  yield takeEvery(DELETE_USER_POSTS, onDeleteUserPost)
}

export default postsSaga
