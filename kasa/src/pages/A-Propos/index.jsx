import React from "react"; 
import Banner from "../../components/Banner";
import bannerAproposDesktop from '../../assets/bannerApropos.png';
import bannerAproposMobile from '../../assets/bannerAproposMobile.png';
import Collapse from "../../components/Collapse";
import './style.scss';


function APropos() { 
  return (
    <>
      <Banner bannerSection='banner__apropos__section' // Style dans components/Banner// **
        bannerAlt='Paysage avec vue sur des montagnes enneigées'
        bannerSrcDesktop={bannerAproposDesktop}
        bannerSrcMobile={bannerAproposMobile}
      />
      <section className="collapse">
        <Collapse collapseTitle="Fiabilité"
          collapseTexte={<p className="collapse__texte">Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement 
          vérifiées par nos équipes.</p>}
          />
      </section>
      <section className="collapse">
        <Collapse collapseTitle="Respect"
          collapseTexte={<p className="collapse__texte">La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
          une exclusion de notre plateforme.</p>}
          />
      </section>
      
      <section className="collapse">
        <Collapse collapseTitle="Service"
          collapseTexte={<p className="collapse__texte">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
        />
      </section>
      <section className="collapse">
        <Collapse 
          collapseTitle="Sécurité"
          collapseTexte={<p className="collapse__texte">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
          que les standards sont bien respectés. Nous organisons également des ateliers 
          sur la sécurité domestique pour nos hôtes.</p>}
        />
       </section>
      </>
  )
}

export default APropos 