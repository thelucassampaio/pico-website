import Image from "next/image";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <span className={styles.subtitle}>Sobre nós</span>
          <h2 className={styles.title}>
            União de profissionais globais do mercado financeiro e jurídico
          </h2>
          <div className={styles.divider} />
          <p className={styles.paragraph}>
            A Pico nasceu da união de profissionais com atuação em grandes
            instituições financeiras e renomados escritórios de advocacia no
            Brasil e na Europa.
          </p>
        </div>
        <div className={styles.certifications}>
          A nossa equipe de consultoria financeira detém as seguintes
          certificações:
          <div className={styles.stampsList}>
            <Image
              src="/certificates/Selo-ANBIMA-CGA.jpg"
              width={80}
              height={80}
              alt="Selo Certificado ANBIMA CGA"
            />
            <Image
              src="/certificates/Selo-ANBIMA-CGA.jpg"
              width={80}
              height={80}
              alt="Selo Certificado ANBIMA CGA"
            />
            <Image
              src="/certificates/Selo-ANBIMA-CGA.jpg"
              width={80}
              height={80}
              alt="Selo Certificado ANBIMA CGA"
            />
            <Image
              src="/certificates/Selo-ANBIMA-CGA.jpg"
              width={80}
              height={80}
              alt="Selo Certificado ANBIMA CGA"
            />
            <Image
              src="/certificates/Selo-ANBIMA-CGA.jpg"
              width={80}
              height={80}
              alt="Selo Certificado ANBIMA CGA"
            />
          </div>
          {/* CGE – Certificação de Gestores em Produtos Estruturados, emitido pela
          ANBIMA
          <br />
          CGA – Certificação de Gestores em Produtos Não Estruturados, emitido
          pela ANBIMA
          <br />
          CFG – Certificação de Fundamentos em Gestão, emitido pela ANBIMA
          <br />
          CFP – Certified Financial Planner / Certificado internacional de
          planejamento financeiro, emitido pela PLANEJAR
          <br />
          CEA – Certificação de Especialista de Investimentos, emitido pela
          ANBIMA; XXX – Analista Fundamentalista com certificado de competência,
          emitido pela APIMEC
          <br />
          CPA 20 – Profissional CPA 20, emitido pela ANBIMA
          <br />e CPA 10 – Profissional CPA 10, emitido pela ANBIMA. */}
          <br />A nossa equipe de planejamento patrimonial é composta por
          profissionais das áreas de Tributário, Societário, Família e Sucessões
          com mestrado em renomadas Faculdades de Direito do Brasil e de
          Portugal.
        </div>
      </div>
    </section>
  );
};

export default About;
