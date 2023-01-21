import React from 'react';
import {useLocation} from 'react-router-dom';

import BannerImg from '../../assets/bannerHome.png'
import BannerImgMobile from '../../assets/bannerHomeMobile.png'
import BannerImgApropos from '../../assets/bannerApropos.png'
import BannerImgAproposMobile from '../../assets/bannerAproposMobile.png'

import './style.scss';


const Banner = () => { 
  let location = useLocation(); 

    return ( 
        <section id={location.pathname === '/' ? 'home__section' : 'apropos__section'}>
            <h1>Chez vous, partout et ailleurs</h1>
              <div className={location.pathname === '/' ? 'container__banner' : 'container__banner__apropos'}>
                <div className='banner__darken'></div>
                <img src={BannerImg} alt='Paysage avec vue sur des falaises et la mer' className={
                  location.pathname === '/' ? 'banner__img__desktop' : 'inactive'} 
                />
                <img src={BannerImgMobile} alt='Paysage avec vue sur des falaises' className={
                  location.pathname === '/' ? 'banner__img__mobile' : 'inactive'}
                  />
                <img src={BannerImgApropos} alt='Paysage avec vue sur des montagnes enneigées' className={
                  location.pathname === '/a-propos' ? 'banner__img__desktop' : 'inactive'} 
                  />
                <img src={BannerImgAproposMobile} alt='Paysage avec vue sur des montagnes enneigées' className={
                  location.pathname === '/a-propos' ? 'banner__img__mobile' : 'inactive'} 
                  />
                <div className='banner__background'></div>
              </div>
        </section>
    );
};

export default Banner; 