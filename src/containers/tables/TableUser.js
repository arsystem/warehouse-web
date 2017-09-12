import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchUser} from "../../actions/tables/tableUser"
import TableUser from "../../components/tables/TableUser"

const mapStateToProps = (state) => {return {
    listUser: state.tableUser.listUser,
    isLoading: state.tableUser.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchUser: () => {dispatch(fetchUser())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TableUser));