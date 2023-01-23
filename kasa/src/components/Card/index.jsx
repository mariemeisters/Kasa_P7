import React from 'react';
import { useNavigate } from 'react-router-dom'

import './style.scss'; 

/**
 * 
 */

function Card(props) {
  const navigation = useNavigate()

  try {
    return (
      <section className="card__container">
        {props.dataLogement.map((element) => {
          return (
            <article key={element.id} className="card__location" onClick={() => navigation(`fiche-logement/${props.redirection+element.id}`)}>
              <img src={element.cover} alt='Annonce de logement en location, appartement' className='card__location__img'/>
              <div className="card__location__title">
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