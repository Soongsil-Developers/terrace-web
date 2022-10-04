import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CheckoutModal.css";

export default function CheckoutModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="Checkout">
        <Button id={"CheckoutBtn"} onClick={handleShow}>
          퇴실
        </Button>
        <Modal
          show={show}
          onHide={handleShow}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header>
            <Modal.Title>
              <p className="modalTitle">테라스 퇴실 확인</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className="modalBody">테라스를 퇴실하시겠습니까?</span>
          </Modal.Body>
          <Modal.Footer>
            <Button id="CheckoutOKBtn" onClick={handleShow}>
              퇴실
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
