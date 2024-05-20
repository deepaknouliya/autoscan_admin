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

const ModelManagement = () => {
  const [modelsData, setmodelsData] = useState([]);
  const [modelModalData, setmodelModalData] = useState([]);
  const [showmodelModal, setShowmodelModal] = useState(false);

  const [showDeleteModal, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const [deleteId, setDeleteId] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedmodel, setSelectedmodel] = useState([]);

  useEffect(() => {
    if (modelsData.length == 0) {
      fetchmodelsData();
    }

    document.title = "Autoscan - model List";
  }, []);

  const fetchmodelsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/model/model-list`
      ); // Replace with your actual API URL
      setmodelsData(response?.data || []);
    } catch (error) {
      console.error("Error fetching model data:", error);
    }
  };

  const handleToggleStatus = async modelId => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/model/toggle-status/${modelId}`
      );
      setmodelsData(prevmodels =>
        prevmodels.map(model =>
          model.id === modelId
            ? { ...model, status: model.status == "0" ? "1" : "0" } // Toggle status
            : model
        )
      );

      toast.success("model status updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error toggling model status:", error);
    }
  };

  const handleDelete = modelId => {
    setDeleteId(modelId);
    setDeleteShow(true);
  };

  const deletemodel = async () => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_URL}/model/delete-model/${deleteId}`)
        .then(function (res) {
          if (res?.data?.success) {
            const models = modelsData.filter(item => item.id !== deleteId);
            setmodelsData(models);

            toast.success(res.data?.msg || "model deleted successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setDeleteShow(false);
          }
        })
        .catch(function (error) {
          console.log(error.response);
        });
    } catch (error) {
      console.error("Error deleting model:", error);
    }
  };

  const modelDetailsModal = modelId => {
    const modelData = modelsData.find(item => item.id === modelId);
    setmodelModalData(modelData);
    setShowmodelModal(true);
  };
  const handleClose = () => setShowmodelModal(false);
  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/model-management" className="active-btn">
                    Models Management
                  </Link>
                </li>
             
                
              </ul>
            </div>
          </Col>
          <div className="table-card">
            <div className="table-data-search">
              <div className="total-record">
                <h5 className="mb-0">
                  Total Records: <span>{modelsData.length}</span>
                </h5>
              </div>
              <div className="total-serachbar d-flex gap-3 align-items-center">
                <div className="card-filters">
                  <Link
                    to="/add-model-management"
                    className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                  >
                    <span>
                      <img src={plus_icon} alt="download icon" />
                    </span>
                    Create model
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
                      <th className="text-center">Model Name</th>
                      <th className="text-center">Model Year</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelsData?.map(model => (
                      <tr key={model.id}>
                        <td className="row-actions2 text-left">{model?.brand_name}</td>
                        <td className="row-actions2 text-center">{model?.model_name}</td>   
                        <td className="row-actions2 text-center">{model?.model_year}</td>
                        <td className="text-center">
                          <div className="job-status-toggle">
                            {model.status == "1" ? (
                              <span>Active</span>
                            ) : (
                              <span>Inactive</span>
                            )}
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={model.status == "1"}
                                onChange={() => handleToggleStatus(model.id)}
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
                                onClick={() => modelDetailsModal(model.id)}
                              >
                                <img src={eyes_icon} alt="" />
                              </Link>
                            </div>
                            <div className="action-one">
                              <Link
                                to={`/edit-model-management/${model.id}`}
                                title="Edit"
                                data-placement="bottom"
                                data-toggle="tooltip"
                              >
                                <img src={edit_icon} alt="" />
                                <span>Edit Model</span>
                              </Link>
                            </div>

                         
                              <>
                                <div className="action-one">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      handleDelete(model.id);
                                    }}
                                  >
                                    <img src={delete_icon} alt="" />
                                    <span>Delete Model</span>
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
          <Modal show={showmodelModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Model Details</Modal.Title>
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
                      <td>{modelModalData?.brand_name}</td>
                    </tr>
                    <tr>
                      <th>Model Name:</th>
                      <td>{modelModalData?.model_name}</td>
                    </tr>
                    <tr>
                      <th>Model Year:</th>
                      <td>{modelModalData?.model_year}</td>
                    </tr>
                    <tr>
                      <th>Status:</th>
                      <td>{(modelModalData?.status==1)?'Active':'Inactive'}</td>
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
                <p>Are you sure you want to delete this model ?</p>
                <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleDeleteClose}
                  >
                    Cancel
                  </Button>{" "}
                  <Button type="button" variant="danger" onClick={deletemodel}>
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

export default ModelManagement;
