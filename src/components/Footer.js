import React from 'react';
import './App.css';

function Footer() {
    return ( 
        <div className = "footer">
        <h3> &copy; SewEasy 2020</h3>
        <a href="https://devpost.com/software/seweasy" class = "btn btnfoot"><i class="fas fa-globe"></i></a>
        <a href="https://github.com/askanniething/IgnitionHacks" class = "btn btnfoot"><i class="fab fa-github"></i></a>
    </div>
    );
}

export default Footer;