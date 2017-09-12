import React, {Component} from "react";

import {Link} from "react-router-dom";

class LeftMenuItem extends Component{
    render(){return (
        <li>
            <Link className="left-menu-link" to={this.props.link}>
                {this.props.title}
            </Link>
        </li>
    )}
}
export default LeftMenuItem;