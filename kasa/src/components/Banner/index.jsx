import React from 'react';
import BannerImg from '../../assets/bannerHome.png'
import BannerImgMobile from '../../assets/bannerHomeMobile.png'

import './style.scss';


const Banner = () => { 
 
    return ( 
        <section>
            <h1>Chez vous, partout et ailleurs</h1>
              <div className='banner__container__img'>
                <div className='banner__darken'></div>
                <img src={BannerImg} alt='Paysage avec vue sur des falaises et la mer' className='banner__img__desktop'/>
                <img src={BannerImgMobile} alt='Paysage avec vue sur des falaises' className='banner__img__mobile'/>
                <div className='banner__img__background'></div>
              </div>
        </section>
    );
};

export default Banner; 