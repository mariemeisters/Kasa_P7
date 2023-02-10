import React from 'react';
import {useParams, Navigate} from "react-router-dom"
import './style.scss';

import dataLogement from "../../data/logement.json"
import Carrousel from "../../components/Carrousel";
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse'

/**
 * L'ID du logement est récupéré via l'URL en utilisant "useParam" et méthode "find()" cherche les données correspondant à l'ID
 * Ajout d'une condition, si l'id ne correspond pas à un logement existant, l'utilisateur est redirigé (avec l'élément "Navigate")
 * Les données récupérées via l'ID du logement sont destructurées permettant d'extraire les propriétés nécessaires 
 * @returns {JSX.Element} Composant page fiche-logement qui utilise les composants nécessaires
 */
function FicheLogement() {
 
    const {id}= useParams() //récupère l'ID du logement via l'url
    const LogementById = dataLogement.find((element) => element.id === id) 

    if (!LogementById) { // si l'id est différente de l'ID de l'url 
        return <Navigate to="/page-inexistante"/> // fait naviguer l'utilisateur vers une page ce qui renvoie à l'utilisateur le composant error. 
     }

     //destructuration affectée à l'objet logementById qui contient les datas selon l'ID
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