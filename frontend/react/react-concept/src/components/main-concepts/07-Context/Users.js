import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import User from "./User";


const Users = () => {
  const users = [
    "Rakib",
    "Korim",
    "Rubel"
  ];


  return (
    <ThemeContext.Provider value={themes.dark}>
      {users && users.map(user => (
        <User user={user} key={user} />
      ))}
    </ThemeContext.Provider>
  )
}

export default Users;
