import React, {Component} from "react";

import {Link} from "react-router-dom";

import InputBarangForm from "../../containers/forms/InputBarangForm";

class InputBarangPage extends Component{
    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Input Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/barang"><span>Barang</span></Link></li>
                    <li><span>Tambah Barang Baru</span></li>
                </ul>
            </nav>
            <InputBarangForm/>
        </section>
    )}
}
export default InputBarangPage;