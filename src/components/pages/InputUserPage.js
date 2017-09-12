import React, {Component} from "react";

import {Link} from "react-router-dom";

import InputUserForm from "../../containers/forms/InputUserForm";

class InputUserPage extends Component{
    render(){return (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Input User</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/user"><span>User</span></Link></li>
                    <li><span>Tambah User Baru</span></li>
                </ul>
            </nav>
            <div className="col-lg-8 col-lg-offset-2">
                <InputUserForm/>
            </div>
        </section>
    )}
}
export default InputUserPage