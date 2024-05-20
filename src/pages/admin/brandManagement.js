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

const BrandManagement = () => {
  const [brandsData, setbrandsData] = useState([]);
  const [brandModalData, setbrandModalData] = useState([]);
  const [showbrandModal, setShowbrandModal] = useState(false);

  const [showDeleteModal, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const [deleteId, setDeleteId] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedbrand, setSelectedbrand] = useState([]);

  useEffect(() => {
    if (brandsData.length == 0) {
      fetchbrandsData();
    }

    document.title = "Autoscan - brand List";
  }, []);

  const fetchbrandsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/brand/brand-list `
      ); // Replace with your actual API URL
      setbrandsData(response?.data || []);
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };

  const handleToggleStatus = async brandId => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/brand/toggle-status/${brandId}`
      );
      setbrandsData(prevbrands =>
        prevbrands.map(brand =>
          brand.id === brandId
            ? { ...brand, status: brand.status == "0" ? "1" : "0" } // Toggle status
            : brand
        )
      );

      toast.success("brand status updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error toggling brand status:", error);
    }
  };

  const handleDelete = brandId => {
    setDeleteId(brandId);
    setDeleteShow(true);
  };

  const deletebrand = async () => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_URL}/brand/delete-brand/${deleteId}`)
        .then(function (res) {
          if (res?.data?.success) {
            const brands = brandsData.filter(item => item.id !== deleteId);
            setbrandsData(brands);

            toast.success(res.data?.msg || "brand deleted successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setDeleteShow(false);
          }
        })
        .catch(function (error) {
          console.log(error.response);
        });
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  const brandDetailsModal = brandId => {
    const brandData = brandsData.find(item => item.id === brandId);
    setbrandModalData(brandData);
    setShowbrandModal(true);
  };
  const handleClose = () => setShowbrandModal(false);
  return (
    <div className="dashboard-wrapper">
      <Container fluid>
        <Row>
          <Col lg={12} className="padding-remove">
            <div className="breadcums-list">
              <ul className="margin-remove m-0">
                <li className="margin-remove padding-remove">
                  <Link to="/brand-management" className="active-btn">
                    Brands Management
                  </Link>
                </li>
             
                
              </ul>
            </div>
          </Col>
          <div className="table-card">
            <div className="table-data-search">
              <div className="total-record">
                <h5 className="mb-0">
                  Total Records: <span>{brandsData.length}</span>
                </h5>
              </div>
              <div className="total-serachbar d-flex gap-3 align-items-center">
                <div className="card-filters">
                  <Link
                    to="/add-brand-management"
                    className="btn btn-primary blue-btn d-flex gap-1 align-items-center"
                  >
                    <span>
                      <img src={plus_icon} alt="download icon" />
                    </span>
                    Create brand
                  </Link>
                </div>
              </div>
            </div>

            <div className="table-record-data tabel-application">
              <div className="react-bootstrap-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="row-actions2 text-left">Brand Name</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brandsData?.map(brand => (
                      <tr key={brand.id}>
                        <td className="row-actions2 text-left">{brand?.brand_name}</td>
                        <td className="row-actions2 text-left"><img src={brand?.brand_img} alt="download icon" /></td>
                        <td className="text-center">
                          <div className="job-status-toggle">
                            {brand.status == "1" ? (
                              <span>Active</span>
                            ) : (
                              <span>Inactive</span>
                            )}
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={brand.status == "1"}
                                onChange={() => handleToggleStatus(brand.id)}
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
                                onClick={() => brandDetailsModal(brand.id)}
                              >
                                <img src={eyes_icon} alt="" />
                              </Link>
                            </div>
                            <div className="action-one">
                              <Link
                                to={`/edit-brand-management/${brand.id}`}
                                title="Edit"
                                data-placement="bottom"
                                data-toggle="tooltip"
                              >
                                <img src={edit_icon} alt="" />
                                <span>Edit Brand</span>
                              </Link>
                            </div>

                         
                              <>
                                <div className="action-one">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      handleDelete(brand.id);
                                    }}
                                  >
                                    <img src={delete_icon} alt="" />
                                    <span>Delete Brand</span>
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
          <Modal show={showbrandModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Brand Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-component">
                <table
                  className="display dataTable no-footer table table-bordered table-striped"
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th>Brand Name:</th>
                      <td>{brandModalData?.brand_name}</td>
                    </tr>
                    <tr>
                      <th>Brand Image:</th>
                      <td>{brandModalData?.brand_img}</td>
                    </tr>
                    <tr>
                      <th>Status:</th>
                      <td>{(brandModalData?.status==1)?'Active':'Inactive'}</td>
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
                <p>Are you sure you want to delete this brand ?</p>
                <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleDeleteClose}
                  >
                    Cancel
                  </Button>{" "}
                  <Button type="button" variant="danger" onClick={deletebrand}>
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

export default BrandManagement;
