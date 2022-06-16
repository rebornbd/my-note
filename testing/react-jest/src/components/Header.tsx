import React, { useState, useEffect } from 'react';

import {
  ThreeDotsIcon,
  NavDrawerIcon,
  ProLogoIcon
} from "../components/Icons";
import styles from "./Header.module.css";


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currPath, setPath] = useState("");

  
  const Logo = () => {
    return (
      <>
        <div
          className={styles.headerLogo}>
          <ProLogoIcon className={styles.headerLogoIcon} />
        </div>
      </>
    )
  };

  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerInnerContainer}>
        <div className={styles.headerICLeft}>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default Header;
