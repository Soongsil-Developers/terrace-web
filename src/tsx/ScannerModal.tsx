import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaQrcode, FaTimes, FaCheckSquare } from "react-icons/fa";
import { QrReader } from "react-qr-reader";
import Timer from "./Timer";
import "../css/ScannerModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QRScannerModal() {
  const videoStyle = {
    display: "flex",
    position: "relative",
  };
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);

  const handleShow = () => setShow(!show);
  const handleCheck = () => setCheck(!check);

  return (
    <>
      <div id="Container">
        <Button id={"openScannerModal"} onClick={handleShow}>
          <FaQrcode id="qrcode" size={40} />
        </Button>
        <Modal
          show={show}
          onHide={handleShow}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>
              <p className="ModalTitle">코드 스캔</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ModalBodyContent">
              <QrReader
                constraints={{ facingMode: "environment" }}
                videoStyle={videoStyle}
                onResult={(result, error) => {
                  if (result) {
                    handleShow();
                    handleCheck();
                  }
                  if (!!error) {
                    console.log(error);
                  }
                }}
                videoContainerStyle={{
                  padding: "20px 0px",
                  display: "flex",
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button id="closeBtn" onClick={handleShow}>
              <FaTimes size={25} />
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={check}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>
              <p className="ModalTitle">입실 확인</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="modalContents">
              <div id="scannerModalBodyTitle">
                테라스 입실이
                <br />
                확인되었습니다.
                <br />
                <br />
                -QR 코드 인증 시간-
                <Timer />
              </div>
              <div id="scannerModalBodyContent">
                <FaCheckSquare size={15} /> 사용 가능 시간은
                <br />
                QR 코드 인증 시간으로부터
                <br /> 1시간입니다.
                <br />
                <FaCheckSquare size={15} /> 시간 연장을 원할 경우
                <br />
                사용 가능 시간 만료 전
                <br /> QR코드를 스캔해 사용중임을
                <br /> 인증하면 됩니다.
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              id="checkBtn"
              onClick={() => {
                setCheck(false);
              }}
            >
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
