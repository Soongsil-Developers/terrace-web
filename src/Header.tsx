import React from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import MyPageBtn from "./MyPage";
import Navigation from "./Navigation";

const Header = () => (
  <div id="header">
    <div id="headerContents">
      <text id="headerText">테라스 예약 시스템</text>
      {/* <MyPageBtn /> */}
      <Navigation /> 
    </div>
  </div>
);

export default Header;
