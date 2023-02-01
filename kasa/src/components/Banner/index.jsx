import React from 'react';
import './style.scss';

/**Props pour Section (pour gérer le margin), les images et les alt
 * id section : banner__home__section && banner__apropos__section
 */
function Banner(props) { 
  return ( 
    <section id={props.bannerSection} role='banner'> 
        <h1>{props.bannerH1}</h1>
          <div className='banner__container'>
            <div className='banner__darken' aria-hidden='true'></div>
            <img src={props.bannerSrcDesktop} alt={props.bannerAlt} className='banner__img__desktop' />
            <img src={props.bannerSrcMobile} alt={props.bannerAlt} className='banner__img__mobile' />
            <div className='banner__background' aria-hidden='true'></div>
          </div>
    </section>  
  )
};

export default Banner;   