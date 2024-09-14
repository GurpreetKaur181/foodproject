import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import image from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={image} alt="Navbar Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/shop" className={styles.navLink}>
            SHOP
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/features" className={styles.navLink}>
            FEATURES
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            CONTACT
          </Link>
        </li>
      </ul>
      <div className={styles.authContainer}>
        <Link to="/login" className={styles.authLink}>
          LOGIN
        </Link>
        <Link to="/register" className={styles.authLink}>
          REGISTER
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
