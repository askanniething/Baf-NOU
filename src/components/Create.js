import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Create() {
    return ( 
        <div className = "create">
            <h2>Create With Us!</h2>
            <p>Click the button below to start generating sewing patterns!</p>
            <div className = "centerbutton">
            <Link className = "btn generate-btn" to="/pattern">Generate a pattern!</Link>
            </div>
        </div>

    );
    
}


export default Create;