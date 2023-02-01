import React, { useState } from 'react';
import ArrowCollapse from '../../assets/arrowOpen.png'
import './style.scss'; 

/**
 * Voir si les deux balises ARIA sont ok ou une suffit 
 */
function Collapse(props) {
  const [isClose, setisClose] = useState(true);

  return (
    <>
      <div className="composant__collapse">
        <h2 className="composant__collapse__title">{props.collapseTitle}</h2>
        <button className="composant__collapse__button" aria-expanded={!isClose} aria-pressed={!isClose} onClick={() => setisClose(!isClose)}> 
          {isClose ? <img src={ArrowCollapse} alt="flêche pour ouvrir le collapse" className='composant__collapse__arrow--opening'/> 
          : <img src={ArrowCollapse} alt="flêche pour fermer le collapse" className='composant__collapse__arrow--closing'/> }
        </button>
      </div>
      <div className={`composant__collapse__content ${isClose ? 'composant__collapse__hidden' : 'composant__collapse__visible'}`} aria-hidden={isClose}>
        <span>{props.collapseTexte}</span>
      </div> 
    </>
  );
}
export default Collapse;