import React, {Component} from "react";
import PropTypes from "prop-types";

import CariNamaBarangModal from "../../containers/modals/CariNamaBarangModal";
import CariBarcodeModal from "../../containers/modals/CariBarcodeModal";
import TableBarang from "../../containers/tables/TableBarang";

class LihatBarangPage extends Component{
    componentDidMount(){
        window.$(document).keydown(e => {
            if(e.keyCode === 112){
                e.preventDefault()
                this.props.onCariNamaClick()
            }else if(e.keyCode === 113){
                e.preventDefault()
                this.props.onCariBarcodeClick()
            }
        })
    }

    render(){return (
        <section>
            <nav className="top-submenu top-submenu-with-background">
                <h3>Lihat Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Barang</span></li>
                </ul>
            </nav>
            <div className="col-lg-12" style={{marginBottom: 10}}>
                <button className="btn btn-default" style={{marginRight:10}} onClick={this.props.onCariNamaClick}>F1 Cari Nama Barang</button>
                <button className="btn btn-default" onClick={this.props.onCariBarcodeClick}>F2 Cari Barcode</button>
            </div>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableBarang/>
                    </div>
                </div>
            </div>
            <CariNamaBarangModal/>
            <CariBarcodeModal/>
        </section>
    )}
}
LihatBarangPage.propTypes = {
    onCariNamaClick: PropTypes.func.isRequired,
    onCariBarcodeClick: PropTypes.func.isRequired
}
export default LihatBarangPage