import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import plus_icon from "../../../../assets/images-new/plus-icon.svg";

import delete_icon from "../../../../assets/images-new/delete-icon.svg";
import edit_icon from "../../../../assets/images-new/edit.svg";
import eyes_icon from "../../../../assets/images-new/eyes.svg";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

const RoleList = () => {
  const [rolesData, setRolesData] = useState([]);
  const [roleModalData, setRoleModalData] = useState([]);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const [showDeleteModal, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const [deleteId, setDeleteId] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedRole, setSelectedRole] = useState([]);

  useEffect(() => {
    if (rolesData.length == 0) {
      fetchRolesData();
    }

    document.title = "Autoscan - Role List";
  }, []);

  const fetchRolesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/role/role-list`
      ); // Replace with your actual API URL
      setRolesData(response?.data || []);
    } catch (error) {
      console.error("Error fetching role data:", error);
    }
  };

  const handleToggleStatus = async roleId => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/role/toggle-status/${roleId}`
      );
      setRolesData(prevRoles =>
        prevRoles.map(role =>
          role.id === roleId
            ? { ...role, status: role.status == "0" ? "1" : "0" } // Toggle status
            : role
        )
      );
      toast.success("Role status updated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error toggling role status:", error);
    }
  };

  const handleDelete = roleId => {
    setDeleteId(roleId);
    setDeleteShow(true);
  };

  const deleteRole = async () => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_URL}/role/delete-role/${deleteId}`)
        .then(function (res) {
          if (res?.data?.success) {
            const roles = rolesData.filter(item => item.id !== deleteId);
            setRolesData(roles);

            toast.success(res.data?.msg || "Role deleted successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setDeleteShow(false);
          }
        })
        .catch(function (error) {
          console.log(error.response);
        });
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const roleDetailsModal = roleId => {
    const roleData = rolesData.find(item => item.id === roleId);
    setRoleModalData(roleData);
    setShowRoleModal(true);
  };
  const handleClose = () => setShowRoleModal(false);

  const handleSelectAll = e => {
    const { checked } = e.target;
    setIsCheckAll(checked);
    if (checked) {
      setSelectedRole(rolesData.map(li => li.id));
    } else {
      setSelectedRole([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    let nu = Number(id);
    setSelectedRole([...selectedRole, nu]);
    if (!checked) {
      setSelectedRole(selectedRole.filter(item => item !== nu));
    }
  };
  return (
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
                  <Link to="/user-list">Manage User</Link>
                </li>
               
              </ul>
            </div>
          </Col>
          <div className="table-card">
            <div className="table-data-search">
              <div className="total-record">
                <h5 className="mb-0">
                  Total Records: <span>{rolesData.length}</span>
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
              <div className="react-bootstrap-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="row-actions2 text-left">Role Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rolesData?.map(role => (
                      <tr key={role.id}>
                        <td className="row-actions2 text-left">{role?.name}</td>
              
                        <td className="text-center">
                          <div className="job-status-toggle">
                            {role.status == "1" ? (
                              <span>Active</span>
                            ) : (
                              <span>Inactive</span>
                            )}
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={role.status == "1"}
                                onChange={() => handleToggleStatus(role.id)}
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </td>
                        <td align="center">
                          <div className="action-application">
                            {/* <div className="action-one">
                              <Link
                                to="#"
                                onClick={() => roleDetailsModal(role.id)}
                              >
                                <img src={eyes_icon} alt="" />
                              </Link>
                            </div> */}
                            <div className="action-one">
                              <Link
                                to={`/edit-role-management/${role.id}`}
                                title="Edit"
                                data-placement="bottom"
                                data-toggle="tooltip"
                              >
                                <img src={edit_icon} alt="" />
                                <span>Edit User</span>
                              </Link>
                            </div>

                            {role.can_delete == 1 ? (
                              <>
                                <div className="action-one">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      handleDelete(role.id);
                                    }}
                                  >
                                    <img src={delete_icon} alt="" />
                                    <span>Delete User</span>
                                  </Link>
                                </div>
                              </>
                            ) : (
                              <div className="action-one"></div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Modal show={showRoleModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Role Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-component">
                <table
                  className="display dataTable no-footer table table-bordered table-striped"
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th>Role Name:</th>
                      <td>{roleModalData?.name}</td>
                    </tr>
                    <tr>
                      <th>Role Description:</th>
                      <td>{roleModalData?.description}</td>
                    </tr>
                    <tr>
                      <th>Login Destination:</th>
                      <td>{roleModalData?.login_destination}</td>
                    </tr>
                    <tr>
                      <th>Is this Default Role assigned to all new users?</th>
                      <td>{roleModalData?.default_role == 1 ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th>Can this role be deleted?</th>
                      <td>{roleModalData?.can_deleted == 1 ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th>Role Status</th>
                      <td>
                        {roleModalData?.status == 1 ? "Active" : "Inactive"}
                      </td>
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
                <p>Are you sure you want to delete this role ?</p>
                <div className="d-flex align-items-center gap-2 seacrh-btn mt-4 mb-4 space-btn">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleDeleteClose}
                  >
                    Cancel
                  </Button>{" "}
                  <Button type="button" variant="danger" onClick={deleteRole}>
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

export default RoleList;
