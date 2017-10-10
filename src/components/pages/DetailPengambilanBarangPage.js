import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";
import TableTransaksiBarang from "../../containers/tables/TableTransaksiBarang";
import TextForm from "../forms/TextForm";
import MaskedTextForm from "../forms/MaskedTextForm";

class DetailPengambilanBarangPage extends Component{
    componentDidMount(){
        this.props.clearTableTransaksiBarang()
        this.props.fetchDetailPengambilanBarang({id:this.props.match.params.id});
    }

    render(){console.log(this.props); return (this.props.isLoading)? <Spinner/>: (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Detail Pengambilan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/pengambilan_barang"><span>Pengambilan Barang</span></Link></li>
                    <li><span>{this.props.match.params.id}</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <div className="panel panel-with-borders">
                    <div className="panel-heading">
                        <h3>Detail Pengambilan Barang</h3>
                    </div>
                    <div className="panel-body">
                        <MaskedTextForm 
                            label="Tanggal Pengambilan"
                            mask="00/00/0000"
                            value={this.props.tanggalPengambilan}
                            disabled={true}/>
                        <MaskedTextForm 
                            label="Tanggal Entri"
                            mask="00/00/0000"
                            value={this.props.tanggalEntri}
                            disabled={true}/>
                        <TextForm
                            label="Nama Customer"
                            disabled={true}
                            value={this.props.customer.nama}/>
                        <TextForm
                            label="Nama Checker"
                            disabled={true}
                            value={this.props.checker.nama}/>
                        <TextForm
                            label="Nama Entri"
                            disabled={true}
                            value={this.props.entri.nama}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableTransaksiBarang canDelete={false}/>
                    </div>
                </div>
            </div>
        </section>
    )}
}
DetailPengambilanBarangPage.propTypes = {
    tanggalPengambilan: PropTypes.string.isRequired,
    tanggalEntri: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    checker: PropTypes.object.isRequired,
    entri: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchDetailPengambilanBarang: PropTypes.func.isRequired,
    clearTableTransaksiBarang: PropTypes.func.isRequired
}
DetailPengambilanBarangPage.defaultProps = {
    tanggalPengambilan: "",
    tanggalEntri: "",
    customer: {nama: ""},
    checker: {nama: ""},
    entri: {nama: ""}
}
export default DetailPengambilanBarangPage