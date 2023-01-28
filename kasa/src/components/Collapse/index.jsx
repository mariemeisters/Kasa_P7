import React, { useState } from 'react';
import ArrowCollapse from '../../assets/arrowOpen.png'
import './style.scss'; 

/**
 * Voir si les deux balises ARIA sont ok ou une suffit 
 */
function Collapse(props) {
  const [isClose, setisClose] = useState(true);

  return (
      <section className="collapse">
      <div className="collapse__container">
        <h2 className="collapse__title">{props.collapseTitle}</h2>
        <button className="collapse__button" aria-expanded={!isClose} aria-pressed={!isClose} onClick={() => setisClose(!isClose)}> 
          {isClose ? <img src={ArrowCollapse} alt="flêche pour ouvrir le collapse" className='collapse__arrow--opening'/> 
          : <img src={ArrowCollapse} alt="flêche pour fermer le collapse" className='collapse__arrow--closing'/> }
        </button>
      </div>
      <div className={`collapse__content ${isClose ? 'collapse__hidden' : 'collapse__visible'}`} aria-hidden={isClose}>
        <p>{props.collapseTexte}</p>
      </div>
  </section>
  );
}
export default Collapse;