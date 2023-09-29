import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/comics">Cómics</a></li>
        <li><a href="/personajes">Personajes</a></li>
        <li><a href="/acerca-de">Acerca de</a></li>
        {/* Agrega más elementos <li> según tus necesidades */}
      </ul>
    </nav>
  );
}

export default Navigation;
