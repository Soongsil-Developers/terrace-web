import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaQrcode, FaTimes } from "react-icons/fa";
import "./ScannerModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Scanner from "./Scanner";
// import Timer from "./Timer";
export default function ScannerModal() {
  const [show, setshow] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);

  const handleshow = () => setshow(!show);

  return (
    <>
      <div id='Container'>
        <Button id={"openScannerModal"} onClick={handleshow}>
          <FaQrcode id='qrcode' size={40} />
        </Button>
        <Modal
          show={show}
          onHide={handleshow}
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header>
            <Modal.Title>
              <p className='ModalTitle'>코드 스캔</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Scanner />
          </Modal.Body>
          <Modal.Footer>
            <Button id='closeBtn' onClick={handleshow}>
              <FaTimes size={25} />
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <Modal>
          <Modal.Header>
            <Modal.Title>
              <p className='ModalTitle'>입실 확인</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className='ModalBody'>
              테라스 room{props.roomNumber} 입실이
              <br />
              확인되었습니다.
            </span>
          </Modal.Body>
        </Modal> */}
      </div>
    </>
  );
}
