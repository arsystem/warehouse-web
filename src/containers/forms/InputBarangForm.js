import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onBarcodeChange, onNamaChange, onSubmit
} from "../../actions/forms/inputBarangForm";
import InputBarangForm from "../../components/forms/InputBarangForm"

const mapStateToProps = (state) => {return {
    barcode: state.inputBarangForm.barcode,
    nama: state.inputBarangForm.nama,
    isLoading: state.inputBarangForm.isLoading,
    isError: state.inputBarangForm.isError,
    isSuccess: state.inputBarangForm.isSuccess,
    errorMessage: state.inputBarangForm.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onBarcodeChange: (e) => {dispatch(onBarcodeChange(e.target.value))},
    onNamaChange: (e) => {dispatch(onNamaChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputBarangForm));