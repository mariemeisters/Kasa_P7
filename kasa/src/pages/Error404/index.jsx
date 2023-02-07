import React from "react";
import Error from "../../components/Error";


function Error404() { 
  return (
    <Error 
    errorTxt="Oups! La page que vous demandez n'existe pas."
    errorTxtBreakOne={"Oups! La page que"}
    errorTxtBreakTwo={"vous demandez n'existe pas."}
    redirectionTo='/'
    errorTxtRedirection="Retourner sur la page d’accueil"
    />
  )
}

export default Error404 