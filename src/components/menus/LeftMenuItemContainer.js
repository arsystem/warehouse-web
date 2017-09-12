import React, {Component} from "react";

class LeftMenuItemContainer extends Component{
    render(){return(
        <div className="left-menu-inner scroll-pane">
            <ul className="left-menu-list left-menu-list-root list-unstyled">
                {this.props.children}
            </ul>
        </div>
    )}
}
export default LeftMenuItemContainer;