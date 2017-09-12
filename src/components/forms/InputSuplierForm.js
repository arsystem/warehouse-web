import React, {Component} from "react";
import PropTypes from "prop-types";

import Spinner from "react-spinner";
import TextForm from "./TextForm";

class InputSuplierForm extends Component{
    componentDidMount(){
        this.txtId.focus()
    }

    componentDidUpdate(){
        if(this.props.isSuccess){
            window.$.notify({message: "Suplier berhasil ditambahkan"}, {
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

    render(){return (this.props.isLoading)? <Spinner/>: (
        <form className="panel panel-with-borders" onSubmit={this.props.onSubmit}>
            <div className="panel-heading">
                <h3>Informasi Suplier Baru</h3>
            </div>
            <div className="panel-body">
                <TextForm 
                    ref={input => {this.txtId = input}}
                    label="ID"
                    value={this.props.id}
                    onChange={this.props.onIdChange}/>
                <TextForm 
                    label="Nama"
                    value={this.props.nama}
                    onChange={this.props.onNamaChange}/>
            </div>
            <div className="panel-footer">
                <button type="submit" className="btn btn-primary">Tambah Suplier Baru</button>
            </div>
        </form>
    )}
}
InputSuplierForm.propTypes = {
    id: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onIdChange: PropTypes.func.isRequired,
    onNamaChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default InputSuplierForm;