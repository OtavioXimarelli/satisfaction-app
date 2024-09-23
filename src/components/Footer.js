import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <p>Developed by Otávio Ximarelli</p>
    <a href="https://github.com/OtavioXimarelli" target="_blank" rel="noopener noreferrer">
      <FaGithub style={{ marginRight: '5px' }} />
      My GitHub
    </a>
  </footer>
);

export default Footer;
