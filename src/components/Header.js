import React from 'react';
import './App.css';

import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <nav className="navbar navbar-expand-md sticky-top">
        <Link className = "navgar-brand" to="/">SewEasy</Link>
        <ul className="navbar-nav ml-auto">
        <Link className = "nav-item nav-link" to="/pattern">Generate a Pattern!</Link>
        </ul>
    </nav>
    );
}

export default Header;
