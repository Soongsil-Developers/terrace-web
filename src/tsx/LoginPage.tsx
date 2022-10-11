import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginPage.css";

const LoginCheck = () => {
  const navigate = useNavigate();

  fetch("http://52.79.128.20:8080/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      password: "string",
      studentId: "20213111",
    }),
  })
    // .then(response => console.log("response"))
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        localStorage.setItem("wtw-token", response.token);
        navigate("/MainPage");
      } else if (response) {
        alert("회원 정보가 올바르지 않습니다.");
      }
    });
};

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
            <Form.Control
              // name="id"
              placeholder="U-Saint ID"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FaLock size="25" color="#A4A4A4" />
            <Form.Control
              // name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div id="loginBtnDiv">
            {/* <Link to="/MainPage"> */}
            <button id="loginBtn" type="submit" onClick={LoginCheck}>
              <p id="loginBtnText">로그인</p>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
