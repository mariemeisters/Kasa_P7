import React from "react";
import './style.scss';
import starEmpty from "../../assets/starEmptyRating.svg";
import starFull from "../../assets/starFullRating.svg";

/** Evalutation en étoile selon la propiété de ratingLogement
 * qui correspond à la note du logement / 5
 * Etoiles pleines ou vides  déterminé en comparant la valeur rating
 * avec les valeurs dans le tableau starScore
 */

function Rating({ratingLogement}) {
    const starScore = [1, 2, 3, 4, 5]
    const altStarFull = "Etoile pleine"
    const altStarEmpty = "Etoile vide" 

    return (
        <div className="rating">
          {starScore.map(starScore => (
            <img className="rating__star" key={starScore}
              src={ratingLogement >= starScore ? starFull : starEmpty}
              alt={ratingLogement >= starScore ? altStarFull : altStarEmpty}
            />
          ))}
        </div>
      );
}

export default Rating