import React from "react"; 
import Banner from "../../components/Banner";
import bannerAproposDesktop from '../../assets/bannerApropos.png';
import bannerAproposMobile from '../../assets/bannerAproposMobile.png';
import Collapse from "../../components/Collapse";

function APropos() { 
  return (
    <>
      <Banner  bannerSection='banner__apropos__section'
        bannerContainer='banner__container'
        bannerImgDesktop='banner__img__desktop'
        bannerImgMobile='banner__img__mobile'
        bannerAlt='Paysage avec vue sur des montagnes enneigées'
        bannerSrcDesktop={bannerAproposDesktop}
        bannerSrcMobile={bannerAproposMobile}
        />
       <Collapse />
      </>
  )
}

export default APropos 