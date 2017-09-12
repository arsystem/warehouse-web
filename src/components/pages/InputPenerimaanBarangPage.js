import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TableTransaksiBarang from "../../containers/tables/TableTransaksiBarang";
import TambahTransaksiBarangModal from "../../containers/modals/TambahTransaksiBarangModal";
import DetailPenerimaanBarangForm from "../../containers/forms/DetailPenerimaanBarangForm";

class InputPenerimaanBarangPage extends Component{
    componentDidMount(){
        window.$(document).keydown(e => {
            if(e.keyCode === 112){
                e.preventDefault()
                this.props.onTambahBarangClick()
            }else if(e.keyCode === 121){
                e.preventDefault()
                this.props.onSimpanPenerimaanClick()
            }
        })
    }

    componentDidUpdate(){        
        if(this.props.isError){
            window.$.notify({message: this.props.errorMessage}, {
                type: "danger", 
                delay: 1000,
                placement: {align: "center"}
            })
        }
    }
    
    componentWillUnmount(){
        window.$(document).off("keydown")
    }

    render(){return (this.props.isSaving)? <Spinner/> :(
        <section>            
            <nav className="top-submenu top-submenu-with-background">
                <h3>Penerimaan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Penerimaan Barang</span></li>
                    <li><span>Input</span></li>
                </ul>
            </nav>
            <div className="col-lg-12" style={{marginBottom: 10}}>
                <button className="btn btn-default" style={{marginRight: 10}} onClick={this.props.onTambahBarangClick}>F1 Tambah Barang</button>
                <button className="btn btn-default" onClick={this.props.onSimpanPenerimaanClick}>F10 Simpan Penerimaan</button>
            </div>
            <div className="col-lg-12">
                <DetailPenerimaanBarangForm/>
            </div>
            <div className="col-lg-12">
                <div className="panel">
                    <div className="panel-body" style={{padding: 0}}>
                        <TableTransaksiBarang/>
                    </div>
                </div>
            </div>
            <TambahTransaksiBarangModal/>
        </section>
    )}
}
InputPenerimaanBarangPage.propTypes ={
    onTambahBarangClick: PropTypes.func.isRequired,
    onSimpanPenerimaanClick: PropTypes.func.isRequired
}
export default InputPenerimaanBarangPage;