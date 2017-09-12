import React, {Component} from "react";
import PropTypes from "prop-types";

import TextForm from "./TextForm";
import MaskedTextForm from "./MaskedTextForm";

class DetailPengambilanBarangForm extends Component{
    constructor(props){
        super(props)
        this.onTxtCustomerKeydown = this.onTxtCustomerKeydown.bind(this)
        this.onTxtCheckerKeydown = this.onTxtCheckerKeydown.bind(this)
    }

    componentDidMount(){
        this.txtTanggalPengambilan.focus()
    }

    onTxtCustomerKeydown(e){
        if(e.keyCode === 13){
            e.preventDefault()
            this.props.fetchCustomer()
        }
    }

    onTxtCheckerKeydown(e){
        if(e.keyCode === 13){
            e.preventDefault()
            this.props.fetchChecker()
        }
    }

    render(){console.log(this.props); return (
        <div className="panel panel-with-borders">
            <div className="panel-heading">
                <h3>Detail Pengambilan</h3>
            </div>
            <div className="panel-body">
                <MaskedTextForm 
                    ref={input => {this.txtTanggalPengambilan = input}}
                    label="Tanggal Pengambilan"
                    mask="00/00/0000"
                    value={this.props.tanggalPengambilan}
                    onChange={this.props.onTanggalPengambilanChange}/>
                <TextForm 
                    label="Customer"
                    value={this.props.customer.id}
                    onChange={this.props.onCustomerIdChange}
                    onKeydown={this.onTxtCustomerKeydown}
                    onBlur={this.props.fetchCustomer}/>
                <TextForm
                    label="Nama Customer"
                    disabled={true}
                    value={this.props.customer.nama}/>
                <TextForm
                    label="Checker"
                    value={this.props.checker.id}
                    onChange={this.props.onCheckerIdChange}
                    onKeydown={this.onTxtCheckerKeydown}
                    onBlur={this.props.fetchChecker}/>
                <TextForm
                    label="Nama Checker"
                    disabled={true}
                    value={this.props.checker.nama}/>
            </div>
        </div>
    )}
}
DetailPengambilanBarangForm.propTypes = {
    tanggalPengambilan: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    checker: PropTypes.object.isRequired,
    onCheckerIdChange: PropTypes.func.isRequired,
    onCustomerIdChange: PropTypes.func.isRequired,
    onTanggalPengambilanChange: PropTypes.func.isRequired,
    fetchCustomer: PropTypes.func.isRequired,
    fetchChecker: PropTypes.func.isRequired
}
export default DetailPengambilanBarangForm;