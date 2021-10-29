import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <ul className={styles.headerContainer}>
      <Link to="/" className="navigation__link">
        <li className={styles.linkStyle}>Home</li>
      </Link>
      <Link to="/sports" className={styles.linkStyle}>
        <li className="navigation__link__item">Sports</li>
      </Link>
      <Link to="/dishes" className={styles.linkStyle}>
        <li className="navigation__link__item">Dishes</li>
      </Link>
    </ul>
  );
};
