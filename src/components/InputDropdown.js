
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

class NAMEGOESHERE extends React.Component {
  constructor(props) {
	super(props);
   }

  render() {


    return (
        <div className="apppage">
            <label className="label">{this.props.label}</label>
        <div className="input-group">

<input id = {this.props.ide} type="text" className="form-control input" aria-label="Text input with dropdown button" placeholder={this.props.value} onChange={this.props.onChange} />
<div className="input-group-append">
<span className="input-group-text append">{this.props.units.value||"cm"}</span>
</div>
</div>
</div>

    
    );
  }
}

export default NAMEGOESHERE;