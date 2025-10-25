import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src="/logo.png" alt="Logo" className="footer-logo" />

          <p className="footer-desc">
            Doe sangue, doe vida! Conectamos você aos hemocentros mais próximos.
          </p>

          <div className="footer-social">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Agendamento</a></li>
            <li><a href="#">Quem pode doar</a></li>
            <li><a href="#">Locais de Doação</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: contato@doasangue.org</p>
          <p>Tel: (21) 99999-9999</p>
        </div>

      </div>

      <div className="footer-copy">
        © 2025 | Todos os direitos reservados
      </div>
    </footer>
  );
}
