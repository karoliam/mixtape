import React, { useState } from "react";
import Heart from "react-animated-heart";
import '../css/HeartComponent.css'
export default function HeartComponent() {
  const [isClick, setClick] = useState(false);

  return (
    <div className="heart-link">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        <a
          style={{ visibility: !isClick ? 'hidden' : 'visible', fontFamily: 'sans-serif' }}
          href="https://open.spotify.com/playlist/057oBxY3Rfelag4hTXOadU?si=7b022e59edb74c52"
        >
        <p>Moi Nuppunen! Klikkaa tästä {'<3'}</p>
        </a>
      
    </div>
  );
}
