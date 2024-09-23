import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header'; // Novo componente
import Footer from './Footer'; // Novo componente
import About from './About'; // Novo componente
import Mission from './Mission'; // Novo componente
import Values from './Values'; // Novo componente
import '../home.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('scroll', closeMenu);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      <div className="container"></div> {/* Added the container div */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} handleMenuClick={handleMenuClick} menuRef={menuRef} />
      <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Bem-vindo à G Desempenho</h1>
        <p className="tagline">Inovação e excelência em cada projeto</p>
        <motion.a // Botão de contato
          href="mailto:gdesempenho@hotmail.com"
          className="button" // Updated class
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entre em Contato
        </motion.a>
      </motion.header>
      <About />
      <Mission />
      <Values />
      <h2>Veja o resultado do nosso trabalho em uma empresa parceira</h2>
      <p>Todos os dados são coletados de forma 100% anônima, garantindo uma pesquisa extremamente precisa e confidencial.</p>
      <motion.div // Botão para o gráfico de satisfação
          className="button" // Updated class
          whileHover={{ scale: 1.05 }}>
          <Link to="/satisfaction" style={{ color: 'white', textDecoration: 'none' }}>Gráfico de Satisfação</Link> {/* Adicionando estilo inline para o link */}
      </motion.div>
      <Footer />
    </div> // Closing the div tag
  );
};

export default Home; // Ensure this line is present
