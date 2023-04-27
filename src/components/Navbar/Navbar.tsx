import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar__logo}>SpaceX</h1>
    </div>
  );
};

export default Navbar;
