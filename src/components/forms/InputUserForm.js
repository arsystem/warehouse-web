import React, {Component} from "react";
import PropTypes from "prop-types";

import TextForm from "./TextForm";

class InputUserForm extends Component{
    render(){return (
        <form className="panel panel-with-borders" onSubmit={this.props.onSubmit}>
            <div className="panel-heading">
                <h3>Informasi User Baru</h3>
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
                <TextForm 
                    label="Password"
                    value={this.props.password}
                    onChange={this.props.onPasswordChange}
                    type="password"/>
            </div>
            <div className="panel-footer">
                <button type="submit" className="btn btn-primary">Tambah User Baru</button>
            </div>
        </form>
    )}
}
InputUserForm.propTypes = {
    id: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    onIdChange: PropTypes.func.isRequired,
    onNamaChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default InputUserForm;