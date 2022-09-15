import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";

export default function ReserveModal(props: any) {
  const [showPossible, setShowPossible] = useState(false);
  const [showImpossible, setShowImpossible] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);
  const [message, setMessage] = useState("room" + props.roomNumber);

  // const handleClose = () => setShowPossible(false);
  const handleShowPossible = () => setShowPossible(!showPossible);
  const handleShowImpossible = () => setShowImpossible(!showImpossible);
  const handleReserve = () => {
    setShowPossible(!showPossible);
    setMessage("사용중");
    setButtonChange(!buttonChange);
  };

  return (
    <>
      <Button
        id={"openModal" + (buttonChange ? "Impossible" : "Possible")}
        onClick={buttonChange ? handleShowImpossible : handleShowPossible}
      >
        <p className="btnMessage">{message}</p>
      </Button>

      <Modal
        id="modal-content"
        show={showPossible}
        onHide={handleShowPossible}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <p className="modalTitle">테라스 선택 확인</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modalBody">
            테라스 room{props.roomNumber}을 <br />
            예약하시겠습니까?
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="cancelBtn"
            variant="secondary"
            onClick={handleShowPossible}
          >
            취소
          </Button>
          <Button id="reserveBtn" onClick={handleReserve}>
            예약
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showImpossible}
        onHide={handleShowPossible}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>
            <p className="modalTitle">테라스 선택 확인</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modalBody">현재 사용중입니다.</span>
        </Modal.Body>
        <Modal.Footer>
          <Button id="okBtn" onClick={handleShowImpossible}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
