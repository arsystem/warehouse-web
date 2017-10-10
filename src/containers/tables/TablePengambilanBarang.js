import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetchPengambilanBarang} from "../../actions/tables/tablePengambilanBarang"
import TablePengambilanBarang from "../../components/tables/TablePengambilanBarang"

const mapStateToProps = (state) => {return {
    listPengambilanBarang: state.tablePengambilanBarang.listPengambilanBarang,
    isLoading: state.tablePengambilanBarang.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchPengambilanBarang: () => {dispatch(fetchPengambilanBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TablePengambilanBarang));