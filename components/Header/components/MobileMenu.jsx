"use client";

import { useState } from "react";
import styles from "../Header.module.css";

const MobileMenu = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <span
        className={`${open && styles.menuOpen} ${styles.menuButton}`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`${open && styles.menuOpen} ${styles.menuContainer}`}
        aria-hidden={!open}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
