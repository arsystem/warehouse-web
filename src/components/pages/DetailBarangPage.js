import React, {Component} from "react";

import {Link} from "react-router-dom";
import UbahBarangForm from "../../containers/forms/UbahBarangForm";

class DetailBarangPage extends Component{
    render(){return (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Detail Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/barang"><span>Barang</span></Link></li>
                    <li><span>{this.props.match.params.barcode}</span></li>
                </ul>
            </nav>
            <div className="col-lg-8 col-lg-offset-2">
                <UbahBarangForm barang={{barcode: this.props.match.params.barcode}}/>
            </div>
        </section>
    )}
}
export default DetailBarangPage;