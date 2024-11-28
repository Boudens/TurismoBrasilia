// src/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sobre Brasília</h1>
      <section style={styles.content}>
        <p style={styles.paragraph}>
          Brasília é a capital do Brasil, projetada pelos renomados arquitetos 
          Oscar Niemeyer e Lúcio Costa. Inaugurada em 1960, a cidade foi planejada 
          para promover o desenvolvimento do interior do país e descentralizar a 
          administração federal. Com um design inovador, é um exemplo de arquitetura moderna e urbanismo planejado, sendo considerada 
          Patrimônio Mundial da Humanidade pela UNESCO.
        </p>
        
        <h2 style={styles.subHeading}>Arquitetura e Planejamento Urbano</h2>
        <p style={styles.paragraph}>
          A arquitetura de Brasília é um marco mundial, com projetos icônicos como o 
          Palácio da Alvorada, a Catedral de Brasília, o Congresso Nacional e o 
          Museu Nacional. Cada edifício foi planejado para refletir a modernidade e 
          a funcionalidade, com um forte uso de espaços abertos e formas geométricas.
        </p>

        <h2 style={styles.subHeading}>Pontos Turísticos</h2>
        <p style={styles.paragraph}>
          Além de ser um centro político, Brasília também oferece muitos atrativos 
          turísticos, como a Praça dos Três Poderes, o Lago Paranoá, o Parque da Cidade, 
          e o famoso Congresso Nacional, que é símbolo da cidade. Os visitantes podem 
          explorar as áreas verdes, museus e conhecer a rica história por trás de seus 
          monumentos.
        </p>

        <div style={styles.imageContainer}>
          <img 
            src="https://preview.redd.it/rpu4g28psnob1.jpg?auto=webp&s=5be0a155370519ae9a6ffde96160ef6022082e20" 
            alt="Brasília - Vista aérea" 
            style={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

// Estilos inline
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  content: {
    padding: '1rem 2rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '1.5rem',
  },
  subHeading: {
    fontSize: '1.8rem',
    marginTop: '2rem',
    color: '#2c3e50',
  },
  imageContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  }
};

export default About;
