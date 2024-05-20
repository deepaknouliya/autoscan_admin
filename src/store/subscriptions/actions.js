import { ADD_USER_FAIL } from "../../store/users/actionTypes";
import { ADD_NEW_SUBSCRIPTION, ADD_SUBSCRIPTION_SUCCESS, GET_SUBSCRIPTIONS, GET_SUBSCRIPTIONS_FAIL, GET_SUBSCRIPTIONS_SUCCESS } from "./actionType";

export const addNewSubscription = subscription => ({
    type: ADD_NEW_SUBSCRIPTION,
    payload: subscription,
})

export const addSubscriptionSuccess = subscription => ({
    type: ADD_SUBSCRIPTION_SUCCESS,
    payload: subscription,
})

export const addSubscriptionFail = error => ({
    type: ADD_USER_FAIL,
    payload: error,
})

export const getSubscriptions = () => ({
    type: GET_SUBSCRIPTIONS,
})

export const getSubscriptionsSuccess = subscription => ({
    type: GET_SUBSCRIPTIONS_SUCCESS,
    payload: subscription,
})

export const getSubscriptionsFail = error => ({
    type: GET_SUBSCRIPTIONS_FAIL,
    payload: error,
})