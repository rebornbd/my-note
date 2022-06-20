import React from "react";


export const Adult = ({ age=0 }) => {
  return (
    <div className="m-5 p-10 bg-red">
      <p>Your age is {age} and you are Adult.</p>
    </div>
  )
}
