import React from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";
import TextForm from "../forms/TextForm";

class TambahBarangTerimaModal extends Modal{
    constructor(props){
        super(props);
        this.txtBarcodeKeydown = this.txtBarcodeKeydown.bind(this);
    }

    componentDidUpdate(){
        super.componentDidUpdate()
        if(this.props.isError){
            window.$.notify({message: "Barcode tidak ditemukan"}, {
                type: "danger", 
                delay: 1000,
                placement: {align: "center"}
            })
        }
        
        this.input.enable()
        if(this.txtQty !== undefined && this.txtQty !== null){
            this.input.disable()
            this.txtQty.focus()
        }
    }

    txtBarcodeKeydown(e){
        if(e.keyCode === 13){
            e.preventDefault()
            this.props.searchBarang()
        }
    }

    render(){return (
        <div ref={modal => {this.modal = modal}} className="modal fade" tabIndex={-1} role="dialog" style={{display: "none"}}>
            <div className="modal-dialog" role="document">
                <form className="modal-content" onSubmit={this.props.onSubmit}>
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.props.onCloseClick}>
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">Tambah Barang Terima</h4>
                    </div>
                    <div className="modal-body">
                        <TextForm 
                            ref={input => {this.input = input}}
                            onKeydown={this.txtBarcodeKeydown}
                            label="Barcode"
                            value={this.props.searchBarcode}
                            onChange={this.props.onSearchBarcodeChange}/>
                        {(this.props.barang != null)?(<div>
                            <TextForm 
                                label="Nama Barang"
                                disabled={true}
                                value={this.props.barang.nama}/>
                            <TextForm 
                                ref={input => {this.txtQty = input}}
                                label="QTY"
                                value={this.props.qty}
                                onChange={this.props.onQtyChange}/>
                        </div>): ""}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={this.props.onCloseClick}>Tutup</button>
                        {(this.props.barang != null)?(
                            <button type="submit" className="btn btn-primary">Tambah Barang Terima</button>
                        ):""}
                    </div>
                </form>
            </div>
        </div>
    )}
}
TambahBarangTerimaModal.propTypes = {
    barang: PropTypes.object,
    qty: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
    searchBarcode: PropTypes.string.isRequired,
    onSearchBarcodeChange: PropTypes.func.isRequired,
    onCloseClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onQtyChange: PropTypes.func.isRequired,
    searchBarang: PropTypes.func.isRequired
}
export default TambahBarangTerimaModal;