import React, { useState } from 'react';
import Apppage from './components/Apppage';
import Home from './components/Home'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About';

function App() {
    
    
    return ( 
        <Router>
        <div className = "App">
            <Header/>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/pattern" component={Apppage}/>
        </div>
        </Router>
    );
    
}




export default App;