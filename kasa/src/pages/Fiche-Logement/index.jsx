import React from 'react';
import {useParams, Navigate} from "react-router-dom"
import './style.scss';

import dataLogement from "../../data/logement.json"
import Carrousel from "../../components/Carrousel";
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse'

function FicheLogement() {
 
    const {id}= useParams() //récupère l'ID produit de l'url
    const LogementById = dataLogement.find((element) => element.id === id)

    if (!LogementById) { // si l'id est différente de l'ID de l'url 
        return <Navigate to="/error"/>
     }

     //destructuration affectée à l'objet logementById qui contient les datas
    const {title, pictures, description, host, rating, location, equipments, tags} = LogementById 
    return (
        <div className="logement">
            <Carrousel gallery={pictures} />
            <section className='logement__presentation'>
                <div className="logement__titles">
                    <h1 className="logement__titles__title">{title}</h1>
                    <p className="logement__titles__location">{location}</p>
                </div>
                <div className="logement__tags">
                    <Tag dataTag={tags}/>
                </div>
                <div className="logement__details">
                    <div className="logement__details__host">
                        <Host hostLogement={host} />
                    </div>
                    <div className="logement__details__rating">
                        <Rating ratingLogement={rating}/>
                    </div>
                </div>
            </section>
            <section className="logement__collapse">
                <div className='logement__description'>
                    <Collapse collapseTitle="Description" 
                    collapseTexte={<p>{description}</p>}
                    />
                </div>
                <div className='logement__equipement'>
                    <Collapse collapseTitle="Équipements" 
                    collapseTexte={equipments.map((element) => {
                        return (
                            <p key={element}>{element}</p>
                        )
                    })}
                    />
                </div>
            </section>
        </div>
    )
  }


export default FicheLogement; 