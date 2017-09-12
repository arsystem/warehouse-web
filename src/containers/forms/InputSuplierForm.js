import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onIdChange, onNamaChange, onSubmit
} from "../../actions/forms/inputSuplierForm";
import InputSuplierForm from "../../components/forms/InputSuplierForm"

const mapStateToProps = (state) => {return {
    id: state.inputSuplierForm.id,
    nama: state.inputSuplierForm.nama,
    isLoading: state.inputSuplierForm.isLoading,
    isSuccess: state.inputSuplierForm.isSuccess,
    isError: state.inputSuplierForm.isError,
    errorMessage: state.inputSuplierForm.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onIdChange: (e) => {dispatch(onIdChange(e.target.value))},
    onNamaChange: (e) => {dispatch(onNamaChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputSuplierForm));