import React from "react";
import Header from '../Header'
import Footer from "../Footer";
/**
 * children = éléments enfants contenus dans le composant 
 */
const Layout =({children}) =>{
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout