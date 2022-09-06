import React from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";

const Header = () => (
  <div className="Header">
    <text>예약현황</text>
    <div className="headertext">
      <button className="MyPageBtn">
        <FaUser size="20" color="#50b4d2" />
      </button>
    </div>
  </div>
);

export default Header;
