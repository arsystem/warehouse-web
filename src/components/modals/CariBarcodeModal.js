import React from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";
import TextForm from "../forms/TextForm";

class CariBarcodeModal extends Modal{
    render(){return (
        <div ref={modal => {this.modal = modal}} className="modal fade" tabIndex={-1} role="dialog" style={{display: "none"}}>
            <div className="modal-dialog" role="document">
                <form className="modal-content" onSubmit={this.props.onSubmit}>
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.props.onCloseClick}>
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">Cari Nama Barang</h4>
                    </div>
                    <div className="modal-body">
                        <TextForm 
                            ref={input => {this.input = input}} 
                            label="Barcode"
                            value={this.props.barcode}
                            onChange={this.props.onBarcodeChange}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={this.props.onCloseClick}>Tutup</button>
                        <button type="submit" className="btn btn-primary">Cari</button>
                    </div>
                </form>
            </div>
        </div>
    )}
}
CariBarcodeModal.propTypes = {
    barcode: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onBarcodeChange: PropTypes.func.isRequired,
    onCloseClick: PropTypes.func.isRequired
}
export default CariBarcodeModal;