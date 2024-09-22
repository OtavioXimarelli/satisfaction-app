import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Bem-vindo à G Desempenho</h1>
        <p className="tagline">Inovação e excelência em cada projeto</p>
      </header>
      
      <section className="about">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa inovadora focada em criar soluções que fazem a diferença no mundo dos negócios e da tecnologia.</p>
      </section>
      
      <section className="mission">
        <h2>Nossa Missão</h2>
        <p>Transformar ideias em realidade, impulsionando o sucesso de nossos clientes e colaboradores através de soluções criativas e eficientes.</p>
      </section>
      
      <section className="values">
        <h2>Nossos Valores</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Inovação</h3>
            <ul>
              <li>Criatividade e novas soluções</li>
              <li>Agregação de valor aos clientes</li>
            </ul>
          </div>
          <div className="value-item">
            <h3>Transparência</h3>
            <ul>
              <li>Comunicação aberta e honesta</li>
              <li>Relacionamento com colaboradores e clientes</li>
            </ul>
          </div>
          <div className="value-item">
            <h3>Colaboração</h3>
            <ul>
              <li>Importância do trabalho em equipe</li>
              <li>Desenvolvimento de soluções eficazes</li>
            </ul>
          </div>
          <div className="value-item">
            <h3>Sustentabilidade</h3>
            <ul>
              <li>Práticas benéficas para clientes</li>
              <li>Respeito ao meio ambiente e sociedade</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="satisfaction">
        <h2>Satisfação dos nosso clientes</h2>
        <p>Valorizamos o bem-estar e a satisfação de nossos clientes. Nossa cultura empresarial é baseada no respeito mútuo e no crescimento profissional.</p>
        <Link to="/satisfaction" className="cta-button">Ver Gráfico de Satisfação</Link>
      </section>
    </div>
  );
};

export default Home;
