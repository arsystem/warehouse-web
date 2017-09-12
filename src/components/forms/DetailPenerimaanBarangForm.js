import React, {Component} from "react";
import PropTypes from "prop-types";

import TextForm from "./TextForm";
import MaskedTextForm from "./MaskedTextForm";

class DetailPenerimaanBarangForm extends Component{
    constructor(props){
        super(props)
        this.onTxtSuplierKeydown = this.onTxtSuplierKeydown.bind(this)
        this.onTxtCheckerKeydown = this.onTxtCheckerKeydown.bind(this)
    }

    componentDidMount(){
        this.txtTanggalPenerimaan.focus()
    }

    onTxtSuplierKeydown(e){
        if(e.keyCode === 13){
            e.preventDefault()
            this.props.fetchSuplier()
        }
    }

    onTxtCheckerKeydown(e){
        if(e.keyCode === 13){
            e.preventDefault()
            this.props.fetchChecker()
        }
    }

    render(){return (
        <div className="panel panel-with-borders">
            <div className="panel-heading">
                <h3>Detail Penerimaan</h3>
            </div>
            <div className="panel-body">
                <MaskedTextForm 
                    ref={input => {this.txtTanggalPenerimaan = input}}
                    label="Tanggal Penerimaan"
                    mask="00/00/0000"
                    value={this.props.tanggalPenerimaan}
                    onChange={this.props.onTanggalPenerimaanChange}/>
                <TextForm 
                    label="Suplier"
                    value={this.props.suplier.id}
                    onChange={this.props.onSuplierIdChange}
                    onKeydown={this.onTxtSuplierKeydown}
                    onBlur={this.props.fetchSuplier}/>
                <TextForm
                    label="Nama Suplier"
                    disabled={true}
                    value={this.props.suplier.nama}/>
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
DetailPenerimaanBarangForm.propTypes = {
    tanggalPenerimaan: PropTypes.string.isRequired,
    suplier: PropTypes.object.isRequired,
    checker: PropTypes.object.isRequired,
    onCheckerIdChange: PropTypes.func.isRequired,
    onSuplierIdChange: PropTypes.func.isRequired,
    onTanggalPenerimaanChange: PropTypes.func.isRequired,
    fetchSuplier: PropTypes.func.isRequired,
    fetchChecker: PropTypes.func.isRequired
}
export default DetailPenerimaanBarangForm;