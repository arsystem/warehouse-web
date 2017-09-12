import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TextForm from "../forms/TextForm";

class InputCustomerForm extends Component{
    componentDidMount(){
        this.txtId.focus()
    }

    componentDidUpdate(){
        if(this.props.isSuccess){
            window.$.notify({message: "Customer berhasil ditambahkan"}, {
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
    }
    render(){
        return this.props.isLoading?<Spinner/>:(
            <form className="col-lg-8 col-lg-offset-2" onSubmit={this.props.onSubmit}>
                <div className="panel panel-with-borders">
                    <div className="panel-heading">
                        <h3>Informasi Customer Baru</h3>
                    </div>
                    <div className="panel-body">
                        <TextForm
                            ref={input => {this.txtId = input}}
                            label="ID" 
                            placeholder="Barcode"
                            value={this.props.id}
                            onChange={this.props.onIdChange}/>
                        <TextForm 
                            label="Nama Customer" 
                            placeholder="Nama Customer"
                            value={this.props.nama}
                            onChange={this.props.onNamaChange}/>
                    </div>
                    <div className="panel-footer">
                        <button type="submit" className="btn btn-primary">Tambah Customer Baru</button>
                    </div>
                </div>
            </form>
        )
    }
}
InputCustomerForm.propTypes = {
    id: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    onIdChange: PropTypes.func.isRequired,
    onNamaChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default InputCustomerForm