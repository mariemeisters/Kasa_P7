/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import arrowCarrousel from '../../assets/arrowCarrousel.svg';

import './style.scss';

/**
 * Composant React qui affiche une gallery d'images en formant un carrousel. 
 * "useState" pour définir un état interne "slide" qui indique la position de l'image affichée actuellement (initial de 0).
 * "slideTotal" définit le nombre total d'images dans la galerie, "Back" et "Next" permettent de faire défiler les images avec condition. 
 * L'affichage des flèches pour naviguer dans la galerie n'apparaît que si le nombre d'images est supérieur à 1. 
 * @returns {JSX.Element} Composant Carrousel généré dynamiquement en fonction des données transmises suite à la destructuration selon l'ID du logement (page fiche-logement)
 */
function Carrousel({gallery}) { // destructuration pour décomposer

    const [slide, setSlide] = useState(0) //var. état > état initial 
    const slideTotal = gallery.length // vigileance : exemple pour 5 img => [0,1,2,3,4] soit slide 4 = image 5

    const Back = () => { //permets de faire défiler les images vers la gauche en diminuant la valeur de "slide". 
        setSlide(slide === 0 ? slideTotal - 1 : slide - 1) // change la valeur du compteur slide (-1). Si = 0 alors renvoie à la derniere image (longeur tableau - 1 index) 
    }
    const Next = () => { //permets de faire défiler les images vers la droite en augmentant la valeur de "slide". 
        setSlide(slide ===  slideTotal - 1 ? 0 : slide + 1) // change la valeur du compteur slide (+1). Si = à la longeur du tableau -1 (index) renvoie à l'index 0 (1ere img)
    }
    
    return(
        <figure className="carrousel" role="region" aria-roledescription="Carrousel des photos de la location">
            {slideTotal > 1 ? ( // affichage conditionnel à la volée si + d'un élément (flèches de la gallerie) 
                <>
                <button className="carrousel__previousSlide" aria-label="Image précédente" aria-controls="slides"
                onClick={(element) => Back(element)}>
                    <img className="carrousel__previousSlide__arrow" src={arrowCarrousel} alt="Précédent" />
                </button>
                <button className="carrousel__nextSlide" aria-label="Image suivante"aria-controls="slides"
                onClick={(element) => Next(element)}>
                    <img className="carrousel__nextSlide__arrow" src={arrowCarrousel} alt="Suivant" />
                </button>
                <figcaption className="carrousel__number">  
                    {(slide + 1 ) + '/' + gallery.length}
                </figcaption>
                    </>
            ) 
            : null} 
        
            {gallery.map((img, slidePosition) => {
                return ( 
                    <div className={slidePosition === slide ? "carrousel__content" 
                    : "carrousel__content--off"} key={slidePosition}>
                        {slidePosition === slide &&
                            <img className="carrousel__content__image" src={img} alt={`Image ${slidePosition + 1} du carrousel`}/>
                        }
                    </div>
                )
            })}       
        </figure>
    )         
}

export default Carrousel;