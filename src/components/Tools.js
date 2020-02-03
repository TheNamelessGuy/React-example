import React, { Component } from 'react';

import logo from '../logo.svg'
//import './Tools.sass'

class Tools extends Component {

    render() {

        var local_tools = JSON.parse(localStorage.getItem('tools.json'));

        const tool_list = local_tools.tools.map((tools) =>

            <li className="list-group-item d-flex justify-content-between align-items-center">
                {tools.Name}
                <span className="badge badge-primary badge-pill">{tools.Cost} €</span>
            </li>
        );

        return (

            <div className='container'>
                <ul className="list-group">
                    {tool_list}
                </ul>
            </div>
        );
    }
}

export default Tools;
