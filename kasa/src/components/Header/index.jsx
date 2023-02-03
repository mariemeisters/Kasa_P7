import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './style.scss';


const Header = () => { 
    let location = useLocation(); 
    let navigation = useNavigate();
    return ( 
        <header>
                <div className='header__logo'>
                    <Logo onClick={() => navigation("/")} tabindex="0" onKeyDown={(event) =>{
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