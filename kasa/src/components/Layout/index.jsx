import React from "react"; 
import Header from '../Header' 
import Footer from "../Footer"; 
/**
 * Composant fonctionnel qui implémente la mise en page générale du site web.
 * Inclue les composants "Header" et "Footer" et injecte les composants enfants de la page à l'emplacement central.
 * @param {JSX.Element} children - Composants enfants au centre - permet une plus grande flexibilité et réutilisabilité du composant
 * @returns {JSX.Element} Mise en page avec l'en-tête et le footer qui englobe les composants
 */
function Layout({children}){ 
    return(
        <>
            <Header /> 
            {children} 
            <Footer /> 
        </>
    )
}

export default Layout;