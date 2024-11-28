import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Cabeçalho */}
      <header className="home-header">
        <h1 className="header-title">Dicas e Informações para Turistas em Brasília</h1>
        <p className="header-description">
          Planeje sua viagem com as melhores dicas para aproveitar ao máximo a capital do Brasil.
        </p>
      </header>

      {/* Introdução */}
      <section className="intro">
        <h2 className="intro-title">Prepare-se para uma viagem inesquecível</h2>
        <p className="intro-text">
          Brasília é uma cidade cheia de história, arquitetura impressionante e muitos pontos turísticos. 
          Aqui estão algumas dicas essenciais para aproveitar sua visita ao máximo.
        </p>
      </section>

      {/* Dicas de Atrações Turísticas */}
      <section className="highlights">
        <h2 className="section-title">Atrações Turísticas Imperdíveis</h2>
        <ul className="highlights-list">
          <li className="highlight-item">
            <strong>Congresso Nacional</strong> - O coração político do Brasil. Aproveite a visita para conhecer mais sobre a política brasileira e a arquitetura de Oscar Niemeyer.
          </li>
          <li className="highlight-item">
            <strong>Palácio da Alvorada</strong> - Residência oficial do Presidente. Aproveite a visita para conhecer a história política da cidade.
          </li>
          <li className="highlight-item">
            <strong>Catedral de Brasília</strong> - Um dos maiores marcos da arquitetura de Niemeyer. Não perca a oportunidade de admirar sua beleza única.
          </li>
          <li className="highlight-item">
            <strong>Parque Nacional de Brasília</strong> - Para quem ama natureza e trilhas. Excelente para caminhadas e piqueniques, e um ótimo lugar para relaxar.
          </li>
          <li className="highlight-item">
            <strong>Memorial JK</strong> - Homenagem ao fundador de Brasília, Juscelino Kubitschek. Um lugar imperdível para entender melhor a história da cidade.
          </li>
        </ul>
      </section>

      {/* Dicas de Transporte */}
      <section className="transport-tips">
        <h2 className="section-title">Dicas de Transporte em Brasília</h2>
        <p className="section-text">
          A cidade possui um sistema de transporte eficiente, mas para aproveitar ao máximo, siga essas dicas:
        </p>
        <ul className="transport-list">
          <li>Utilize o <strong>metrô</strong> para se locomover rapidamente entre os pontos turísticos mais centrais.</li>
          <li>Se você preferir um transporte mais flexível, <strong>táxis</strong> e <strong>aplicativos de transporte</strong> como Uber e 99 são bastante comuns na cidade.</li>
          <li><strong>Aluguel de carro</strong> é uma boa opção para explorar áreas mais afastadas, como o Parque Nacional e outras atrações nos arredores da cidade.</li>
        </ul>
      </section>

      {/* Dicas de Alimentação */}
      <section className="food-tips">
        <h2 className="section-title">Onde Comer em Brasília</h2>
        <p className="section-text">
          A gastronomia de Brasília é rica e variada. Aqui estão algumas dicas para aproveitar o melhor da culinária local:
        </p>
        <ul className="food-list">
          <li><strong>Restaurante Mangai</strong> - Conhecido por sua comida nordestina deliciosa e buffet farto.</li>
          <li><strong>Fogo de Chão</strong> - Para quem adora um bom churrasco, esse é o lugar ideal.</li>
          <li><strong>Feira do Guará</strong> - Ótima opção para quem quer provar comidas típicas e produtos frescos.</li>
        </ul>
      </section>

      {/* Dicas de Cuidados e Segurança */}
      <section className="safety-tips">
        <h2 className="section-title">Cuidados e Segurança</h2>
        <p className="section-text">
          Como em qualquer grande cidade, é importante estar atento à segurança e tomar precauções. Aqui estão algumas dicas para garantir uma viagem tranquila:
        </p>
        <ul className="safety-list">
          <li>Mantenha sempre seus pertences pessoais perto de você, especialmente em áreas turísticas.</li>
          <li>Evite andar sozinho em áreas menos movimentadas à noite.</li>
          <li>Esteja atento aos horários de funcionamento dos pontos turísticos e transporte público para evitar imprevistos.</li>
        </ul>
      </section>

      {/* Rodapé */}
      <footer className="home-footer">
        <p>&copy; 2024 Turismo Brasília. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
