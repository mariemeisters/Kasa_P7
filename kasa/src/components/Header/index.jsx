import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './style.scss';


const Header = () => {
    return (
        <header>
                <div className='header__logo'><Logo/></div>
                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/a-propos">A Propos</Link></li>
                    </ul> 
                </nav>
        </header>
    );
};

export default Header;