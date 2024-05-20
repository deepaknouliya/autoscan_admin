import { takeEvery, put, call } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { loginSuccess, apiError } from "./actions"

//Include Both Helper File with needed methods
import {
  postJwtLogin,
} from "../../../helpers/backend_helper"


function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postJwtLogin, {
      email: user.email,
      password: user.password,
    })

    if (response.userInfo.role === 'wfc') {
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
      history.push("/dashboard")
    } else {
      const errorMessage = ['You do not have rights to access this area!'];
      yield put(apiError(errorMessage))
      history.push("/login")
    }



  } catch (error) {
    const errorMessage = ['Username and password are invalid. Please enter correct username and password'];
    yield put(apiError(errorMessage))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
