import React from "react";


export const themes = {
  light: {
    textColor: "#000000",
    bgColor: "#ffffff",
  },
  dark: {
    textColor: "#ffffff",
    bgColor: "#000000",
  }
}

export const ThemeContext = React.createContext(themes.light);
