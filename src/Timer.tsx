import React, { useState } from "react";

import "./Timer.css";

export default function Timer() {
  const [timer, setTimer] = useState("00:00");
  const [date, setDate] = useState("0월0일");

  const currentTimer = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    setTimer(`${hours}:${minutes}`);
    setDate(`${month}월 ${day}일`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <>
      <p className="mainClock">{timer}</p>
      <p className="mainDate">{date}</p>
    </>
  );
}
