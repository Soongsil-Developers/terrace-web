import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaQrcode, FaTimes } from "react-icons/fa";
import "./ScannerModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Scanner from "./Scanner";

export default function ScannerModal() {
  const [showPossible, setShowPossible] = useState(false);
  const [showImpossible, setShowImpossible] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);

  const handleShowPossible = () => setShowPossible(!showPossible);
  const handleShowImpossible = () => setShowImpossible(!showImpossible);
  return (
    <>
      <div id='Container'>
        <Button
          id={"openScannerModal" + (buttonChange ? "Impossible" : "Possible")}
          onClick={buttonChange ? handleShowImpossible : handleShowPossible}>
          <FaQrcode id='qrcode' size={40} />
        </Button>
        <Modal
          show={showPossible}
          onHide={handleShowPossible}
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header>
            <Modal.Title>
              <p className='ModalTitle '>코드 스캔</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Scanner />
          </Modal.Body>
          <Modal.Footer>
            <Button id='closeBtn' onClick={handleShowPossible}>
              <FaTimes size={25} />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
