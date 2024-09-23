import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaUsers, FaLeaf } from 'react-icons/fa';
import '../home.css';
import { p } from 'framer-motion/client';

const Home = () => {
  return (
    <div className="home">
      <motion.header 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Bem-vindo à G Desempenho</h1>
        <p className="tagline">Inovação e excelência em cada projeto</p>
        <Link to="mailto:gdesempenho@hotmail.com" className="cta-button">Entre em Contato</Link>

      </motion.header>
      
      <section className="about-mission">
        <div className="container">
          <div className="about">
            <h2>Sobre Nós</h2>
            <p>Somos uma empresa inovadora focada em criar soluções que fazem a diferença no mundo dos negócios e da tecnologia.</p>
          </div>
          <div className="mission">
            <h2>Nossa Missão</h2>
            <p>Transformar ideias em realidade, impulsionando o sucesso de nossos clientes e colaboradores através de soluções criativas e eficientes.</p>
          </div>
        </div>
      </section>
      
      <section className="values">
        <div className="container">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <ValueItem icon={<FaLightbulb />} title="Inovação" items={['Criatividade e novas soluções', 'Agregação de valor aos clientes']} />
            <ValueItem icon={<FaHandshake />} title="Transparência" items={['Comunicação aberta e honesta', 'Relacionamento com colaboradores e clientes']} />
            <ValueItem icon={<FaUsers />} title="Colaboração" items={['Importância do trabalho em equipe', 'Desenvolvimento de soluções eficazes']} />
            <ValueItem icon={<FaLeaf />} title="Sustentabilidade" items={['Práticas benéficas para clientes', 'Respeito ao meio ambiente e sociedade']} />
          </div>
        </div>
      </section>
      
      <section className="satisfaction">
        <div className="container">
          <h2>Veja o resultado da implementação de nossos serviços em nossos parceiros</h2>
          <p>Nosssa pesquisa foi desenvolvida para ajudar nossos cliente como melhorar a satisfação e o rendimento de suas equipes</p>
          <Link to="/satisfaction" className="secondary-button">Ver Gráfico de Satisfação</Link>
        </div>
      </section>
    </div>
  );
};

const ValueItem = ({ icon, title, items }) => (
  <div className="value-item">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Home;
