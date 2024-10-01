import Image from "next/image";

import styles from "./Header.module.css";
import MobileMenu from "./components/MobileMenu";
import {
  menuItems,
  menuItemsLeft,
  menuItemsRight,
} from "@/utils/navigationItems";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={`${styles.headerLinks} ${styles.headerLeft}`}>
        <ul>
          {menuItemsLeft.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.headerLogoContainer}>
        <a href="/" title="Ir para o início">
          <Image
            src="/logo-white.png"
            alt="Logo da Pico Investimentos"
            width={60}
            height={60}
          />
        </a>
      </div>
      <div className={styles.headerLinks}>
        <ul>
          {menuItemsRight.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <MobileMenu items={menuItems} />
    </div>
  );
};

export default Header;
