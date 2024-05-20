import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HeaderHeading() {
  // header heading chnage name
  const location = useLocation();
  const getPageName = () => {
    const path = location.pathname;
    let pageName = path.substring(path.lastIndexOf("/") + 1);
    pageName = pageName.replace(/-/g, " ");
    return pageName;
  };
  const pathsWithoutHeader = ["/view-feedback"];
  const pathToHeading = {
    "/view-feedback": "Feedback Management",
    "/edit-feedback": "Feedback Management",
    "/permission-matrix": "Users",
    "/add-lead-management": "Lead Management",
    "/view-lead-management": "Lead Management",
    "/edit-lead-management": "Lead Management",
    "/role-list": "Users",
    "/edit-role": "Users",
    "/add-role-management": "Users",
    "/user-list": "Users",
    "/create-user": "Users",
    "/setting-management": "Users",
    [`/edit-role-management/`]: "Users",
    "/social-feedback": "Social Media Feedbacks",
    "/campaign-manager": "Campaign",
    "/create-campaign": "Campaign",
    "/campaign-list": "Campaign",
    "/create-list": "Campaign",
    "/campaign-statistics": "Campaign",
    "/templates-management": "Campaign",
    "/add-templates": "Campaign",
    "/contest-winners": "Campaign",
  };
  // Determine whether to show the header
  const showHeader =
    !pathsWithoutHeader.includes(location.pathname) ||
    Object.keys(pathToHeading).includes(location.pathname);

  return (
    <div className="header-page-name">
      {showHeader && (
        <h5 className="mb-0 heading-twenty">
          {/* If there's a corresponding heading, use it; otherwise, use the page name */}
          {pathToHeading[location.pathname] || getPageName()}
        </h5>
      )}
    </div>
  );
}
