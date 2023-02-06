import React from "react";
import './style.scss';
import starEmpty from "../../assets/starEmptyRating.svg";
import starFull from "../../assets/starFullRating.svg";

/** 
 * Composant fonctionnel pour l'affichage des étoiles pour représenter la note du logement (suite à la destructuration affectée à l'objet logementById).
 * Méthode map : itére sur un tableau de nombres (1 à 5) pour générer les étoiles selon la note du logement.
 * Si la note du logement est supérieure ou égale au score par index du tableau [1,2,3,4,5] 
 * -> étoile pleine, sinon -> étoile vide 
 * 
 * @param {object} ratingLogement -  Note du logement sélectionné
 * @returns {JSX.Element} Composant Rating qui représente les images d'étoiles générées dynamiquement selon la note du logement.
 */
function Rating({ratingLogement}) {
    const score = [1, 2, 3, 4, 5]
    const altStarFull = "Etoile pleine"
    const altStarEmpty = "Etoile vide" 

    return ( 
        <div className="rating">
          {score.map(starScore => (
            <img className="rating__star" key={starScore}
              src={ratingLogement >= starScore ? starFull : starEmpty}
              alt={ratingLogement >= starScore ? altStarFull : altStarEmpty}
            />
          ))}
        </div>
      );
}

export default Rating