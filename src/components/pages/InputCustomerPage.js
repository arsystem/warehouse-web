import React, {Component} from "react";

import {Link} from "react-router-dom";
import InputCustomerForm from "../../containers/forms/InputCustomerForm";

class InputCustomerPage extends Component{
    render(){return (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Tambah Customer Baru</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/customer"><span>Customer</span></Link></li>
                    <li><span>Tambah Customer Baru</span></li>
                </ul>
            </nav>            
            <div className="col-lg-8 col-lg-offset-2">
                <InputCustomerForm/>
            </div>
        </section>
    )}
}
export default InputCustomerPage;