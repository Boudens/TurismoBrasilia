import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sobre Brasília</h1>

      <section style={styles.content}>
        <p style={styles.paragraph}>
          Brasília, projetada pelos renomados arquitetos Oscar Niemeyer e Lúcio Costa, é a capital do Brasil, 
          inaugurada em 1960. A cidade foi planejada para descentralizar a administração do país, promovendo o desenvolvimento do interior 
          e servindo como um símbolo de modernidade. Seu design é um exemplo marcante de arquitetura modernista, 
          sendo reconhecida como Patrimônio Mundial pela UNESCO.
        </p>

        <h2 style={styles.subHeading}>Arquitetura e Planejamento Urbano</h2>
        <p style={styles.paragraph}>
          A arquitetura de Brasília é famosa por seus projetos inovadores e modernos, com ícones como o Palácio da Alvorada, a Catedral de 
          Brasília e o Congresso Nacional. A cidade foi projetada para ter amplos espaços abertos e formas geométricas ousadas, refletindo 
          a modernidade e a funcionalidade em cada detalhe.
        </p>

        <h2 style={styles.subHeading}>Pontos Turísticos</h2>
        <p style={styles.paragraph}>
          Brasília não é apenas um centro administrativo; é também um destino turístico fascinante. A cidade abriga diversos pontos de 
          interesse, como a Praça dos Três Poderes, o Lago Paranoá, o Parque da Cidade e o icônico Congresso Nacional, símbolos da cidade 
          e de sua história.
        </p>

        {/* Imagem */}
        <div style={styles.imageContainer}>
          <img 
            src="https://preview.redd.it/rpu4g28psnob1.jpg?auto=webp&s=5be0a155370519ae9a6ffde96160ef6022082e20" 
            alt="Vista aérea de Brasília" 
            style={styles.image}
          />
        </div>

        <h2 style={styles.subHeading}>História e Cultura</h2>
        <p style={styles.paragraph}>
          Brasília representa uma verdadeira obra de engenharia e arquitetura. Sua construção desafiou as tecnologias da época, e a cidade 
          logo se tornou um símbolo da capacidade de inovação do Brasil. Além disso, Brasília é um centro cultural vibrante, com eventos e 
          festivais de música, arte e gastronomia.
        </p>

        <h2 style={styles.subHeading}>Curiosidades sobre Brasília</h2>
        <ul style={styles.list}>
          <li>A cidade foi projetada para ter o formato de um avião, com o Eixo Monumental representando o corpo e as asas como avenidas principais.</li>
          <li>Brasília é a única cidade do mundo a ser totalmente planejada e construída no século 20, sendo eleita Patrimônio da Humanidade pela UNESCO em 1987.</li>
          <li>A Catedral de Brasília, com suas colunas de concreto, é um dos principais símbolos da cidade e representa as mãos levantadas em oração.</li>
        </ul>

        <h2 style={styles.subHeading}>Outros Pontos Turísticos Imperdíveis</h2>
        <p style={styles.paragraph}>
          Além dos pontos mais conhecidos, como a Catedral e o Congresso Nacional, há outros lugares imperdíveis para os turistas:
        </p>
        <ul style={styles.list}>
          <li><strong>Palácio do Planalto</strong> - Sede do Poder Executivo, na Praça dos Três Poderes, um importante centro político.</li>
          <li><strong>Parque Nacional de Brasília</strong> - Uma vasta área de preservação ambiental, com trilhas e atividades ao ar livre.</li>
          <li><strong>Memorial JK</strong> - Homenagem ao ex-presidente Juscelino Kubitschek, idealizador da construção de Brasília.</li>
          <li><strong>Biblioteca Nacional de Brasília</strong> - Um espaço cultural dedicado à literatura e preservação do conhecimento.</li>
        </ul>

        <div style={styles.imageContainer}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Catedral1_Rodrigo_Marfan.jpg" 
            alt="Catedral de Brasília" 
            style={styles.image}
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Turismo Brasília. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Estilos refinados com animações e melhorias de layout
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: '#2c3e50',
    fontWeight: '600',
  },
  content: {
    padding: '2rem',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  paragraph: {
    marginBottom: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  subHeading: {
    fontSize: '2rem',
    marginTop: '2rem',
    color: '#2980b9',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
  list: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '1.5rem',
    paddingLeft: '20px',
  },
  imageContainer: {
    textAlign: 'center',
    marginTop: '2rem',
    animation: 'fadeIn 1s ease-in',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#7f8c8d',
    marginTop: '3rem',
    fontWeight: '300',
  }
};

export default About;
