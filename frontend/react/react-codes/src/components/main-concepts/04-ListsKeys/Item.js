import React from "react";


const Item = ({ item="" }) => {
  return (
    <div>
      <span>{item.toLocaleUpperCase()}</span>
    </div>
  )
}

export default Item;
