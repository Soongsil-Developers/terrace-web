import React, { useEffect, useState } from "react";

import "../css/Timer.css";

export default function Timer() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mainClock">
      <div className="Clock">{timer.toLocaleTimeString([], {})}</div>
      <div className="Date">
        {timer.toLocaleDateString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          weekday: "narrow",
        })}
      </div>
    </div>
  );
}
