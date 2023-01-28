import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './style.scss';


const Header = () => { 
    let location = useLocation(); 

    return ( 
        <header>
                <div className='header__logo'><Logo/></div>
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