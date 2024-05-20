import React, { useEffect, useState } from "react";
import {
  format,
  add,
  eachDayOfInterval,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
} from "date-fns";

import calender from "../../../assets/images/icon/calender.svg";
import arrow from "../../../assets/images/icon/arrow.svg";
import Select from "react-select";
import { getUserInfo } from "helpers/authHelper";

function DashboardTimeline(props) {
  let techInterviews = props?.data?.techInterviews || [];
  let onboardingDetails = props?.data?.onboardingDetails || [];
  let companyValues = props?.data?.companyValues || [];
  const [company_id, setCompanyID] = useState("");

  useEffect(() => {
    if (companyValues?.length === 1 && !company_id) {
      setCompanyID(companyValues[0]?.value);
    }
  }, [companyValues]);

  const renderCheck = el => {
    if (companyValues?.length === 1) {
      return true;
    }

    if (el?.applied_job?.company?.id === company_id) {
      return true;
    }
    return false;
  };

  const userInfo = getUserInfo();
  const isSuperAdmin = userInfo?.tokenDetails?.isSuperAdmin || false;

  return (
    <div className="date-timeline-card">
      <h5 className="heading-four">Today's Activity</h5>

      <div className="date-picker-container">
        <div className="data-container-header">
          <div className="date-section">
            <p className="heading-five">{new Date().toDateString()}</p>
          </div>
        </div>
      </div>

      {(companyValues?.length > 1 || isSuperAdmin) && (
        <Select
          className="mb-2"
          placeholder="Select Company"
          id="company_id"
          name="company_id"
          options={companyValues}
          onChange={e => {
            setCompanyID(e.value);
          }}
          value={companyValues?.find(el => el?.value === company_id)}
        />
      )}

      <div className="calender-timeline">
        <div className="calendert-card">
          {techInterviews?.filter(renderCheck).map(el => {
            return (
              <div className="calender-site-card blue">
                <span>TECHNICAL INTERVIEW</span>
                <h4>{el?.applied_job?.name || ""}</h4>
                <h5>({el?.interview_title})</h5>
                <p>{el?.int_schedule_time}</p>
              </div>
            );
          })}

          {onboardingDetails?.filter(renderCheck).map(el => {
            return (
              <div className="calender-site-card green">
                <span>ONBOARDING</span>
                <h4>{el?.applied_job?.name || ""}</h4>
                <p>{el?.board_time}</p>
              </div>
            );
          })}

          {techInterviews?.filter(renderCheck).length === 0 &&
            onboardingDetails?.filter(renderCheck).length === 0 && (
              <p>No Data Available.</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default DashboardTimeline;
