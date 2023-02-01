import React from "react";
import './style.scss';

/**
 * Renvoi le nom et la photo de la personne qui loue son bien
 * hostlogement correspond à "host" dans les datas
 */
function Host({hostLogement}) {
    return (
        <div className="host">
        <p className="host__name">{hostLogement.name}</p>
        <img className="host__picture" src={hostLogement.picture} alt={hostLogement.name}/>
        </div>
    ) 
}

export default Host;