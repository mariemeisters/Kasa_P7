import React, { useState } from 'react';
import './style.scss'; 


const Collapse = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <section className="collapse__container">
        <div className="collapse__title__container">
          <h2 className="collapse__title">Titre du collapse</h2>
          <button className="collapse__button" aria-expanded={!isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>
        <div className={`collapse__content ${isCollapsed ? 'collapse__hidden' : 'collapse__visible'}`}>
          Contenu à afficher
        </div>
    </section>
  );
}

export default Collapse;