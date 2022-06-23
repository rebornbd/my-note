import React, { useState, useEffect, useRef } from "react";


export const ClockFn = () => {
  const [date, setDate] = useState(new Date());
  const clearTimeIdRef = useRef(null);

  useEffect(() => {
    const timeId = clearTimeIdRef.current = setInterval(tick, 1000);
    
    return () => {
      // console.log("ClockFn component is unmount", timeId);
      clearInterval(timeId);
    }
  }, []);

  const tick = () => {
    setDate(new Date());
  }

  const handleClock = () => {
    clearInterval(clearTimeIdRef.current);
  }

  return (
    <div className="p-5 border">
      <h2>Functional component</h2>
      <h3>{date.toLocaleTimeString()}</h3>
      <button onClick={handleClock}>STOP CLOCK</button>
    </div>
  )
}
