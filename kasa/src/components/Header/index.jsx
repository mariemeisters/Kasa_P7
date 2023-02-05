import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './style.scss';

/**
 * Composant de l'en-tête avec le logo cliquable et une navigation avec deux liens, "Accueil" et "A Propos".
 * Utilise les Hooks "useLocation" pour obtenir l'emplacement actuel de l'utilisateur et "useNavigate" pour la fonction de navigation.
 * Ajoute la classe "active" aux liens de navigation si l'utilisateur se trouve sur la page correspondante.
 * @returns {JSX.Element} 
 */
function Header() { 
    let location = useLocation(); 
    let navigation = useNavigate();
    return ( 
        <header>
                <div className='header__logo' data-testid="header-logo">
                    <Logo onClick={() => navigation("/")} tabIndex="0" onKeyDown={(event) =>{
                        if (event.key === 'Enter') {
                            navigation("/")
                        }}}
                    />
                </div>
                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}> 
                            Accueil
                            </Link>
                        </li>
                        <li><Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}> 
                            A Propos
                            </Link>
                        </li>
                    </ul> 
                </nav>
        </header>
    );
};

export default Header; 