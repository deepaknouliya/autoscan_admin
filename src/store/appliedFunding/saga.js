import {
    getAppliedFunding,
    updateStatus,
    copyDealStatus,
    getDealManagers,
    updateFundingDetailsAPI,
    getAppliedFundingDetails,
    getAssessmentReportAPI,
    getFundingDealStatusListAPI,
    getonGetFundingDealTypeListAPI,
    sendConsentToInvestor,
} from "../../helpers/backend_helper";
import { call, put, takeEvery } from "redux-saga/effects"
import {
    getAssessmentReportFail,
    getAssessmentReportSuccess,
    updateStatusFail,
    updateStatusSuccess,
    copyDealStatusSuccess,
    copyDealStatusFail,
} from "../../store/actions";
import {
    getAppliedFundingsFail,
    getAppliedFundingsSuccess,
    getDealManagersSuccess,
    getDealManagersFail,
    updateFundingDetailsSuccess,
    updateFundingDetailsFail,
    getAppliedFundingsDealDetailsSuccess,
    getAppliedFundingsDealDetailsFail,
    getAssessmentReport,
    getFundingDealStatusListSuccess,
    getFundingDealStatusListFail,
    getonGetFundingDealTypeListSuccess,
    sendConsentToInvestorSuccess,
    sendConsentToInvestorFail,
} from "./actions";
import {
    GET_APPLIED_FUNDING,
    UPDATE_STATUS,
    SEND_CONSENT_TO_INVESTOR,
    COPY_DEAL_STATUS,
    GET_DEAL_MANAGER,
    UPDATE_FUNDING_DETAILS,
    GET_APPLIED_FUNDING_DEAL_DETAILS,
    GET_ASSESSMENT_REPORT,
    GET_FUNDING_DEAL_STATUS_LIST,
    GET_FUNDING_DEAL_TYPE_LIST,
} from "./actionType";

function* onGetAssessmentReport(payload) {
    try {
        const response = yield call(getAssessmentReportAPI, payload);
        yield put(getAssessmentReportSuccess(response));
    } catch (error) {
        yield put(getAssessmentReportFail(error));
    }
}

function* onGetFundingDealStatusList(payload) {
    try {
        const response = yield call(getFundingDealStatusListAPI, payload);
        yield put(getFundingDealStatusListSuccess(response));
    } catch (error) {
        yield put(getFundingDealStatusListFail(error));
    }
}
function* onGetFundingDealTypeList(payload) {
    try {
        const response = yield call(getonGetFundingDealTypeListAPI, payload);
        yield put(getonGetFundingDealTypeListSuccess(response));
    } catch (error) {
        yield put(getonGetFundingDealTypeListFail(error));
    }
}

function* onUpdateUpdateFundingDetails(payload) {
    try {
        const response = yield call(updateFundingDetailsAPI, payload);
        yield put(updateFundingDetailsSuccess(response));
    } catch (error) {
        yield put(updateFundingDetailsFail(error));
    }
}

function* onUpdateStatus({ payload: statusPayload }) {
    try {
        const response = yield call(updateStatus, statusPayload);
        yield put(updateStatusSuccess(response));
    } catch (error) {
        yield put(updateStatusFail(error));
    }
}

function* onSendConsentToInvestor({ payload: statusPayload }) {
  try {
    const response = yield call(sendConsentToInvestor, statusPayload);
    yield put(sendConsentToInvestorSuccess(response));
  } catch (error) {
    yield put(sendConsentToInvestorFail(error));
  }
}

function* onCopyDealStatus({ payload: statusPayload }) {
    try {
        const response = yield call(copyDealStatus, statusPayload)
        yield put(copyDealStatusSuccess(response))
    } catch (error) {
        yield put(copyDealStatusFail(error))
    }
}

function* fetchAppliedFundings(payload) {
    try {
        const response = yield call(getAppliedFunding,payload);

        yield put(getAppliedFundingsSuccess(response));
    } catch (error) {
        yield put(getAppliedFundingsFail(error));
        yield put(getAppliedFundingsSuccess({data:[],dataSize:0}));
    }
}

function* fetchAppliedFundingsDealDetails(payload) {
    try {
        const response = yield call(getAppliedFundingDetails, payload);
        yield put(getAppliedFundingsDealDetailsSuccess(response));
    } catch (error) {
        yield put(getAppliedFundingsDealDetailsFail(error));
    }
}

function* fetchDealManagers() {
    try {
        const response = yield call(getDealManagers);

        yield put(getDealManagersSuccess(response));
    } catch (error) {
        yield put(getDealManagersFail(error));
    }
}

function* appliedFundingsSaga() {
    yield takeEvery(GET_APPLIED_FUNDING, fetchAppliedFundings)
    yield takeEvery(UPDATE_STATUS, onUpdateStatus)
    yield takeEvery(SEND_CONSENT_TO_INVESTOR,onSendConsentToInvestor)
    yield takeEvery(COPY_DEAL_STATUS, onCopyDealStatus)
    yield takeEvery(GET_DEAL_MANAGER, fetchDealManagers)
    yield takeEvery(UPDATE_FUNDING_DETAILS, onUpdateUpdateFundingDetails)
    yield takeEvery(GET_APPLIED_FUNDING_DEAL_DETAILS, fetchAppliedFundingsDealDetails)
    yield takeEvery(GET_ASSESSMENT_REPORT, onGetAssessmentReport)
    yield takeEvery(GET_FUNDING_DEAL_STATUS_LIST, onGetFundingDealStatusList)
    yield takeEvery(GET_FUNDING_DEAL_TYPE_LIST, onGetFundingDealTypeList)


}

export default appliedFundingsSaga;
