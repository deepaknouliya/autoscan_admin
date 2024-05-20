import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

import search_icon from "../../../assets/images-new/search-icon.svg";

export default function PermissionMatrix() {
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [checkedPermissions, setCheckedPermissions] = useState({});
  const [checkedRoles, setCheckedRoles] = useState({});
  useEffect(() => {
    fetchPermissions();
    fetchRoles();
  }, []);

  const fetchPermissions = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/permissions/fetch-permissions`
      );
      const data = response.data;
      const permissions = data.success ? data.allPermissions.map(permission => permission.name.toLowerCase()) : [];
      setPermissions(permissions);
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/role/fetch-role`
      );
      const data = response.data;
      const roleNames = data.success ? data.allRoles.map(role => role.name.toLowerCase()) : [];
      setRoles(roleNames);
    } catch (error) {
      console.error("Error fetching role data:", error);
    }
  };



  const data = permissions.map(permission => ({
    permission: permission,
    ...Object.fromEntries(roles.map(role => [role, <input type="checkbox"  />]))
  }));

  const columns = [
    {
      dataField: "permission",
      text: "Permission",
      classes: "row-actions-permission",
      headerClasses: "row-actions-permission",
    
    },
    ...roles.map(role => ({
      dataField: role,
      text: (
        <>
         {role}
        
        </>
      ),
      classes: "row-actions1",
      headerClasses: "row-actions1",
    }))
  ];

  const PermissionData = data;

  const rowClasses = (row, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size}
    </span>
  );
  let options = {
    paginationSize: 1,
    pageStartIndex: 1,
    alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: true, // Hide the going to First and Last page button
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: false,
    prePageText: false,
    nextPageText: false,
    lastPageText: false,
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: false,
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <Container fluid>
          <Row>
            <Col lg={12} className="padding-remove">
              <div className="breadcums-list">
                <ul className="margin-remove m-0">
                  <li className="margin-remove padding-remove">
                    <Link to="/role-list">Roles Management</Link>
                  </li>
                  <li className="margin-remove padding-remove">
                    <Link to="/permission-matrix" className="active-btn">
                      Permission Matrix
                    </Link>
                  </li>
                  <li className="margin-remove padding-remove">
                    <Link to="/user-list">Manage User</Link>
                  </li>
                 
                </ul>
              </div>
            </Col>

            <div className="table-card">
              <div className="table-data-search">
                <div className="total-record">
                  <h5 className="mb-0">
                    Total Records: <span>{PermissionData.length || 0}</span> out of{" "}
                    <span>{PermissionData.length || 0}</span>
                  </h5>
                </div>
                <div className="total-serachbar d-flex gap-3 align-items-center">
                  <div className="serach-bar-top">
                    <form className="form-inline">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search by mobile no., application no..."
                        aria-label="Search"
                      />
                      <span>
                        <img src={search_icon} alt="search" />
                      </span>
                    </form>
                  </div>
                </div>
              </div>

              <div className="table-record-data tabel-application">
                <BootstrapTable
                  keyField="id"
                  data={data}
                  columns={columns}
                  rowClasses={rowClasses}
                />
                <div className="Loadmore-btn">
                  <button className="btn btn-primary Loadmore-btns ">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
