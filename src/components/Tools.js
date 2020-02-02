import React, { Component } from 'react';
import tools_json_file from '../database/tools.json';

import logo from '../logo.svg'
//import './Tools.sass'

class Tools extends Component {

    render() {
        
        const tool_list = tools_json_file.tools.map((tools) =>

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
