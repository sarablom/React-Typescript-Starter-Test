import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footer_copyright}>&copy; 2021 Pablos Sportsbar</p>
    </div>
  );
}
