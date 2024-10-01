import Image from "next/image";

import styles from "./Header.module.css";
import MobileMenu from "./components/MobileMenu";

const menuItemsLeft = [
  {
    title: "Sobre",
    href: "/#sobre",
  },
  {
    title: "Diferenciais",
    href: "/#nossos-diferenciais",
  },
  {
    title: "Abordagem",
    href: "/#nossa-abordagem",
  },
];

const menuItemsRight = [
  {
    title: "Insights",
    href: "/#insights",
  },
  {
    title: "Contato",
    href: "/#contato",
  },
  {
    title: "Simulação",
    href: "/#simulacao",
  },
];

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
      <MobileMenu items={[...menuItemsLeft, ...menuItemsRight]} />
    </div>
  );
};

export default Header;
