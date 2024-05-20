import { takeEvery, put, call } from "redux-saga/effects"

// Login Redux States
import { FORGET_PASSWORD } from "./actionTypes"
import { userForgetPasswordSuccess, userForgetPasswordError } from "./actions"

//Include Both Helper File with needed methods
import {
  postJwtForgetPwd,
} from "../../../helpers/backend_helper"

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }) {
  try {
    const response = yield call(postJwtForgetPwd, { email: user.email })
    if (response) {
      yield put(
        userForgetPasswordSuccess(
          `An email has been sent to your registered email "${user.email}" with reset password instruction. Please follow the steps mentioned in the
          email to reset your password. Thank you.`
        )
      )
    }

  } catch (error) {
    const errorMessage = ['Invalid email!'];
    yield put(userForgetPasswordError(errorMessage))
  }
}

function* forgetPasswordSaga() {
  yield takeEvery(FORGET_PASSWORD, forgetUser)
}

export default forgetPasswordSaga
