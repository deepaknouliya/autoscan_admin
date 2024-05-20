import React from "react";
import PropTypes from "prop-types";
import { Col, Modal, ModalBody, Row, Spinner } from "reactstrap";

const DataFetchLoader = props => {
  return (
    <Modal isOpen={props.loading} color="transparent" centered size="md">
      <ModalBody>
        <Row className="text-center">
          <Col md={12} className="mb-3">
            <h5>Please wait while we are fetching data</h5>
          </Col>
          <Col md={12}>
            <Spinner color="primary" />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

DataFetchLoader.propTypes = {
  loading: PropTypes.bool,
};

export default DataFetchLoader;
