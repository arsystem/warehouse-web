import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onIdChange, onNamaChange, onSubmit
} from "../../actions/forms/inputCustomerForm";
import InputCustomerForm from "../../components/forms/InputCustomerForm"

const mapStateToProps = (state) => {return {
    id: state.inputCustomerForm.id,
    nama: state.inputCustomerForm.nama,
    isLoading: state.inputCustomerForm.isLoading,
    isSuccess: state.inputCustomerForm.isSuccess,
    isError: state.inputCustomerForm.isError,
    errorMessage: state.inputCustomerForm.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onIdChange: (e) => {dispatch(onIdChange(e.target.value))},
    onNamaChange: (e) => {dispatch(onNamaChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputCustomerForm));