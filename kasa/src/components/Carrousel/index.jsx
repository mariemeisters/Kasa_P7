/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import arrowCarrousel from '../../assets/arrowCarrousel.svg';

import './style.scss';

function Carrousel({gallery}) { // destructuration pour décomposer

    const [slide, setSlide] = useState(0) //var. état > état initial
    const slideNumber = gallery.length 

    function Back() { /*img précédente ou dernière img si 1ere img */
        setSlide(slide === 0 ? slideNumber - 1 : slide - 1)  
    }
    function Next() { /* /*img suivante ou 1ere img si dernière img */
        setSlide(slide ===  slideNumber - 1 ? 0 : slide + 1)
    }
    
    return(
        <figure className="carrousel" role="region" aria-roledescription="Carrousel des photos de la location">
            {slideNumber > 1 ?( // Si + de 1 img : affiche les flèches 
                <>
                <button className="carrousel__previousSlide" onClick={() => Back()}
                aria-label="Image précédente" aria-controls="slides">
                    <img className="carrousel__previousSlide__arrow" src={arrowCarrousel} alt="Précédent" />
                </button>
                <button className="carrousel__nextSlide" onClick={() => Next()}
                aria-label="Image suivante"aria-controls="slides">
                    <img className="carrousel__nextSlide__arrow" src={arrowCarrousel} alt="Suivant" />
                </button>
                <figcaption className="carrousel__number">  
                    {(slide + 1 ) + '/' + gallery.length}
                </figcaption>
                 </>
                ) : null} 

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