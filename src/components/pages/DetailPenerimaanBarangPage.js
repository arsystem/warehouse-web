import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Spinner from "react-spinner";
import TableTransaksiBarang from "../../containers/tables/TableTransaksiBarang";
import TextForm from "../forms/TextForm";
import MaskedTextForm from "../forms/MaskedTextForm";

class DetailPenerimaanBarangPage extends Component{
    componentDidMount(){
        this.props.clearTableTransaksiBarang()
        this.props.fetchDetailPenerimaanBarang({id:this.props.match.params.id});
    }

    render(){return (this.props.isLoading)? <Spinner/>: (
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Detail Penerimaan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><Link to="/penerimaan_barang"><span>Penerimaan Barang</span></Link></li>
                    <li><span>{this.props.match.params.id}</span></li>
                </ul>
            </nav>
            <div className="col-lg-12">
                <div className="panel panel-with-borders">
                    <div className="panel-heading">
                        <h3>Detail Penerimaan Barang</h3>
                    </div>
                    <div className="panel-body">
                        <MaskedTextForm 
                            label="Tanggal Penerimaan"
                            mask="00/00/0000"
                            value={this.props.tanggalPenerimaan}
                            disabled={true}/>
                        <MaskedTextForm 
                            label="Tanggal Entri"
                            mask="00/00/0000"
                            value={this.props.tanggalEntri}
                            disabled={true}/>
                        <TextForm
                            label="Nama Suplier"
                            disabled={true}
                            value={this.props.suplier.nama}/>
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
DetailPenerimaanBarangPage.propTypes = {
    tanggalPenerimaan: PropTypes.string.isRequired,
    tanggalEntri: PropTypes.string.isRequired,
    suplier: PropTypes.object.isRequired,
    checker: PropTypes.object.isRequired,
    entri: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchDetailPenerimaanBarang: PropTypes.func.isRequired,
    clearTableTransaksiBarang: PropTypes.func.isRequired
}
DetailPenerimaanBarangPage.defaultProps = {
    tanggalPenerimaan: "",
    tanggalEntri: "",
    suplier: {nama: ""},
    checker: {nama: ""},
    entri: {nama: ""}
}
export default DetailPenerimaanBarangPage