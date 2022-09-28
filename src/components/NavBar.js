import React from 'react';
import '../styles/styles.css';
import Logo from '../images/imgLogo.png';

function NavBar() {
    return (
        <nav className="navbar">
           <img className="navbar-logo" src={Logo} alt="airbnb logo"/>
        </nav>
    )
}

export default NavBar;