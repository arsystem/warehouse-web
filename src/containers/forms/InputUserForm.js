import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onIdChange, onNamaChange, onPasswordChange, onSubmit
} from "../../actions/forms/inputUserForm";
import InputUserForm from "../../components/forms/InputUserForm"

const mapStateToProps = (state) => {return {
    id: state.inputUserForm.id,
    nama: state.inputUserForm.nama,
    password: state.inputUserForm.password,
    isLoading: state.inputUserForm.isLoading,
    isSuccess: state.inputUserForm.isSuccess,
    isError: state.inputUserForm.isError,
    errorMessage: state.inputUserForm.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onIdChange: (e) => {dispatch(onIdChange(e.target.value))},
    onPasswordChange: (e) => {dispatch(onPasswordChange(e.target.value))},
    onNamaChange: (e) => {dispatch(onNamaChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputUserForm));