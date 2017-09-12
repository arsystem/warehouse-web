import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import App from "../components/App"

const mapStateToProps = (state) => {return {
    loggedIn: state.global.loggedIn
}}

const mapDispatchToPros = (dispatch) => {return {
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(App));