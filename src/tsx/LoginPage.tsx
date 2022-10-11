import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/LoginPage.css";

const LoginCheck = async () => {
  console.log("HERE!12");
  try {
    console.log("HERE!14");
    const api = axios.create({ baseURL: "http://52.79.128.20:8080" });
    const result = await api.post("/v1/auth/login", {
      password: "asdfasdf",
      studentId: "asdfasdf",
    });
    console.log("HERE!25");
    console.log({ result });
    const responseBody = result.data;
    localStorage.setItem("wtw-token", responseBody.accessToken);
    // navigate("/MainPage");
  } catch (e: any) {
    console.error("ASDFASDF");
    console.error({ e });
    alert("회원 정보가 올바르지 않습니다.");
  }
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
            <div id="loginBtn" onClick={LoginCheck}>
              <p id="loginBtnText">로그인</p>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
