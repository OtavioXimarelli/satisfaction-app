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
      <Header isOpen={isOpen} setIsOpen={setIsOpen} handleMenuClick={handleMenuClick} menuRef={menuRef} />
      <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Bem-vindo à G Desempenho</h1>
        <p className="tagline">Inovação e excelência em cada projeto</p>
        <Link to="mailto:gdesempenho@hotmail.com" className="cta-button">Entre em Contato</Link>
      </motion.header>
      <About />
      <Mission />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;
