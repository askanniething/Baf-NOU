import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-popper'

import InputDropdown from './InputDropdown'
import Pattern from './Pattern'

import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

import './Apppage.css';


const options = [
  'Tanktop', 'Skirt','Pants','Face Mask','Sweater'
];

class Apppage extends React.Component {
  constructor() {
      super();
      this.state={
        height:0,
        bust:0,
        waist:0,
        hips:0,
        units: 'cm',
        pattern:-1,
        patternv:false,
      }
      this._onSelectPattern = this._onSelectPattern.bind(this)
      this._onSelectUnit = this._onSelectUnit.bind(this)
      this.onGenerate = this.onGenerate.bind(this)
    
      this.onChangeHeight=this.onChangeHeight.bind(this)
      this.onChangeBust=this.onChangeBust.bind(this)
      this.onChangeWaist=this.onChangeWaist.bind(this)
      this.onChangeHips=this.onChangeHips.bind(this)
   }

   _onSelectPattern (option) {
    this.setState({pattern: options.indexOf(option.value)})
    //console.log(this.state.pattern)
   // console.log('You selected ', options.indexOf(String(option.value)))
    //console.log('You selected ', option)
  }

  _onSelectUnit (option) {
    this.setState({units: option})
  }

  onChangeHeight(e){
    //console.log('You selected ', e.target.value)
    this.setState({height:e.target.value})

  }
  onChangeBust(e){
    this.setState({bust:e.target.value})

  }
  onChangeWaist(e){
    this.setState({waist:e.target.value})

  }
  onChangeHips(e){
    this.setState({hips:e.target.value})

  }

//////////////////////////////
  onGenerate(){

    this.setState({patternv: true})
    
  }
 
  //////////////////////////////
  render() {
    const defaultOptionPattern = this.state.Pattern

    const measurements=['cm','m','in','ft'];

    return (
    <div className = "patterngen">
  <div className="row apppage">

  <div className="col-6 left-card">

      <h1>SewEasy</h1>
      <div className="row">
      <div className="col-6">
      <InputDropdown ide="heightInput" units={this.state.units} label="Height" value={this.state.height} onChange={this.onChangeHeight}  />
      <InputDropdown ide="bustInput" units={this.state.units} label = "Bust" value={this.state.bust} onChange={this.onChangeBust}/>
      <InputDropdown ide="waistInput" units={this.state.units} label = "Waist" value={this.state.waist} onChange={this.onChangeWaist}/>
      <InputDropdown ide="hipsInput" units={this.state.units} label = "Hips" value={this.state.hips} onChange={this.onChangeHips}/>
      </div>

      <div className="col-6">
      <label className="label">Pattern</label>
      <Dropdown className="dropdown" options={options} onChange={this._onSelectPattern} value={options[this.state.pattern]}/>
      <label className="label">Unit</label>
      <Dropdown className="dropdown" options={measurements} onChange={this._onSelectUnit}  value={this.state.units}/>
      
      </div>
      </div>

      <div className="btn-div">
      <button className="generate-btn" onClick={this.onGenerate}>Generate</button>
      </div>

    </div>
    <div className="col-6 right-card">
      
      {this.state.patternv && <Pattern units={this.state.units} index={this.state.pattern} state={this.state}/>}
     
      </div>
      </div>
</div>

    );
  }
}

export default Apppage;