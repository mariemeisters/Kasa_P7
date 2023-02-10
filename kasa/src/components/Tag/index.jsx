import React from "react"; 
import './style.scss';

/**
 * Composant fonctionnel qui renvoie une liste non ordonnée (ul) contenant des éléments de liste (li) pour chaque élément de la propriété "dataTag".
 * La propriété `dataTag` est déclarée sur la page fiche-logement suite à la destructuration affectée à l'objet logementById.
 * @param {object} tagLogement 
 * @returns {JSX.Element} Retourne une liste (ul) contenant des (li) pour chaque élément de dataTag
 */
function Tag(tagLogement) {
    return (
        <ul className="container__tag">
            {tagLogement.dataTag.map((element) => {
                return (
                    <li className="tag__logement" key={element}>{element}</li>
                )})
            }
        </ul>
    )
}

export default Tag; 