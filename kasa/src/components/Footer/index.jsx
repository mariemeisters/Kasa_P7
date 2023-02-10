import React from 'react'; 
import { ReactComponent as Logo } from '../../assets/LOGO_footer.svg'; 
import './style.scss'

/**
 * Composant fonctionnel affichant le logo de Kasa et le copyright.
 * @returns {JSX.Element} Footer de la page
 */
function Footer(){  
    return (
        <footer>
            <div className='footer__logo'><Logo /></div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
 
export default Footer; 