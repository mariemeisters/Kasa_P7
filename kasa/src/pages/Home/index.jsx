import React from "react"; 
import './style.scss';
import Banner from "../../components/Banner";
import BannerHome from "../../assets/banner_Home.png"
import Card from "../../components/Card";
import Logement from '../../data/logement.json'
/**
 * Redirection="fiche-logement/" +ID via composant Card
 */
function Home() {
  return (
      <>
       <Banner  bannerSection='banner__home__section'
        bannerH1='Chez vous, partout et ailleurs'             
        bannerAlt='Paysage avec vue sur des falaises et la mer'
        bannerSrc = {BannerHome}
       />
      <section className="card__container" role='list' aria-label='Liste des disponibilités'>
       <Card dataCard={Logement}
       redirection="fiche-logement/"/> 
      </section>
      </> 
  )
}

export default Home; 