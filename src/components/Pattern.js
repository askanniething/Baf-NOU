import React, { Component } from 'react';

import data from './data.json'

class Pattern extends React.Component {
  constructor(props) {
	super(props);
   }

  render() {
      //console.log(this.props.index)

    if (this.props.index==-1){
        return(
            <div>
                 </div>
        );
    }
    const items = []
    const measurements=["height","bust","wasit","hips"]
    
    for (var i = 0; i < data.PATTERNS[this.props.index].variables.length; i++) {
        let variable = data.PATTERNS[this.props.index].variables[i]

       // console.log(variable.measurement);
        console.log();
        
        try{
        items.push(
        <div className="col-4 p-element">
        <p>{variable.letter} = {(Math.round((this.props.state[variable.measurement]*variable.ratio*100)))/100}{this.props.units.value||"cm"}
        </p>
        </div>)
        }catch(err){

        }
    } 

    return (

    <div className="pattern">
          <img src={data.PATTERNS[this.props.index].image} className="img-fluid"/>

<div className="row p-measurements">
{items}
</div>
        </div>
    );
  }
}
export default Pattern;