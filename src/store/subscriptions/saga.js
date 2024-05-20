import { addNewSubscription, getSubscriptions } from "../../helpers/backend_helper"
import { call, put, takeEvery } from "redux-saga/effects"
import { addSubscriptionFail, addSubscriptionSuccess, getSubscriptionsFail, getSubscriptionsSuccess } from "../../store/actions"
import { ADD_NEW_SUBSCRIPTION, GET_SUBSCRIPTIONS } from "./actionType"

function* fetchSubscriptions() {
    try {
        const response = yield call(getSubscriptions)
        yield put(getSubscriptionsSuccess(response))
    } catch (error) {
        yield put(getSubscriptionsFail(error))
    }
}

function* onAddNewSubscription({ payload: subscription }) {

    try {
        yield call(addNewSubscription, subscription)
        yield put(addSubscriptionSuccess(subscription))
        yield call(fetchSubscriptions);

    } catch (error) {

        yield put(addSubscriptionFail(error))
    }
}

function* subscriptionSaga() {
    yield takeEvery(GET_SUBSCRIPTIONS, fetchSubscriptions)
    yield takeEvery(ADD_NEW_SUBSCRIPTION, onAddNewSubscription)
}

export default subscriptionSaga