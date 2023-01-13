import React from "react";
import Header from '../Header'
/**
 * children = éléments enfants contenus dans le composant 
 */
const Layout =({children}) =>{
    return(
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout