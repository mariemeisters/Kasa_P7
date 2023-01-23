import React, { useState } from 'react';
import ArrowCollapse from '../../assets/arrowOpen.png'
import './style.scss'; 


function Collapse(props) {
  const [isClose, setisClose] = useState(true);

  return (
      <section className="collapse">
      <div className="collapse__container">
        <h2 className="collapse__title">{props.collapseTitle}</h2>
        <button className="collapse__button" aria-expanded={isClose} onClick={() => setisClose(!isClose)}>
          {isClose ? <img src={ArrowCollapse} alt="flêche pour ouvrir le collapse" className='collapse__arrow__opening'/> 
          : <img src={ArrowCollapse} alt="flêche pour fermer le collapse" className=''/> }
        </button>
      </div>
      <div className={`collapse__content ${isClose ? 'collapse__hidden' : 'collapse__visible'}`}>
        <p>{props.collapseTexte}</p>
      </div>
  </section>
  );
}
export default Collapse;