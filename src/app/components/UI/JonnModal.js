import React from 'react';
import {
    Button,
    Modal,
    ButtonToolbar,
    Col,
    Container,
    Row
  } from "react-bootstrap";

  const JonnModal = (props) => {
    return (
      <>
        <Modal show={props.handleShow} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default JonnModal;