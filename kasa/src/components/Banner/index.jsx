import React from 'react';
import './style.scss';

function Banner(props) { 

  return ( 
    <section id={props.bannerSection} role='banner'>
        <h1>Chez vous, partout et ailleurs</h1>
          <div className={props.bannerContainer}>
            <div className='banner__darken' aria-hidden='true'></div>
            <img src={props.bannerSrcDesktop} alt={props.bannerAlt} className={props.bannerImgDesktop} />
            <img src={props.bannerSrcMobile} alt={props.bannerAlt} className={props.bannerImgMobile} />
            <div className='banner__background' aria-hidden='true'></div>
          </div>
    </section>
  )
};

export default Banner; 