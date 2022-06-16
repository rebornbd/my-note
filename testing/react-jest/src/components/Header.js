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

  const Title = () => {
    return (
      <div style={{
        fontSize: '25px',
        fontWeight: 700
      }}>
        React Jest Test
      </div>
    )
  }

  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerInnerContainer}>
        <div className={styles.headerICLeft}>
          <Logo />
          <Title />
        </div>
      </div>
    </header>
  )
}

export default Header;
