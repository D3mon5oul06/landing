import React from 'react';

function ImageComponent() {
  const imageUrl1 = 'https://upload.wikimedia.org/wikipedia/en/2/23/Civil_War_7.jpg';
  const imageUrl2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuddJ0kf2G1iXBgWxAgAahdzLNi0bgC2vsRw&usqp=CAU'; 
  
  
  
  return (
    <div>
      <h2>Mejores comics</h2>
      <div className="comic-card">
        <img src={imageUrl1} alt="Civil War" />
        <h2>Civil war</h2>
        <p>La trama de la serie sigue una línea de historia en marco en la que el gobierno de los EE. UU. aprueba una Ley de registro de superhéroes, aparentemente diseñada para que los individuos superpoderosos actúen bajo la regulación oficial, algo similar a la aplicación de la ley.</p>
      </div>

      <div className="comic-card">
        <img src={imageUrl2} alt="Secret Wars" />
        <h2>Secret wars</h2>
        <p>La premisa básica de Secret Wars es que una entidad todopoderosa conocida como The Beyonder transporta a un grupo de héroes y villanos a un planeta remoto llamado Battleworld. Estos terrícolas cautivos se ven obligados a luchar para la diversión del Beyonder</p>
      </div>
    </div>
  );
}

export default ImageComponent;
