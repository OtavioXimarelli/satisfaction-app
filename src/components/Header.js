import React from 'react';

const Header = ({ isOpen, setIsOpen, handleMenuClick, menuRef }) => (
  <>
    <div className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Menu">
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
    </div>
    {isOpen && (
      <nav className="dropdown-menu" aria-hidden={!isOpen} ref={menuRef}>
        <ul>
          <li onClick={() => handleMenuClick('about')}>Sobre Nós</li>
          <li onClick={() => handleMenuClick('mission')}>Nossa Missão</li>
          <li onClick={() => handleMenuClick('values')}>Nossos Valores</li>
          <li onClick={() => handleMenuClick('satisfaction')}>Satisfação</li>
        </ul>
      </nav>
    )}
  </>
);

export default Header;
