import React from "react";

import './search-panel.css';

export default class Searching extends React.Component {
  state = {
    patt : ''
  }

  onUpdatePatt = (e) => {
    this.setState({patt : e.target.value});
    this.props.onUpdatePatt(e.target.value);
  }

  render(){
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.patt}
                onChange={this.onUpdatePatt}/>
    );
  }
}

