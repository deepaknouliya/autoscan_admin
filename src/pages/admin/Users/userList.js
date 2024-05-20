import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import moment from "moment";
import RemotePagination from "../../../component/RemotePagination";
import Select from "react-select";
import { Spinner } from "reactstrap";
import { getUserInfo } from "../../../helpers/authHelper";
import { toast } from "react-toastify";
import { isEmpty } from "../../../helpers/utils";
import { CSVLink } from "react-csv";

import search_icon from "../../../assets/images-new/search-icon.svg";
import download_icon from "../../../assets/images-new/download-icon.svg";
import plus_icon from "../../../assets/images-new/plus-icon.svg";
import delete_icon from "../../../assets/images-new/delete-icon.svg";
import edit_icon from "../../../assets/images-new/edit.svg";
const userList = () => {
  const [usersData, setUsersData] = useState([]);
  const [totalCounts, setTotalCounts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);

  const [csvData, setCSVData] = useState([]);
  const [query, setQuery] = useState("");

  const userInfo = getUserInfo();

  useEffect(() => {
    fetchUsersList(currentPage, sizePerPage);
    document.title = "CRM - User Management";
  }, [currentPage]);

  const handleUserDelete = userId => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/user/delete-user/${userId}`
        )
        .then(response => {
          let { success } = response.data;
          if (success) {
            window.location.reload();
          }
        })
        .catch(err => {
          console.log("Error while deleting the user list:::", err);
        });
    }
  };

  const fetchUsersList = async (page, size) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/list?page=${page}&pageSize=${size}`
      );
      const { user, total_counts } = response?.data;
      setUsersData(user);
      setTotalCounts(total_counts);
    } catch (error) {
      console.error("Error fetching role data:", error);
    }
  };


  const columns = [
    { dataField: "name", text: "Name" },
    { dataField: "username", text: "Username" },
    { dataField: "role.name", text: "Role" },
    { dataField: "email", text: "Email" },
    { dataField: "phone", text: "Contact No" },
    {
      dataField: "id",
      text: "Actions",
      formatter: cell => {
        return (
          <div className="action-application">
            <div className="action-one">
            
              <Link to={`/edit-user/${cell}`} title="Edit User">
                <img src={edit_icon} alt="" />
                <span>Edit User</span>
              </Link>
            
            </div>

            {/* <Link className="text-success" to="#" title="Disapprove User">
              <i
                className="mdi mdi-thumb-up-outline font-size-18"
                id="edittooltip"
                style={{ color: "black" }}
              ></i>
            </Link> */}
              
            <div
              className="action-one"
              onClick={() => handleUserDelete(cell)}
              style={{ cursor: "pointer" }}
              title="Delete User"
            >
              <Link to="#">
                <img src={delete_icon} alt="" />
                <span>Delete User</span>
              </Link>
            </div>
             
          </div>
             
        );
      },
    },
  ];

  const [, setData] = useState([]);


  const rowClasses = (row, rowIndex) => {
    return rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };



  const handleTableChange = (type, { page, sizePerPage }) => {
    setTimeout(() => {
      fetchUsersList(page, sizePerPage);
      setCurrentPage(page);
    }, 500);
  };


  const handleCSVDownload = async e => {
    e.preventDefault();

    let csvUserData = [];
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/fetch-user`
      );
      csvUserData = response?.data?.userList;
    } catch (error) {
      console.error("Error fetching role data:", error);
    }

    if (csvUserData?.length === 0) {
      toast.error("No Data Available");
      return;
    }

 
    let allData = JSON.parse(JSON.stringify(csvUserData)) || [];
    allData = allData?.map(el => {
      return el;
    });

    try {
      setCSVData(allData || []);
      setTimeout(() => {
        let element = document.getElementById("downloadCSV");
        element.click();
      }, 1000);
    } catch (err) {}
  };

  const renderCheck = el => {
    if (!query) {
      return true;
    }

    let query_text = query?.toLowerCase();
    let searchItem = JSON.stringify({
      name: el?.name?.toLowerCase(),
      username: el?.username?.toLowerCase() || "",
      phone: el?.phone?.toLowerCase() || "",
      role: el?.role.name?.toLowerCase(),
    });
    if (searchItem?.includes(query_text)) {
      return true;
    }
    return false;
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
                  <Link to="/role-list">
                    Roles Management
                  </Link>
                </li>
                <li className="margin-remove padding-remove">
                  <Link to="/user-list"  className="active-btn">Manage User</Link>
                </li>
              </ul>
              </div>
            </Col>
            <div className="table-card">
              <div className="table-data-search">
                <div className="total-record">
                  <h5 className="mb-0">
                    Total Records: <span>{totalCounts}</span>
                  </h5>
                </div>
                <div className="total-serachbar d-flex gap-3 align-items-center">
                  <div className="serach-bar-top">
                    <form className="form-inline">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search by Name,Username,Role,Contact No..."
                        aria-label="Search"
                      />
                      <span>
                        <img src={search_icon} alt="search" />
                      </span>
                    </form>
                  </div>

                  <div className="card-filters">
                    <Link
                      to="/create-user"
                      className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                    >
                      <span>
                        <img src={plus_icon} alt="download icon" />
                      </span>
                      Create User
                    </Link>
                  </div>

                  <div className="card-filters">
                    <div className="card-filters">
                    
                      <CSVLink
                        data={csvData}
                        headers={[
                          {
                            key: "name",
                            label: "Name",
                          },
                          {
                            key: "username",
                            label: "Username",
                          },
                          {
                            key: "email",
                            label: "Email",
                          },
                          {
                            key: "phone",
                            label: "Phone",
                          },
                         
                        ]}
                        filename={`usersList.csv`}
                        id="downloadCSV"
                      >
                        <Button
                          className="blue-btn d-flex gap-1 align-items-center"
                          variant="primary"
                          onClick={e => handleCSVDownload(e)}
                        >
                          <span>
                            <img src={download_icon} alt="download icon" />
                          </span>{" "}
                          Download CSV
                        </Button>
                      </CSVLink>
                     
                    </div>
                  </div>
                </div>
              </div>



              <RemotePagination
                // data={leadsData}
                data={usersData?.filter(renderCheck)}
                columns={columns}
                page={currentPage}
                sizePerPage={sizePerPage}
                totalSize={totalCounts}
                onTableChange={handleTableChange}
                rowClasses={rowClasses}
              />
            </div>

        

          </Row>
        </Container>
      </div>
    </>
  );
};

export default userList;
