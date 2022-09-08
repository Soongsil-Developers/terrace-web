import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaQrcode } from "react-icons/fa";
import "./ScannerModal.css";

export default function ScannerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id='scannerBtn'>
        <Button id='openScannerModal' onClick={handleShow}>
          <FaQrcode size={40} />
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header>
          <Modal.Title>
            <p id='scannerModalTitle'>Scan QR Code</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span id='scannerModalBody'>QR Code is here!</span>
        </Modal.Body>
      </Modal>
    </>
  );
}
