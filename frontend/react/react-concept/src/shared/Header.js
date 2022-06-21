import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div><Link to="/" className={styles.nav}>Home</Link></div>
        <nav className={styles.navs}>
          <Link to="/main-concepts" className={styles.nav}>Main Concepts</Link>
          <Link to="/advanced" className={styles.nav}>Advanced</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;
