import React, {Component} from "react";

import {Link} from "react-router-dom";
import InputSuplierForm from "../../containers/forms/InputSuplierForm";

class InputSuplierPage extends Component{
    render(){return (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Input Suplier</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/suplier"><span>Suplier</span></Link></li>
                    <li><span>Tambah Suplier Baru</span></li>
                </ul>
            </nav>
            <div className="col-lg-8 col-lg-offset-2">
                <InputSuplierForm/>
            </div>
        </section>
    )}
}
export default InputSuplierPage