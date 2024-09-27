import Image from "next/image";
import TwoColumnSection from "../templates/TwoColumnSection";

import styles from "./Approach.module.css";

const details = [
  `Não nos beneficiamos de qualquer tipo de remuneração proveniente de bancos,
    corretoras, gestoras de fundos ou estruturadores de produtos.`,
  `A nossa única fonte de receita é uma taxa mensal pré-acordada sobre a
    carteira do Cliente, o que nos permite atuar sem vieses, escolhendo os
    melhores investimentos.`,
  `Cada Cliente escolhe a corretora com a qual quer trabalhar.`,
  `O nosso fluxo de trabalho começa com uma reunião inicial sem compromisso,
    seguida da coleta dos dados, a partir do que elaboramos um planejamento
    financeiro, a ser implementado e monitorado conforme as nossas 
    recomendações.`,
];

const timeline = [
  {
    order: 0,
    title: "Reunião inicial",
    description: `Nesse primeiro contato, conheceremos seus objetivos e 
    contaremos como podemos lhe ajudar`,
  },
  {
    order: 1,
    title: "Coleta de dados",
    description: `Depois, solicitaremos e analisaremos seus documentos`,
  },
  {
    order: 2,
    title: "Planejamento financeiro",
    description: `Elaboraremos um material personalizado sobre a sua situação 
    patrimonial e as nossas projeções de retorno`,
  },
  {
    order: 3,
    title: "Implementação e monitoramento",
    description: `Com periodicidade, apresentaremos sugestões de aplicações 
      financeiras`,
  },
];

const ApproachDetails = () => {
  return (
    <div className={styles.approachDetailsContainer}>
      {details.map((detail) => (
        <div className={styles.approachDetail} key={detail}>
          <div className={styles.approachIconContainer}>
            <Image src="/icons/check.png" alt="Check" width={40} height={40} />
          </div>
          <p>{detail}</p>
        </div>
      ))}
    </div>
  );
};

const Approach = () => {
  return (
    <TwoColumnSection
      title="Na Pico, atuamos de forma independente e transparente"
      subtitle="Nossa abordagem"
      paragraph={<ApproachDetails />}
    >
      <div className={styles.timelineContainer}>
        {timeline.map((item) => (
          <div className={styles.timelineItem}>
            {item.order !== 0 && (
              <div className={styles.timelineArrow}>
                <Image
                  src="/icons/right-arrow.png"
                  alt="Seta apontando para a direita"
                  width={50}
                  height={50}
                />
              </div>
            )}
            <div className={styles.timelineItemCard} key={item.order}>
              <h3 className={styles.timelineItemCardTitle}>
                {item.order + 1}. {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </TwoColumnSection>
  );
};

export default Approach;
