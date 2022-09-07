import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";

export default function ReserveModal(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleReserve = () => {
    setShow(false);
  };

  return (
    <>
      <Button id="openReserveModal" onClick={handleShow}>
        room{props.roomNumber}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <p id="modalTitle">테라스 선택 확인</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span id="modalBody">
            테라스 room{props.roomNumber}을 <br />
            예약하시겠습니까?
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button id="reserveBtn" onClick={handleClose}>
            예약
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
