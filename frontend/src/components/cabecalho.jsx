import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../assets/logo.png';
import './cabecalho.scss';

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false);
  };

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <header className={`cabecalho ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="cabecalho__logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo Guia do Sangue - Voltar para a página inicial" />
        </Link>
      </div>

      <nav className="cabecalho__nav">
        <ul className="cabecalho__menu">
          <li>
            <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Passos" onClick={handleLinkClick}>Passos da doação</NavLink>
          </li>
          <li>
            <NavLink to="/QuemSomos" onClick={handleLinkClick}>Quem Somos</NavLink>
    </li>


          <li className="submenu">
            <button className="submenu__toggle" onClick={toggleSubMenu}>
              Como Doar ▾
            </button>
            {isSubMenuOpen && (
              <ul className="submenu__lista">
                <li><NavLink to="/cuidados" onClick={handleLinkClick}>Cuidados na doação</NavLink></li>
                <li><NavLink to="/menores" onClick={handleLinkClick}>Doação para menores</NavLink></li>
                <li><NavLink to="/pqdoar" onClick={handleLinkClick}>Benefícios de doar</NavLink></li>
                <li><NavLink to="/reqdoar" onClick={handleLinkClick}>Requisitos para doar</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/ondedoar" onClick={handleLinkClick}>Onde Doar</NavLink>
          </li>
        </ul>

        <Link to="/login" className="cabecalho__btn" onClick={handleLinkClick}>
          Fazer Login
        </Link>
      </nav>


      <button
        className="cabecalho__toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
      >
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
      </button>
    </header>
  );
}
