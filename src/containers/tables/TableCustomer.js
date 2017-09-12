import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchCustomer} from "../../actions/tables/tableCustomer"
import TableCustomer from "../../components/tables/TableCustomer"

const mapStateToProps = (state) => {return {
    listCustomer: state.tableCustomer.listCustomer,
    isLoading: state.tableCustomer.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchCustomer: () => {dispatch(fetchCustomer())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TableCustomer));