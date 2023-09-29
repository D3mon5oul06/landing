import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-gray">
      <h1>Comic Land</h1>
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuJtN8EaKLd4neNe6aD2uemnhqzkDRKa8Og&usqp=CAU"
       alt="Logo de Comics"
       id="Logo" // Añade el ID "Logo" aquí
/>
    </header>
  );
}

export default Header;
