import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const LoginCheck = async (changeId: any, changePw: any) => {
    try {
      const api = axios.create({ baseURL: "http://52.79.128.20:8080" });
      const result = await api.post("/v1/auth/login", {
        studentId: changeId,
        password: changePw,
      });
      const responseBody = result.data;
      localStorage.setItem("wtw-token", responseBody.accessToken);
      navigate("/MainPage");
    } catch (e: any) {
      alert("회원 정보가 올바르지 않습니다.");
    }
    setLoading(false);
  };
  let windowInnerHeight = 0;
  let vh = 0;

  const handleResize = () => {
    const currentInnerHeight = window.innerHeight;
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

  // ID 값 저장
  const [changeId, setChangeId] = useState();
  const isChangeId = (e: any) => {
    setChangeId(e.target.value);
  };

  // PW 값 저장
  const [changePw, setChangePw] = useState();
  const isChangePw = (e: any) => {
    setChangePw(e.target.value);
  };

  const [loading, setLoading] = useState(false);

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
              onChange={isChangeId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FaLock size="25" color="#A4A4A4" />
            <Form.Control
              // name="password"
              type="password"
              placeholder="Password"
              onChange={isChangePw}
            />
          </Form.Group>
          <div id="loginBtnDiv">
            {loading ? (
              <div id="loginBtn" style={{ backgroundColor: "#b5b5b5" }}>
                <Spinner animation="border" />
              </div>
            ) : (
              <div
                id="loginBtn"
                onClick={() => {
                  LoginCheck(changeId, changePw);
                  setLoading(true);
                }}
              >
                <p id="loginBtnText">로그인</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
