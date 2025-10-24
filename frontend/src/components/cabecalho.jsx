
import { useState } from 'react';

import { NavLink, Link } from 'react-router';
import logo from '../assets/logo.png';
import './cabecalho.scss';


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/QuemSomos', label: 'Quem Somos' },
  { to: '/reqdoar', label: 'Requisitos' },
  { to: '/ondedoar', label: 'Onde Doar' },
  { to: '/contato', label: 'Contato' },
];

export default function Cabecalho() {
  // Estado para controlar a visibilidade do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link (ótimo para mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // Adiciona a classe 'is-open' dinamicamente para o menu mobile
    <header className={`cabecalho ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="cabecalho__logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo Guia do Sangue - Voltar para a página inicial" />
        </Link>
      </div>

      <nav className="cabecalho__nav">
        <ul className="cabecalho__menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              {/* NavLink adiciona uma classe 'active' automaticamente */}
              <NavLink 
                to={link.to} 
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleLinkClick}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/login" className="cabecalho__btn" onClick={handleLinkClick}>
          Fazer Login
        </Link>
      </nav>

      {/* Botão Hambúrguer para Mobile */}
      <button
        className="cabecalho__toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-nav"
      >
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
      </button>
    </header>
  );
}