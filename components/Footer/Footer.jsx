import Image from "next/image";

import Instagram from "@/utils/icons/Instagram";
import LinkedIn from "@/utils/icons/LinkedIn";
import Phone from "@/utils/icons/Phone";
import Email from "@/utils/icons/Email";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.columns}>
          <div className={styles.company}>
            <Image
              src="/logo-with-text.png"
              width={320}
              height={48}
              alt="Logo da Pico Investimentos"
              className={styles.companyLogo}
            />
            <div className={styles.socialMediaContainer}>
              <a href="/#instagram-link" title="Nosso Instagram">
                <Instagram />
              </a>
              <a href="/#LinkedIn-link" title="Nosso LinkedIn">
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <h3 role="h4">Endereço</h3>
            <p>Av. Brigadeiro Faria Lima, 1234</p>
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
