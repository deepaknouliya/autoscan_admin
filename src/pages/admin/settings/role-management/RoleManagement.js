import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import delete_icon from "../../../../assets/images-new/delete-icon.svg";
import plus_icon from "../../../../assets/images-new/plus-icon.svg";
import edit_icon from "../../../../assets/images-new/edit.svg";

export default function RoleManagement() {
  const data = [
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
    {
      Role_Name: "Administrator",
      No_of_Users: 5,
      Description: "Has full control over every aspect of the site.",
      Action: 30,
    },
  ];

  const columns = [
    {
      dataField: "checkbox",
      text: (
        <>
          <input type="checkbox" />
        </>
      ),
      formatter: (cell, row) => (
        <input
          type="checkbox"
          checked={row.selected}
          onChange={() => handleCheckboxChange(row.id)}
        />
      ),
    },
    { dataField: "Role_Name", text: "Role Name" },
    { dataField: "No_of_Users", text: "# No. of Users" },
    {
      dataField: "Description",
      text: "Description",
      classes: "row-actions text-left", // Add custom classes here
      headerClasses: "row-actions text-left",
    },
    {
      dataField: "Actions",
      text: "Actions",
      classes: "total text-center custom-class", // Add custom classes here
      headerClasses: "text-center",
      formatter: (cell, row) => {
        //  console.log('cell',row);
        return (
          <div className="action-application">
            <div className="action-one">
              <Link to="/edit-role-management">
                <img src={edit_icon} alt="edit" />
                <span>Edit</span>
              </Link>
            </div>
            <div className="action-one">
              <Link to="#" onClick={handleShow}>
                <img src={delete_icon} alt="edit" />
                <span>Delete</span>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];

  const [, setData] = useState([]);
  const handleCheckboxChange = id => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData); // Assuming 'setData' is a function to update the state
    console.log("Checkbox clicked for ID:", id);
  };

  const pendingData = data;

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

  /**modal**/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dashboard-wrapper">
        <Container fluid>
          <Row>
            <Col lg={12} className="padding-remove">
              <div className="breadcums-list">
                <ul className="margin-remove m-0">
                  <li className="margin-remove padding-remove">
                    <Link to="/role-list" className="active-btn">
                      Roles Management
                    </Link>
                  </li>
                  
                  <li className="margin-remove padding-remove">
                    <Link to="/manage-user">Manage User</Link>
                  </li>
                  
                </ul>
              </div>
            </Col>

            <div className="table-card">
              <div className="table-data-search">
                <div className="total-record">
                  <h5 className="mb-0">
                    Total Records: <span>{pendingData.length || 0}</span> out of{" "}
                    <span>1424</span>
                  </h5>
                </div>
                <div className="total-serachbar d-flex gap-3 align-items-center">
                  <div className="card-filters">
                    <Link
                      to="/add-role-management"
                      className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                    >
                      <span>
                        <img src={plus_icon} alt="download icon" />
                      </span>
                      Create Role
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-record-data tabel-application">
                <BootstrapTable
                  keyField="id"
                  data={data}
                  columns={columns}
                  pagination={paginationFactory(options)}
                  rowClasses={rowClasses}
                />
              </div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-component">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Enter Id</Form.Label>
                      <Form.Control type="text" placeholder="Enter ID" />
                    </Form.Group>

                    <div className="card-filters">
                      <button className="btn btn-primary blue-btn d-flex gap-1 align-items-center">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      </div>
    </>
  );
}
