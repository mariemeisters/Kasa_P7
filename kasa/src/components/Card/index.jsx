import React from 'react';
import { useNavigate } from 'react-router-dom'
import './style.scss'; 

function Card(props) {
  const navigation = useNavigate()
  try {
    return (
      <section className="card__container" role='list' aria-label='Liste des disponibilités'>
        {props.dataCard.map((element) => {
          return (
            <article key={element.id} className="card__data" onClick={() => navigation(`${props.redirection}${element.id}`)} role='listitem'>
              <img src={element.cover} alt={`${element.title} - ${element.location}.`} className='card__data__img'/>
              <div className="card__data__title">
                <h2>{element.title}</h2>
              </div>
            </article>
          )
        })}
      </section>
    )
  } catch(error) {
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
//  * Personalisation de la balise ALT pour les logements
//  */
// function createAltLocation(title, location, description, equipments, rating) {
//   return (
//   `${title} en ${location}. ${description}. Notation : ${rating} étoiles`
//   )
// }
