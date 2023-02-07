import React, { useState } from 'react';
import ArrowCollapse from '../../assets/arrowOpen.png'
import './style.scss'; 

/**
 * Composant fonctionnel qui implémente le comportement d'un collapse pour masquer et afficher le contenu selon son état.
 * Utilisation du hook "useState" pour gérer l'état de "isClose" et mettre à jour l'affichage.
 * @param {object} contentCollapse - Elements du composant : titre, texte
 * @param {string} contentCollapse.collapseTitle - Titre du collapse
 * @param {string} contentCollapse.ArrowCollapse - Chemin vers l'image utilisée pour le bouton
 * @param {string} contentCollapse.collapseTexte - Texte du collapse
 * @returns {JSX.Element} - Composant Collapse généré dynamiquement selon les données transmises
 */
function Collapse(contentCollapse) {
  const [isClose, setisClose] = useState(true);

  return (
    <>
      <div className="composant__collapse">
        <h2 className="composant__collapse__title">{contentCollapse.collapseTitle}</h2>
        <button className="composant__collapse__button" aria-expanded={!isClose} aria-pressed={!isClose} onClick={() => setisClose(!isClose)}> 
          {isClose ? <img src={ArrowCollapse} alt="flêche pour ouvrir le collapse" className='composant__collapse__arrow--opening'/> 
          : <img src={ArrowCollapse} alt="flêche pour fermer le collapse" className='composant__collapse__arrow--closing'/>}
        </button>
      </div>
      <div className={`composant__collapse__content ${isClose ? 'composant__collapse__hidden' : 'composant__collapse__visible'}`} aria-hidden={isClose}>
        <span>{contentCollapse.collapseTexte}</span>
      </div> 
    </>
  );
}
export default Collapse;