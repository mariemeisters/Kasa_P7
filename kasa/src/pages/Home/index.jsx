import React from "react"; 
import './style.scss';
import Banner from "../../components/Banner";
import bannerHome from '../../assets/bannerHome.png';
import bannerHomeMobile from '../../assets/bannerHomeMobile.png';
import Card from "../../components/Card";
import Logement from '../../data/logement.json'



function Home() {
  return (
      <>
       <Banner  bannerSection='banner__home__section'
        bannerContainer='banner__container'
        bannerImgDesktop='banner__img__desktop'
        bannerImgMobile='banner__img__mobile'
        bannerAlt='Paysage avec vue sur des falaises et la mer'
        bannerSrcDesktop={bannerHome}
        bannerSrcMobile={bannerHomeMobile}
        />
       <Card 
       dataLogement={Logement}
       redirection="fiche-logement/"/>
      </>
  )
}

export default Home