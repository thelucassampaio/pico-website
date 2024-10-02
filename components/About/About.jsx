import Image from "next/image";

import styles from "./About.module.css";
import TwoColumnSection from "../templates/TwoColumnSection";

const certificates = [
  {
    stampUrl: "/certificates/Selo-ANBIMA-CGE.jpg",
    name: "Certificado CGE",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-ANBIMA-CGA.jpg",
    name: "Certificado CGA",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-ANBIMA-CFG.jpg",
    name: "Certificado CFG",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-ANBIMA-CEA.jpg",
    name: "Certificado CEA",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-ANBIMA-CPA-10.jpg",
    name: "Certificado CPA-10",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-ANBIMA-CPA-20.jpg",
    name: "Certificado CPA-20",
    agency: "ANBIMA",
  },
  {
    stampUrl: "/certificates/Selo-PLANEJAR-CFP.png",
    name: "CFP – Certified Financial Planner",
    agency: "PLANEJAR",
  },
];
{
  /* 
  XXX – Analista Fundamentalista com certificado de competência,
  emitido pela APIMEC
   */
}
const About = () => {
  return (
    <TwoColumnSection
      title="União de profissionais globais do mercado financeiro e jurídico"
      subtitle="Sobre nós"
      paragraph="A Pico nasceu da união de profissionais com atuação em grandes
            instituições financeiras e renomados escritórios de advocacia no
            Brasil e na Europa."
      id="sobre"
    >
      <div className={styles.certifications}>
        <p className={styles.paragraph}>
          Nossa equipe de consultoria financeira detém as seguintes
          certificações:
        </p>

        <div className={styles.stampsList}>
          {certificates.map((certificate) => (
            <Image
              src={certificate.stampUrl}
              width={80}
              height={80}
              style={{ borderRadius: "7px 1px" }}
              alt={`Selo ${certificate.name} - ${certificate.agency}`}
              key={`${certificate.name}-${certificate.agency}-${certificate.stampUrl}`}
            />
          ))}
        </div>
        <br />
        <p className={styles.paragraph}>
          A equipe de planejamento patrimonial é composta por profissionais das
          áreas de Tributário, Societário, Família e Sucessões com mestrado em
          renomadas Faculdades de Direito do Brasil e de Portugal.
        </p>
      </div>
    </TwoColumnSection>
  );
};

export default About;
