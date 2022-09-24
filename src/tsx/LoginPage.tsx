import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/LoginPage.css";

const LoginPage = () => {
  let windowInnerHeight = 0;
  let vh = 0;

  const handleResize = () => {
    const currentInnerHeight = window.innerHeight;
    console.log(`${currentInnerHeight}/${windowInnerHeight}`);
    if (currentInnerHeight !== windowInnerHeight) {
      windowInnerHeight = currentInnerHeight;
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  };

  handleResize();

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Form>
      <div id="loginPage">
        <div>
          <p id="loginTitle">로그인</p>
        </div>
        <div id="inputLoginInfo">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FaUser size="25" color="#A4A4A4" />
            <Form.Control placeholder="U-Saint ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FaLock size="25" color="#A4A4A4" />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div id="loginBtnDiv">
            <Link to="/MainPage">
              <Button id="loginBtn" variant="primary" type="submit">
                <p id="loginBtnText">로그인</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
