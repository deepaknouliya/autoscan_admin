import { all, fork } from "redux-saga/effects";

//public
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";
import LayoutSaga from "./layout/saga";
import pitchdaysSaga from "./pitchdays/saga";
import deepDiveEventSaga from "./deepDiveEvent/saga";
import educationSeriesSaga from "./EducationSeries/saga";
import usersSaga from "./users/saga";
import dashboardSaga from "./dashboard/saga";
import subscription from "./subscriptions/saga";
import appliedFunding from "./appliedFunding/saga";
import investors from "./investors/saga";
import document from "./document/saga";
import kpi from "./kpi/saga";
import startups from "./startups/saga";
import reports from "./reports/saga";
import credits from "./credits/saga";
import accessSettingSaga from "./frontendAccessSetting/saga";

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(pitchdaysSaga),
    fork(deepDiveEventSaga),
    fork(educationSeriesSaga),
    fork(usersSaga),
    fork(dashboardSaga),
    fork(subscription),
    fork(appliedFunding),
    fork(investors),
    fork(document),
    fork(kpi),
    fork(startups),
    fork(reports),
    fork(credits),
    fork(accessSettingSaga),
  ]);
}
