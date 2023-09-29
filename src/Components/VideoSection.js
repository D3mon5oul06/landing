import React from 'react';
import YouTube from 'react-youtube';
import './VideoSection.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

function VideoSection() {
  // Opciones del reproductor de YouTube
  const opts = {
    // Ancho y alto iniciales del reproductor (puedes ajustarlos según tus necesidades)
    width: '640',
    height: '390',
    playerVars: {
      autoplay: 1,
    },
  };

  // ID del video de YouTube
  const videoId = 'nAdgJGnBEKc';

  return (
    <section className="video-section">
      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </section>
  );
}

export default VideoSection;
