import Image from "next/image";
import styles from "./Footer.module.css";
import { menuItems } from "@/utils/navigationItems";
import Instagram from "@/utils/icons/Instagram";
import LinkedIn from "@/utils/icons/LinkedIn";
import Phone from "@/utils/icons/Phone";
import Email from "@/utils/icons/Email";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.columns}>
          <div className={styles.company}>
            <Image
              src="/logo-white.png"
              width={100}
              height={100}
              priority
              alt="Logo da Pico Investimentos"
              className={styles.logo}
            />
            <h1 role="h3">Pico Investimentos</h1>
            <div className={styles.socialMediaContainer}>
              <a href="/#instagram-link" title="Nosso Instagram">
                <Instagram />
              </a>
              <a href="/#LinkedIn-link" title="Nosso LinkedIn">
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className={styles.links}>
            <h3 role="h4">Links</h3>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.info}>
            <h3 role="h4">Endereço</h3>
            <p>Av. Faria Lima, 1234</p>
            <div>
              <div className={styles.infoWithIcon}>
                <Phone />
                (11) 98765-4321
              </div>
              <div className={styles.infoWithIcon}>
                <Email />
                pico@investimentos.com.br
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>&copy;</span> 2024 &bull; Pico Investimentos LTDA &bull; CNPJ
          12.345.678/0001-90
        </div>
      </div>
    </footer>
  );
};

export default Footer;
