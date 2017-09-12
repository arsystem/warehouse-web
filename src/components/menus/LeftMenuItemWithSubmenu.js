import React, {Component} from "react";

class LeftMenuItemWithSubmenu extends Component{
    render(){return (
        <li className="left-menu-list-submenu">
            <a className="left-menu-link" href="javascript: void(0);">
                <i className={`left-menu-link-icon ${this.props.icon}`}></i>
                {this.props.title}
            </a>
            <ul className="left-menu-list list-unstyled">
                {this.props.children}
            </ul>
        </li>
    )}
}
export default LeftMenuItemWithSubmenu;