import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchBarang} from "../../actions/tables/tableBarang"
import TableBarang from "../../components/tables/TableBarang"

const mapStateToProps = (state) => {return {
    listBarang: state.tableBarang.listBarang,
    isLoading: state.tableBarang.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchBarang: () => {dispatch(fetchBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TableBarang));