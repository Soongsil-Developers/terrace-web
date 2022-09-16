import "./Navigation.css?after";
import { useState } from "react";


function Navigation(): JSX.Element {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  //초기값은 false
  const menu = [
    { name: "F" },
    { name: "room" },
    { name: "check_in_time" },
    { name: "check_out_time"},
  ];

  return (
    <nav className="navigation__wrapper">
      
      {/* 버거 아이콘 */}
      <div
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >  
        <div className="burger_line1" color="white"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3" ></div>
      </div>

{/* 헤더 및 타이틀을 여기로 옮겨도 될 듯함 */}
      {/* <div className="header">
        <div className="headerContents">
        <text className="headerText">테라스 예약 시스템</text>
        </div>
      </div> */}
    
      
      <div
        className={[
          "menu__box",
          !menuToggle ? "menu__box__hidden" : "menu__box__visible",//버튼 모양
        ].join(" ")}
      >
        <div className="menu__list">
          <p className="Hello"><b>홍길동</b>님 반갑습니다!</p>
          <hr/>

        <div className="Use_List">
          <div><b>이용내역</b></div>
          <List/>
        </div>
        
          <button className="checkOut">퇴실하기</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;