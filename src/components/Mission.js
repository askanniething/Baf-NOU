import React from 'react';
import './App.css';

function Mission() {
    return (       
        <div className = "mission">
            <div className="rowz row">
            <div className="col-md-6 ">
                    <img src="./images/sewing.jpg" className = "card" alt=""/>
            </div>
            <div className="col-md-6 center">
                <h4>Our Mission</h4>
                <p> SewEasy aims to provide free, easy to use sewing patterns that are custom-made to YOUR measurements! Our convenient interface makes it easy for anyone to use, from beginners to expert seamstresses.
                </p>
            </div>            
        </div>

        <div className="row rowz">
            <div className="col-md-6 center">
                <h4>Combatting Fast Fashion</h4>
                <p> Every year, Americans throw away around 81 pounds of clothing. Moreover, a reported 93% of fast fashion brands aren't paying their garment workers a living wage. At SewEasy, we aim to educate youth about fashion sustainability and sewing your own clothes to combat this 2.56 trillion dollar industry. 
                </p>
            </div>
            <div className="col-md-6">
                <img className = "card" src="./images/landfill.jpg" alt=""/>
            </div>
        </div>

        <div className="row rowz">
            <div className="col-md-6">
                <div className="card">
                    <img src="./images/teaching.jpg" className = "card"alt=""/>
                </div>
            </div>
            <div className="col-md-6 center">
                <h4>Education</h4>
                <p > Beginner seamstresses may be discouraged when their first projects turn out ill-fitting and misshapen. At SewEasy, we generate patterns that are guaranteed to fit! Our straightforward platform makes it easy for anybody to learn how to sew. 
                </p>
            </div>            
        </div>

        <div className="row">
            <div className="col-md-6 center">
                <h4>How it Works</h4>
                <p> Creating sewing patterns with SewEasy is so easy! Simply enter our pattern-generating platform by clicking the "Generate a Pattern!" button. Then, select your desired garment and enter in your measurements. It's that easy to start sewing!
                </p>
            </div>
            <div className="col-md-6">
                <img className = "card" src="./images/pattern.jpg" alt=""/>
            </div>
        </div>
        </div>

        );
    }
    

export default Mission;