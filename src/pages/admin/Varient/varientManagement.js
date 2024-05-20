import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import plus_icon from "../../../assets/images-new/plus-icon.svg";

import delete_icon from "../../../assets/images-new/delete-icon.svg";
import edit_icon from "../../../assets/images-new/edit.svg";
import eyes_icon from "../../../assets/images-new/eyes.svg";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

const VarientManagement = () => {
  const [varientsData, setvarientsData] = useState([]);
  const [varientModalData, setvarientModalData] = useState([]);
  const [showvarientModal, setShowvarientModal] = useState(false);

  const [showDeleteModal, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const [deleteId, setDeleteId] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedvarient, setSelectedvarient] = useState([]);

  useEffect(() => {
    if (varientsData.length == 0) {
      fetchvarientsData();
    }

    document.title = "Autoscan - varient List";
  }, []);

  const fetchvarientsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/varient/varient-list`
      ); // Replace with your actual API URL
      setvarientsData(response?.data || []);
    } catch (error) {
      console.error("Error fetching varient data:", error);
    }
  };

  const handleToggleStatus = async varientId => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/varient/toggle-status/${varientId}`
      );
      setvarientsData(prevvarients =>
        prevvarients.map(varient =>
          varient.id === varientId
            ? { ...varient, status: varient.status == "0" ? "1" : "0" } // Toggle status
            : varient
        )
      );

      toast.success("varient status updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error toggling varient status:", error);
    }
  };

  const handleDelete = varientId => {
    setDeleteId(varientId);
    setDeleteShow(true);
  };

  const deletevarient = async () => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_URL}/varient/delete-varient/${deleteId}`)
        .then(function (res) {
          if (res?.data?.success) {
            const varients = varientsData.filter(item => item.id !== deleteId);
            setvarientsData(varients);

            toast.success(res.data?.msg || "varient deleted successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setDeleteShow(false);
          }
        })
        .catch(function (error) {
          console.log(error.response);
        });
    } catch (error) {
      console.error("Error deleting varient:", error);
    }
  };

  const varientDetailsModal = varientId => {
    const varientData = varientsData.find(item => item.id === varientId);
    setvarientModalData(varientData);
    setShowvarientModal(true);
  };
  const handleClose = () => setShowvarientModal(false);
  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/varient-management" className="active-btn">
                    Varients Management
                  </Link>
                </li>
             
                
              </ul>
            </div>
          </Col>
          <div className="table-card">
            <div className="table-data-search">
              <div className="total-record">
                <h5 className="mb-0">
                  Total Records: <span>{varientsData.length}</span>
                </h5>
              </div>
              <div className="total-serachbar d-flex gap-3 align-items-center">
                <div className="card-filters">
                  <Link
                    to="/add-varient-management"
                    className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                  >
                    <span>
                      <img src={plus_icon} alt="download icon" />
                    </span>
                    Create varient
                  </Link>
                </div>
              </div>
            </div>

            <div className="table-record-data tabel-application">
              <div className="react-bootstrap-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                     
                      <th className="row-actions2 text-left">Brand</th>
                      <th className="text-center">Model</th>
                      <th className="text-center">Varient Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {varientsData?.map(varient => (
                      <tr key={varient.id}>
                        <td className="row-actions2 text-left">{varient?.brand}</td>
                        <td className="row-actions2 text-center">{varient?.model}</td>   
                        <td className="row-actions2 text-center">{varient?.varient_name}</td>
                        <td className="text-center">
                          <div className="varient-status-toggle">
                            {varient.status == "1" ? (
                              <span>Active</span>
                            ) : (
                              <span>Inactive</span>
                            )}
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={varient.status == "1"}
                                onChange={() => handleToggleStatus(varient.id)}
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </td>
                        <td align="center">
                          <div className="action-application">
                            <div className="action-one">
                              <Link
                                to="#"
                                onClick={() => varientDetailsModal(varient.id)}
                              >
                                <img src={eyes_icon} alt="" />
                              </Link>
                            </div>
                            <div className="action-one">
                              <Link
                                to={`/edit-varient-management/${varient.id}`}
                                title="Edit"
                                data-placement="bottom"
                                data-toggle="tooltip"
                              >
                                <img src={edit_icon} alt="" />
                                <span>Edit Varient</span>
                              </Link>
                            </div>

                         
                              <>
                                <div className="action-one">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      handleDelete(varient.id);
                                    }}
                                  >
                                    <img src={delete_icon} alt="" />
                                    <span>Delete Varient</span>
                                  </Link>
                                </div>
                              </>
                       
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Modal show={showvarientModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Varient Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-component">
                <table
                  className="display dataTable no-footer table table-bordered table-striped"
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th>Brand:</th>
                      <td>{varientModalData?.brand}</td>
                    </tr>
                    <tr>
                      <th>Model:</th>
                      <td>{varientModalData?.model}</td>
                    </tr>
                    <tr>
                      <th>Varient Name:</th>
                      <td>{varientModalData?.varient_name}</td>
                    </tr>
                    <tr>
                      <th>Status:</th>
                      <td>{(varientModalData?.status==1)?'Active':'Inactive'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={showDeleteModal} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Confimation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-component">
                <p>Are you sure you want to delete this varient ?</p>
                <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleDeleteClose}
                  >
                    Cancel
                  </Button>{" "}
                  <Button type="button" variant="danger" onClick={deletevarient}>
                    Delete
                  </Button>{" "}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default VarientManagement;
