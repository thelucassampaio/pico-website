import Image from "next/image";
import styles from "./FeaturesSection.module.css";
import SingleColumnSection from "../templates/SingleColumnSection";

const FeaturesSection = () => {
  return (
    <SingleColumnSection
      title=" Na Pico atuamos e pensamos de forma diferente"
      subtitle="Nossos Diferenciais"
    >
      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <Image
            src="/icons/creative-highlight.png"
            alt="Uma lâmpada acesa saindo de uma caixa"
            width={72}
            height={72}
          />
          Não nos limitamos a monitorar o mercado financeiro, fornecer
          recomendações de investimento e gerenciar o seu portfólio de ativos
        </div>
        <div className={styles.feature}>
          <Image
            src="/icons/balance-highlight.png"
            alt="Uma balança de dois pesos"
            width={72}
            height={72}
          />
          Diferentemente dos demais agentes do mercado financeiro, atuamos
          conjuntamente com advogados experientes, que monitoram as mudanças
          quase que diárias nas normas regulatórias e tributárias, que afetam os
          planejamentos financeiros
        </div>
        <div className={styles.feature}>
          <Image
            src="/icons/goals-highlight.png"
            alt="Um alvo com uma flecha no centro"
            width={72}
            height={72}
          />
          A partir disso, buscamos antecipar eventuais adequações na seleção dos
          melhores ativos, sempre auxiliando os nossos Clientes na avaliação de
          benefícios, custos e riscos
        </div>
        <div className={styles.feature}>
          <Image
            src="/icons/validating-ticket-highlight.png"
            alt="Uma folha com cifrão, escritos e um símbolo de correto"
            width={72}
            height={72}
          />
          Apoiamos os nossos Clientes no cumprimento de suas obrigações fiscais,
          inclusive na apuração de ganhos de capital dentro e fora da bolsa, na
          emissão de guias para pagamento de impostos devidos e na entrega das
          declarações tributárias
        </div>
        <div className={styles.feature}>
          <Image
            src="/icons/business-strategy-highlight.png"
            alt="Um peão de xadrez com um gráfico com tendência ascendente ao fundo"
            width={72}
            height={72}
          />
          Com este pensamento estratégico, a Pico coloca você à frente de
          qualquer situação que possa ocorrer
        </div>
      </div>
    </SingleColumnSection>
  );
};

export default FeaturesSection;
