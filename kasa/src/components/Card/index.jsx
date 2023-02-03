import React from 'react';
import { useNavigate } from 'react-router-dom'
import './style.scss'; 

function Card(props) {
  const navigation = useNavigate()

  try {
    return (
      <>
        {props.dataCard.map((element) => {
          return (
            
            <article key={element.id} className="card__data" onClick={() => navigation(`${props.redirection}${element.id}`)} 
            role='listitem' tabindex="0" onKeyDown={(event) => {
              if (event.key === 'Enter') {
                navigation(`${props.redirection}${element.id}`)
              }}
            }>
                <div id="container__loader">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>
            <span class="dot dot3"></span>
        </div> 
              <img src={element.cover} alt={`${element.title} - ${element.location}.`} className='card__data__img'/>
              <div className="card__data__title">
                <h2>{element.title}</h2>
              </div>
            </article>
          )
        })}
        </>
    )
  } catch(error) { // permets d'identifier plus facilement l'élément qui provoque l'erreur
    console.log(error) 
  }
}

export default Card;

// //------------------------------------------------------------[ LOGEMENT ]-----------------------------------------------------------------//
//  /** si pas d'équipement return aucun */
// function displayEquipment(equipment) {
//   if (equipment.length === 0) {
//     return "Aucun";
//   } else {
//     return equipment;
//   }
// }
// /**

