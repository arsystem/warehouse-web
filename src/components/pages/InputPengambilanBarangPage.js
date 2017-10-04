import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TableTransaksiBarang from "../../containers/tables/TableTransaksiBarang";
import TambahTransaksiBarangModal from "../../containers/modals/TambahTransaksiBarangModal";
import DetailPengambilanBarangForm from "../../containers/forms/DetailPengambilanBarangForm";

class InputPengambilanBarangPage extends Component{
    componentDidMount(){
        this.props.clearTableTransaksiBarang()
        window.$(document).keydown(e => {
            if(e.keyCode === 112){
                e.preventDefault()
                this.props.onTambahBarangClick()
            }else if(e.keyCode === 121){
                e.preventDefault()
                this.props.onSimpanPengambilanClick()
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
                <h3>Pengambilan Barang</h3>
                <ul className="list-unstyled breadcrumb">
                    <li><span>Pengambilan Barang</span></li>
                    <li><span>Input</span></li>
                </ul>
            </nav>
            <div className="col-lg-12" style={{marginBottom: 10}}>
                <button className="btn btn-default" style={{marginRight: 10}} onClick={this.props.onTambahBarangClick}>F1 Tambah Barang</button>
                <button className="btn btn-default" onClick={this.props.onSimpanPengambilanClick}>F10 Simpan Pengambilan</button>
            </div>
            <div className="col-lg-12">
                <DetailPengambilanBarangForm/>
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
InputPengambilanBarangPage.propTypes ={
    onTambahBarangClick: PropTypes.func.isRequired,
    onSimpanPengambilanClick: PropTypes.func.isRequired,
    clearTableTransaksiBarang: PropTypes.func.isRequired
}
export default InputPengambilanBarangPage;