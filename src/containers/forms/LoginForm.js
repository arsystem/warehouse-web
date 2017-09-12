import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onUsernameChange, onPasswordChange, onSubmit
} from "../../actions/forms/loginForm";
import LoginForm from "../../components/forms/LoginForm"

const mapStateToProps = (state) => {return {
    username: state.loginForm.username,
    password: state.loginForm.password,
    isLoading: state.loginForm.isLoading,
    isError: state.loginForm.isError
}}

const mapDispatchToPros = (dispatch) => {return {
    onUsernameChange: (e) => {dispatch(onUsernameChange(e.target.value))},
    onPasswordChange: (e) => {dispatch(onPasswordChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(LoginForm));