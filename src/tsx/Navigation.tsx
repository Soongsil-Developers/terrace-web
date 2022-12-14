import "../css/Navigation.css?after";
import { useState } from "react";

function Navigation(): JSX.Element {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  //초기값은 false
  const menu = [
    { name: "F" },
    { name: "room" },
    { name: "check_in_time" },
    { name: "check_out_time" },
  ];

  return (
    <nav className="navigation__wrapper">
      {/* 버거 아이콘 */}
      <div
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }>
        <div className="burger_line1" color="white"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3"></div>
      </div>

      <div className="headerText">
        <p className="headerTextTitle">테라스 예약 시스템</p>
      </div>

      <div
        className={[
          "menu__box",
          !menuToggle ? "menu__box__hidden" : "menu__box__visible", //버튼 모양
        ].join(" ")}>
        <div className="menu__list">
          <p className="Hello">
            <div>
              <div>
                <b>홍길동</b>님
              </div>
              <div>반갑습니다!</div>
            </div>
          </p>
          <hr className="dividingLine" />

          <div className="Use_List">
            <div>
              <b>이용내역</b>
            </div>

            <div className="info">
              <div>{"F3"}</div>
              <div>{"room4"}</div>
              <div>{"2022-09-05"}</div>
              <div>{"12:37~15:37"}</div>
            </div>
          </div>

          <button className="checkOut">퇴실하기</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
