import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import arrow1 from "../../../assets/images/icon/arrow-1.svg";
import ApplicantChart from "./ApplicantChart";

const columns = [
  {
    dataField: "counts.totalApplicants",
    text: "Total",
    classes: "total text-center",
    headerClasses: "text-center",
  },
  {
    dataField: "title",
    text: "Job Title",
    classes: "job-title text-left",
    headerClasses: "text-left",
  },
  {
    dataField: "counts.pendingUsers",
    text: "Pending",
    classes: "pending text-center",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.screeningUsers",
    text: "Shortlisted Q&A",
    classes: "Shortlisted-qaq text-cente",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.scheduledUsers",
    text: "Shortlisted F2F",
    classes: "Shortlisted-fto-f text-cente",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.selectedUsers",
    text: "Selected",
    classes: "selected-number text-cente",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.onboardedUsers",
    text: "Onboard",
    classes: "on-board text-cente",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.onholdUsers",
    text: "On Hold",
    classes: "on-hold text-cente",
    headerClasses: "text-center",
  },
  {
    dataField: "counts.rejectedUsers",
    text: "Rejected",
    classes: "rejected text-cente",
    headerClasses: "text-center",
  },
  // Add more columns as needed
];

const TableComponent = props => {
  const [chartSwitch, setChartSwitch] = useState(false);
  const disableViewAll = props?.disableViewAll || false;

  let data = props?.data || [];

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    totalSize: data.length,
  };

  const rowClasses = (row, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  let myData = data?.map(el => {
    return {
      category: el?.title,
      value1: el?.counts?.totalApplicants || 0,
      value2: el?.counts?.pendingUsers || 0,
      value3: el?.counts?.screeningUsers || 0,
      value4: el?.counts?.scheduledUsers || 0,
      value5: el?.counts?.selectedUsers || 0,
      value6: el?.counts?.onboardedUsers || 0,
      value7: el?.counts?.onholdUsers || 0,
      value8: el?.counts?.rejectedUsers || 0,
    };
  });

  return (
    <div className="vacancy-tabel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="eligible-content">
              <div className="heading-card">
                <div className="d-flex justify-content-between heading-subcard">
                  <h2 className="heading-twenty m-0">
                    Applications Coming for each Position/Vacancy
                  </h2>
                </div>
              </div>

              <div className="funnel-btn gap-3 d-flex align-items-center d-flex">
                <div>
                  <div className="notibtn mt-0 d-flex align-items-center gap-2">
                    <span className="notilab mr-2">Table</span>
                    <label className="switch" htmlFor={"chartSwitch"}>
                      <input
                        type="checkbox"
                        id={`chartSwitch`}
                        onClick={event => {
                          event.persist();
                          setChartSwitch(event.target.checked);
                        }}
                        defaultChecked={chartSwitch || false}
                      />
                      <div className="slider round"></div>
                    </label>
                    <span className="notilab ml-2">Chart</span>
                  </div>
                </div>
                {!disableViewAll && (
                  <Link
                    to="/position-application"
                    className="gap-2 d-flex align-items-center view_link"
                  >
                    View All <img src={arrow1} />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabel-application tabel-application-auto table-responsive pb-3">
              {chartSwitch ? (
                <ApplicantChart data={myData || []} />
              ) : (
                <div className="table-custome-class ">
                  <BootstrapTable
                    keyField="id"
                    data={data}
                    columns={columns}
                    pagination={paginationFactory(options)}
                    rowClasses={rowClasses}
                  />
                  {data?.length === 0 && (
                    <p className="text-center">No Data Available.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
