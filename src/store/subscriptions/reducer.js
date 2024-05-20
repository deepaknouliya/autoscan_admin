import { ADD_SUBSCRIPTION_FAIL, ADD_SUBSCRIPTION_SUCCESS, GET_SUBSCRIPTIONS_FAIL, GET_SUBSCRIPTIONS_SUCCESS } from "./actionType"

const INIT_STATE = {
    subscription: []
}

const subscription = (state = INIT_STATE, action) => {

    switch (action.type) {

        case GET_SUBSCRIPTIONS_SUCCESS:
            return {
                ...state,
                subscription: action.payload,
            }

        case GET_SUBSCRIPTIONS_FAIL:
            return {
                ...state,
                error: action.payload,
            }


        case ADD_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
            }

        case ADD_SUBSCRIPTION_FAIL:
            return {
                ...state,
                error: action.payload,
            }


        default:
            return state
    }
}

export default subscription
