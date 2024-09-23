import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing social icons

const Footer = () => {
  return (
    <footer className="footer">
      <h2>G Desempenho</h2>
      <p>Inovação e excelência em cada projeto.</p>
      <p>&copy; {new Date().getFullYear()} G Desempenho. Todos os direitos reservados.</p>
      
      <div className="social-icons">
        <Link to="#" title="Facebook"><FaFacebook /></Link>
        <Link to="#" title="Twitter"><FaTwitter /></Link>
        <Link to="#" title="Instagram"><FaInstagram /></Link>
        <Link to="#" title="LinkedIn"><FaLinkedin /></Link>
        <a href="https://github.com/OtavioXimarelli" target="_blank" rel="noopener noreferrer" title="My GitHub">
          <FaGithub />
        </a>
      </div>

      <div className="credits">
        <p>
          Developed by 
          <a href="https://github.com/OtavioXimarelli" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>
            <FaGithub style={{ marginRight: '5px' }} />
            Otavio Ximarelli
          </a>
        </p>
      </div>

      <div className="footer-links">
        <Link to="/about" style={{ margin: '0 10px' }}>Sobre Nós</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contato</Link>
        <Link to="/privacy" style={{ margin: '0 10px' }}>Política de Privacidade</Link>
      </div>
    </footer>
  );
};

export default Footer;
