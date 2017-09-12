import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TextForm from "../forms/TextForm";

class InputBarangForm extends Component{
    render(){
        if(this.props.isSuccess){
            window.$.notify({message: "Barang berhasil ditambahkan"}, {
                type: "success", 
                delay: 1000,
                placement: {align: "center"}
            })
        }
        if(this.props.isError){
            window.$.notify({message: this.props.errorMessage}, {
                type: "danger", 
                delay: 1000,
                placement: {align: "center"}
            })
        }

        return this.props.isLoading?<Spinner/>:(
            <form className="col-lg-8 col-lg-offset-2" onSubmit={this.props.onSubmit}>
                <div className="panel panel-with-borders">
                    <div className="panel-heading">
                        <h3>Informasi Barang Baru</h3>
                    </div>
                    <div className="panel-body">
                        <TextForm label="Barcode" placeholder="Barcode" value={this.props.barcode} onChange={this.props.onBarcodeChange}/>
                        <TextForm label="Nama Barang" placeholder="Nama Barang" value={this.props.nama} onChange={this.props.onNamaChange}/>
                    </div>
                    <div className="panel-footer">
                        <button type="submit" className="btn btn-primary">Tambah Barang Baru</button>
                    </div>
                </div>
            </form>
        )
    }
}
InputBarangForm.propTypes = {
    barcode: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onBarcodeChange: PropTypes.func.isRequired,
    onNamaChange: PropTypes.func.isRequired
}
export default InputBarangForm