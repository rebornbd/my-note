import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div><Link to="/" className={styles.nav}>Home</Link></div>
        <nav className={styles.navs}>
          <Link to="/counter-app" className={styles.nav}>Counter App</Link>
          <Link to="/fetch-data" className={styles.nav}>Fetch Data</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;
