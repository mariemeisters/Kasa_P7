import React from 'react';
import { useNavigate } from 'react-router-dom'

import Loader from '../Loader';
import './style.scss'; 

/**
 * Card : composant pour afficher sous forme de carte chaque élément de data.dataCard en utilisant la méthode map
 * Gère les interactions avec les event "onClick" et "onKeyDown" pour appeler la fonction de navigation construite en passant l'URL
 * (construite avec data.redirection + ID de l'élément) + ajout d'un composant Loader pour le chargement
 * @param {object} data - Elements du composant 
 * @param {object} data.dataCard - Données du tableau utilisées pour afficher les éléments de la carte
 * @param {Function} data.redirection - Gere la navigation entre les pages
 * @returns {JSX.Element} carte générée dynamiquement en fonction des données transmises 
 */ 
function Card(data) {
  const navigation = useNavigate()

  try {
    return (
      <>
        {data.dataCard.map((element) => {
          return (
            <article key={element.id} className="card__data" onClick={() => navigation(`${data.redirection}${element.id}`)} 
            role='listitem' tabIndex="0" onKeyDown={(event) => {
              if (event.key === 'Enter') {
                navigation(`${data.redirection}${element.id}`)
              }}
            }>
              <Loader /> 
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

