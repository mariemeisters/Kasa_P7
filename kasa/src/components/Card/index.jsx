import React from 'react';
import { useNavigate } from 'react-router-dom'
import Location from '../../data/logement.json'

import './style.scss'; 


function Card() {
  const data = Location
  const navigation = useNavigate()

  return (
    <section className="background__container__cards">
      {data.map((element) => {
        return (
          <article key={element.id} className="location__card" onClick={() => navigation(`fiche-logement/${element.id}`)}>
            <img src={element.cover} alt='Annonce de logement en location' className='location__card__img'/>
            <div className="location__card__title">
              <h2>{element.title}</h2>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Card;