import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TextForm from "./TextForm";

class UbahBarangForm extends Component{
    componentDidMount(){
        this.props.fetchBarang(this.props.barang.barcode)
    }

    componentDidUpdate(){
        if(this.txtNamaBarang != null)
            this.txtNamaBarang.focus()

        if(this.props.isUpdated){
            window.$.notify({message: "Barang berhasil diubah"}, {
                type: "success", 
                delay: 1000,
                placement: {align: "center"}
            })
            this.props.fetchBarang(this.props.barang.barcode)
        }
    }

    render(){return (
        <form className="panel panel-with-borders" onSubmit={this.props.onSubmit}>
            <div className="panel-heading">
                <h3>Data Barang</h3>
            </div>
            {(this.props.isLoading)? <Spinner/>: (<div className="panel-body">
                <TextForm 
                    ref={input => {this.txtNamaBarang = input}}
                    label="Nama Barang"
                    value={this.props.namaBarang}
                    onChange={this.props.onNamaBarangChange}/>
            </div>)}
            <div className="panel-footer">
                <button type="submit" className="btn btn-primary">Ubah Data Barang</button>
            </div>
        </form>
    )}
}
UbahBarangForm.propTypes = {
    barcode: PropTypes.string.isRequired,
    namaBarang: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onNamaBarangChange: PropTypes.func.isRequired,
    onBarcodeChange: PropTypes.func.isRequired,
    fetchBarang: PropTypes.func.isRequired
}
export default UbahBarangForm;