import React from "react"; 
import { Link } from 'react-router-dom';
import './style.scss';

/**
 * Error : composant fonctionnel pour afficher la page d'erreur en cas d'erreur de navigation.
 * Gère l'affichage d'une image ainsi qu'un message d'erreur avec le lien de redirection vers la page d'accueil.
 * @param {object} error404 - Elements du composant
 * @param {string} error404.errorImg - Chemin vers l'image utilisée sur la page d'erreur
 * @param {string} error404.errorAlt - Texte alternatif décrivant l'image utilisée pour la page d'erreur
 * @param {string} error404.errorH2 - Message d'erreur affiché sur la page
 * @param {string} error404.errorTxt - Texte affiché sur le lien de redirection
 * @param {string} error404.redirectionTo - l'URL de redirection en cliquant sur le lien (home)
 * @returns {JSX.Element} carte générée dynamiquement en fonction des données transmises 
 */
function Error(error404) {
    return (
        <section className="error">
            <img src={error404.errorImg} alt={error404.errorAlt} className="error__img"/>
            <h2>{error404.errorH2}</h2>
            <Link to={error404.redirectionTo} className="error__backhome" aria-label="Retour">{error404.errorTxt}</Link>
        </section>
    )
 }
 
export default Error;

