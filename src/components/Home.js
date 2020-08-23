import React from 'react';
import './App.css';
import About from './About.js';
import Carousel from './Carousel.js';
import Create from './Create.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer.js";
import Mission from "./Mission.js";



function Home() {
    return ( 
      <div className = "App" >
        <About/>
        <div id = "about" className = "scrollspy "><Mission/></div>        
        <div id = "cause" className = "scrollspy"><Carousel/></div>
        <div id = "sew" className = "scrollspy"><Create/></div>
        <div id = "contact" className = "scrollspy"><Footer/></div>
      </div>


    );
}

export default Home;