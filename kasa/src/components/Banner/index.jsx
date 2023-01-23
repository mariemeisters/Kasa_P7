import React from 'react';


import './style.scss';


function Banner(props) { 

  return ( 
    <section id={props.bannerSection}>
        <h1>Chez vous, partout et ailleurs</h1>
          <div className={props.bannerContainer}>
            <div className='banner__darken'></div>
            <img src={props.bannerSrcDesktop} alt={props.bannerAlt} className={props.bannerImgDesktop} />
            <img src={props.bannerSrcMobile} alt={props.bannerAlt} className={props.bannerImgMobile} />
            <div className='banner__background'></div>
          </div>
    </section>
  )
};

export default Banner; 