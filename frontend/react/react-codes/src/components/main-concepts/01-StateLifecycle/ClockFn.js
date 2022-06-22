import React, { useState, useEffect } from "react";


export const ClockFn = () => {
  let timeId = null;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    tick();

    return () => {
      // console.log("ClockFn component is unmount");
      clearInterval(timeId);
    }
  }, [date]);

  const tick = () => {
    timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }

  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  )
}
