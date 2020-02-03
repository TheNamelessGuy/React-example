import React, { Component } from 'react';

import logo from '../logo.svg'
import { Redirect } from 'react-router';
//import './AddTools.sass'

class AddTools extends Component {

  constructor() {
    
    super();

    this.state = {
      name: '',
      cost: '',
      redirect: false
    }
  }

  handleNameChange = (e) => {

    this.setState({
      name: e.target.value
    });
  }

  handleCostChange = (e) => {

    this.setState({
      cost: e.target.value
    });
  }

  handleSubmit = event => {

    var tools = JSON.parse(localStorage.getItem('tools.json'));
    let id_counter = 1;

    for (const tool in tools.tools)
      id_counter++;
    
    tools.tools.push({ "id": id_counter, "Name": this.state.name, "Cost": this.state.cost});

    localStorage.setItem('tools.json', JSON.stringify(tools));

    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect)
      return <Redirect to='/tools/list' />

    return (

      <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tool name</label>
                <input type="text" className="form-control" id="ToolName" onChange={this.handleNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tool cost</label>
                <input type="number" step='0.01' className="form-control" id="ToolCost" onChange={this.handleCostChange} />
                <small id="ToolCost" className="form-text text-muted">The currency is in €.</small>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTools;
