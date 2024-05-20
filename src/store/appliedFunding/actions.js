import {
    GET_APPLIED_FUNDING,
    GET_APPLIED_FUNDING_FAIL,
    GET_APPLIED_FUNDING_SUCCESS,
    GET_DEAL_MANAGER,
    GET_DEAL_MANAGER_SUCCESS,
    GET_DEAL_MANAGER_FAIL,
    UPDATE_STATUS,
    COPY_DEAL_STATUS,
    COPY_DEAL_STATUS_SUCCESS,
    COPY_DEAL_STATUS_FAIL,
    UPDATE_STATUS_FAIL,
    UPDATE_STATUS_SUCCESS,
    UPDATE_FUNDING_DETAILS,
    UPDATE_FUNDING_DETAILS_SUCCESS,
    UPDATE_FUNDING_DETAILS_FAIL,
    GET_APPLIED_FUNDING_DEAL_DETAILS,
    GET_APPLIED_FUNDING_DEAL_DETAILS_FAIL,
    GET_APPLIED_FUNDING_DEAL_DETAILS_SUCCESS,
    GET_ASSESSMENT_REPORT,
    GET_ASSESSMENT_REPORT_FAIL,
    GET_ASSESSMENT_REPORT_SUCCESS,
    GET_FUNDING_DEAL_STATUS_LIST,
    UPDATE_ZOOM_INVESTOR_INTENT_STATUS,
    GET_FUNDING_DEAL_STATUS_LIST_SUCCESS,
    GET_FUNDING_DEAL_STATUS_LIST_FAIL,
    GET_FUNDING_DEAL_TYPE_LIST_FAIL,
    GET_FUNDING_DEAL_TYPE_LIST_SUCCESS,
    GET_FUNDING_DEAL_TYPE_LIST,
    SEND_CONSENT_TO_INVESTOR,
    SEND_CONSENT_TO_INVESTOR_SUCCESS,
    SEND_CONSENT_TO_INVESTOR_FAIL,
} from "./actionType";


export const getAssessmentReport = (payload) => ({
    type: GET_ASSESSMENT_REPORT,
    payload: payload,
})

export const getAssessmentReportSuccess = appliedFundings => ({
    type: GET_ASSESSMENT_REPORT_SUCCESS,
    payload: appliedFundings,
})

export const getAssessmentReportFail = error => ({
    type: GET_ASSESSMENT_REPORT_FAIL,
    payload: error,
})

export const getAppliedFundingsDealDetails = (payload) => ({
    type: GET_APPLIED_FUNDING_DEAL_DETAILS,
    payload: payload,
})

export const getAppliedFundingsDealDetailsSuccess = appliedFundings => ({
    type: GET_APPLIED_FUNDING_DEAL_DETAILS_SUCCESS,
    payload: appliedFundings,
})

export const getAppliedFundingsDealDetailsFail = error => ({
    type: GET_APPLIED_FUNDING_DEAL_DETAILS_FAIL,
    payload: error,
})

export const getAppliedFundings = appliedFundings => ({
    type: GET_APPLIED_FUNDING,
    payload: appliedFundings,
})

export const getAppliedFundingsSuccess = appliedFundings => ({
    type: GET_APPLIED_FUNDING_SUCCESS,
    payload: appliedFundings,
})

export const getAppliedFundingsFail = error => ({
    type: GET_APPLIED_FUNDING_FAIL,
    payload: error,
})

export const getDealManagers = () => ({
    type: GET_DEAL_MANAGER,
})

export const getDealManagersSuccess = dealManagers => ({
    type: GET_DEAL_MANAGER_SUCCESS,
    payload: dealManagers.managers || [],
})

export const getDealManagersFail = error => ({
    type: GET_DEAL_MANAGER_FAIL,
    payload: error,
})
export const onSendConsentToInvestor = (statusPayload) => ({
    type: SEND_CONSENT_TO_INVESTOR,
    payload: statusPayload
})
export const sendConsentToInvestorSuccess = sendConsent => ({
    type: SEND_CONSENT_TO_INVESTOR_SUCCESS,
    payload: sendConsent,
})
export const sendConsentToInvestorFail = error => ({
    type: SEND_CONSENT_TO_INVESTOR_FAIL,
    payload: error,
})
export const updateZoomInvestorIntentStatus = (statusPayload) => ({
    type: UPDATE_ZOOM_INVESTOR_INTENT_STATUS,
    payload: statusPayload
})
export const updateStatus = (statusPayload) => ({
    type: UPDATE_STATUS,
    payload: statusPayload
})


export const copyDealStatus = (statusPayload) => ({
    type: COPY_DEAL_STATUS,
    payload: statusPayload
})

export const updateStatusSuccess = appliedFundings => ({
    type: UPDATE_STATUS_SUCCESS,
    payload: appliedFundings,
})



export const copyDealStatusSuccess = appliedFundings => ({
    type: COPY_DEAL_STATUS_SUCCESS,
    payload: appliedFundings,
})

export const updateStatusFail = error => ({
    type: UPDATE_STATUS_FAIL,
    payload: error,
})

export const copyDealStatusFail = error => ({
    type: COPY_DEAL_STATUS_FAIL,
    payload: error,
})

export const getFundingDealStatusList = payload => {
    return {
        type: GET_FUNDING_DEAL_STATUS_LIST,
        payload: payload,
    }
}
export const getFundingDealTypeList = payload => {
    return {
        type: GET_FUNDING_DEAL_TYPE_LIST,
        payload: payload,
    }
}


export const getFundingDealStatusListSuccess = payload => {
    return {
        type: GET_FUNDING_DEAL_STATUS_LIST_SUCCESS,
        payload: payload,
    }
}
export const getonGetFundingDealTypeListSuccess = payload => {
    return {
        type: GET_FUNDING_DEAL_TYPE_LIST_SUCCESS,
        payload: payload,
    }
}
export const getFundingDealStatusListFail = error => {
    return {
        type: GET_FUNDING_DEAL_STATUS_LIST_FAIL,
        payload: error,
    }
}

export const getonGetFundingDealTypeListFail = error => {
    return {
        type: GET_FUNDING_DEAL_TYPE_LIST_FAIL,
        payload: error,
    }
}

export const updateFundingDetails = payload => {
    return {
        type: UPDATE_FUNDING_DETAILS,
        payload: payload,
    }
}

export const updateFundingDetailsSuccess = payload => {
    return {
        type: UPDATE_FUNDING_DETAILS_SUCCESS,
        payload: payload,
    }
}

export const updateFundingDetailsFail = error => {
    return {
        type: UPDATE_FUNDING_DETAILS_FAIL,
        payload: error,
    }
}