import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchPenerimaanBarang} from "../../actions/tables/tablePenerimaanBarang"
import TablePenerimaanBarang from "../../components/tables/TablePenerimaanBarang"

const mapStateToProps = (state) => {return {
    listPenerimaanBarang: state.tablePenerimaanBarang.listPenerimaanBarang,
    isLoading: state.tablePenerimaanBarang.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchPenerimaanBarang: () => {dispatch(fetchPenerimaanBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TablePenerimaanBarang));