import React, {Component} from "react";

class LeftMenuLogo extends Component{
    render(){return(
        <div className="logo-container">
            <a href="index.html" className="logo">
                <img src="/assets/common/img/logo.png" alt="Toko Sumatra" />
                <img className="logo-inverse" src="/assets/common/img/logo-inverse.png" alt="Toko Sumatra" />
            </a>
        </div>
    )}
}
export default LeftMenuLogo;