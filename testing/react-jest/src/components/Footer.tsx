import { IconType } from 'react-icons/lib';
import moment from 'moment';
import React from 'react';

import { Social } from "../components";
import styles from "./Footer.module.css";


const Footer = () => {
  const getCurrentYear = () => {
    return moment().format('YYYY');
  };
  
  
  return (
    <footer className={styles.container}>
      <div className={styles.footerCopyright}>
        Copyright &copy; {getCurrentYear()}
      </div>
      <div className={styles.footerCopyright}>
        Designed &amp; Developed with ♡ by dipta
      </div>
      <Social />
    </footer>
  )
};

export default Footer;
