import React from "react";
import Error from "../../components/Error";
import img404 from "../../assets/404.png"


function Error404() { 
  return (
    <Error 
    errorImg={img404} 
    errorAlt="404 erreur"
    errorH2="Oups! La page que vous demandez n'existe pas."
    redirectionTo='/'
    errorTxt="Retourner sur la page d’accueil"
    />
  )
}

export default Error404 