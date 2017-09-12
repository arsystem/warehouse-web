import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchSuplier} from "../../actions/tables/tableSuplier"
import TableSuplier from "../../components/tables/TableSuplier"

const mapStateToProps = (state) => {return {
    listSuplier: state.tableSuplier.listSuplier,
    isLoading: state.tableSuplier.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchSuplier: () => {dispatch(fetchSuplier())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TableSuplier));