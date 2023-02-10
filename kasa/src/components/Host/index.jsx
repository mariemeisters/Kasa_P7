import React from "react"; 
import './style.scss';

/**
 * Composant fonctionnel affichant les information de l'utilisateur ayant posté l'annonce,
 * suite à la destructuration selon l'ID du logement (page fiche-logement)
 * @param {object} hostLogement - Element du composant : nom et photo de l'hôte
 * @param {string} hostLogement.name - Nom de l'hôte
 * @param {string} hostLogement.picture - Chemin vers la photo de l'hôte
 * @returns {JSX.Element} Composant Host généré dynamiquement selon les données  
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