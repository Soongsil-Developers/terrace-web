import React from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import MyPageBtn from "./MyPage";

const Header = () => (
  <div id="header">
    <div id="headerContents">
      <text id="headerText">테라스 예약 시스템</text>
      <MyPageBtn />
    </div>
  </div>
);

export default Header;
