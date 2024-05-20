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
import eyes_icon from "../../../assets/images-new/eyes.svg";
import download_icon from "../../../assets/images-new/download-icon.svg";
import plus_icon from "../../../assets/images-new/plus-icon.svg";
import delete_icon from "../../../assets/images-new/delete-icon.svg";
import edit_icon from "../../../assets/images-new/edit.svg";
const carManagement = () => {
  const [carsData, setCarsData] = useState([]);
  const [totalCounts, setTotalCounts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);
  const [csvData, setCSVData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchCarsList(currentPage, sizePerPage);
    document.title = "CRM - Car Management";
  }, [currentPage]);
  const handleToggleStatus = async carId => {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/car/toggle-status/${carId}`
        )
        .then(response => {
          const { car} = response?.data;
          setCarsData(prevcars =>
            prevcars.map(car =>
              car.id === carId
                ? { ...car, status: car.status == "0" ? "1" : "0" } // Toggle status
                : car
            )
          );
          fetchCarsList(1, sizePerPage);
          toast.success("Car status updated successfully");
        })
        .catch(err => {
          console.log("Error while deleting the car list:::", err);
          toast.error("Error while deleting the car list",err);
        });
    

  };

  
  const handleCarDelete = carId => {
    if (window.confirm("Are you sure you want to delete this Car?")) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/car/delete-car/${carId}`
        )
        .then(response => {
          let { success } = response.data;
          if (success) {
            window.location.reload();
          }
        })
        .catch(err => {
          console.log("Error while deleting the car list:::", err);
        });
    }
  };

  const fetchCarsList = async (page, size) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car/list?page=${page}&pageSize=${size}`
      );
      const { car, total_counts } = response?.data;
      setCarsData(car);
      setTotalCounts(total_counts);
    } catch (error) {
      console.error("Error fetching role data:", error);
    }
  };


  const columns = [
    { dataField: "Brand.brand_name", text: "Brand Name" },
    { dataField: "model.model_name", text: "Model Name" },
    { dataField: "varient.varient_name", text: "Varient Name" },
    { dataField: "registration_state", text: "registration_state" },
    { dataField: "car_location", text: "Car location" },
    { dataField: "manufacturing_year", text: "Manufacturing Year" },
    { dataField: "ex_showroom", text: "Ex Showroom Price" },
    {
      dataField: "updatedAt",
      text: "Date",
      formatter: (cell, row) => {
        return moment(row?.updatedAt).format("DD-MM-YYYY");
      },
    },
    {
      dataField: "Status",
      text: "Status",
      classes: "total text-center",
      headerClasses: "text-center",
      formatter: (cell, row) => {
        //  console.log('cell',row);
        return (
          <div className="job-status-toggle">
          {row.status == "1" ? (
            <span>Active</span>
          ) : (
            <span>Inactive</span>
          )}
          <label className="switch">
            <input
              type="checkbox"
              checked={row.status == "1"}
              onChange={() => handleToggleStatus(row.id)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        );
      },
    },
    {
      dataField: "Actions",
      text: "Actions",
      classes: "total text-center",
      headerClasses: "text-center",
      formatter: (cell, row) => {
        //  console.log('cell',row);
        return (
          <div className="action-application">
            <div className="action-one">
              <Link to={`/view-car/${row.id}`}>
                <img src={eyes_icon} alt="eyes" />
                <span>View Details</span>
              </Link>
            </div>
            <div className="action-one">
            <Link to={`/edit-car-management/${row.id}`}
                title="Edit"
                data-placement="bottom"
                data-toggle="tooltip"
              >
                <img src={edit_icon} alt="" />
                <span>Edit Car</span>
              </Link>
            </div>
            <div
              className="action-one"
              onClick={() => handleCarDelete(row.id)}
              style={{ cursor: "pointer" }}
              title="Delete Car"
            >
              <Link to="#">
                <img src={delete_icon} alt="" />
                <span>Delete Car</span>
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
      fetchCarsList(page, sizePerPage);
      setCurrentPage(page);
    }, 500);
  };


  const handleCSVDownload = async e => {
    e.preventDefault();

    let csvCarData = [];
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car/car-list`
      );
      csvCarData = response?.data?.car;
    } catch (error) {
      console.error("Error fetching role data:", error);
    }

    if (csvCarData?.length === 0) {
      toast.error("No Data Available");
      return;
    }

 
    let allData = JSON.parse(JSON.stringify(csvCarData)) || [];
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
      brand_name: el?.Brand.brand_name?.toLowerCase(),
      model_name: el?.model.model_name?.toLowerCase() || "",
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
                        placeholder="Search by Brand Name,Model Name"
                        aria-label="Search"
                      />
                      <span>
                        <img src={search_icon} alt="search" />
                      </span>
                    </form>
                  </div>

                  <div className="card-filters">
                    <Link
                      to="/add-car-management"
                      className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                    >
                      <span>
                        <img src={plus_icon} alt="download icon" />
                      </span>
                      Add Car
                    </Link>
                  </div>

                  <div className="card-filters">
                    <div className="card-filters">
                      <CSVLink
                        data={csvData}
                        headers={[
                          {
                            key: "Brand.brand_name",
                            label: "Brand Name",
                          },
                          {
                            key: "model.model_name",
                            label: "Model Name",
                          },
                          {
                            key: "varient.varient_name",
                            label: "Varient Name",
                          },
                          { 
                            key: "registration_state",
                           label: "registration_state", 
                          },
                          { 
                            key: "car_location",
                           label: "Car location",
                           },
                          { 
                            key: "manufacturing_year",
                           label: "Manufacturing Year",
                          },                           
                          { 
                            key: "ex_showroom",
                           label: "Ex Showroom Price",
                           },
                        ]}
                        filename={`carsList.csv`}
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
                data={carsData?.filter(renderCheck)}
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

export default carManagement;
