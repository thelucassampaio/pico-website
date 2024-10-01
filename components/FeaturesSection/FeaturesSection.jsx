import Image from "next/image";
import styles from "./FeaturesSection.module.css";
import SingleColumnSection from "../templates/SingleColumnSection";

const features = [
  {
    iconSrc: "/icons/creative-highlight.png",
    iconAlt: "Uma lâmpada acesa saindo de uma caixa",
    description: `Não nos limitamos a monitorar o mercado financeiro, fornecer
          recomendações de investimento e gerenciar o seu portfólio de ativos`,
  },
  {
    iconSrc: "/icons/balance-highlight.png",
    iconAlt: "Uma balança de dois pesos",
    description: `Diferentemente de outros agentes do mercado financeiro, atuamos
          em conjunto com advogados experientes, que monitoram as frequentes mudanças
          nas normas regulatórias e tributárias que afetam os planejamentos financeiros`,
  },
  {
    iconSrc: "/icons/goals-highlight.png",
    iconAlt: "Um alvo com uma flecha no centro",
    description: `A partir disso, buscamos antecipar eventuais adequações na seleção dos
          melhores ativos, sempre auxiliando os nossos Clientes na avaliação de
          benefícios, custos e riscos`,
  },
  {
    iconSrc: "/icons/validating-ticket-highlight.png",
    iconAlt: "Uma folha com cifrão, escritos e um símbolo de correto",
    description: `Apoiamos os nossos Clientes no cumprimento de suas obrigações fiscais,
          inclusive na apuração de ganhos de capital dentro e fora da bolsa, na
          emissão de guias para pagamento de impostos devidos e na entrega das
          declarações tributárias`,
  },
  {
    iconSrc: "/icons/business-strategy-highlight.png",
    iconAlt:
      "Um peão de xadrez com um gráfico com tendência ascendente ao fundo",
    description: `Com este pensamento estratégico, a Pico coloca você à frente de
          qualquer situação que possa ocorrer`,
  },
];

const FeaturesSection = () => {
  return (
    <SingleColumnSection
      title=" Na Pico atuamos e pensamos de forma diferente"
      subtitle="Nossos Diferenciais"
      id="nossos-diferenciais"
    >
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div
            className={styles.feature}
            key={`${feature.iconSrc}-${feature.iconAlt}-${feature.description}`}
          >
            <div className={styles.featureIcon}>
              <Image
                src={feature.iconSrc}
                alt={feature.iconAlt}
                width={72}
                height={72}
              />
            </div>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </SingleColumnSection>
  );
};

export default FeaturesSection;
