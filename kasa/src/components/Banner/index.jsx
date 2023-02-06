import React from 'react';
import './style.scss';

/**
 * Bannière - Composant fonctionnel qui renvoie la section avec ses elements
 *
 * @param {object} elementBanner - Les propriétés du composant
 * @param {string} elementBanner.bannerSection - La valeur de l'attribut id de section
 * @param {string} elementBanner.bannerH1 - Le texte de la bannière
 * @param {string} elementBanner.bannerSrcDesktop - La source de l'image de la bannière desktop
 * @param {string} elementBanner.bannerSrcMobile - La source de l'image de la bannière mobile
 * @param {string} elementBanner.bannerAlt - Le texte alternatif des images de la bannière
 */
function Banner(elementBanner) { 
  return ( 
    <section id={elementBanner.bannerSection} role='banner'> 
        <h1>{elementBanner.bannerH1}</h1>
          <div className='banner__container'>
            <div className='banner__darken' aria-hidden='true'></div>
            <img src={elementBanner.bannerSrcDesktop} alt={elementBanner.bannerAlt} className='banner__img__desktop' />
            <img src={elementBanner.bannerSrcMobile} alt={elementBanner.bannerAlt} className='banner__img__mobile' />
            <div className='banner__background' aria-hidden='true'></div>
          </div>
    </section>  
  )
};

export default Banner;   