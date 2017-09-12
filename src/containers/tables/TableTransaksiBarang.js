import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {deleteBarang} from "../../actions/tables/tableTransaksiBarang"
import TableTransaksiBarang from "../../components/tables/TableTransaksiBarang"

const mapStateToProps = (state) => {return {
    listBarang: state.tableTransaksiBarang.listBarang
}}

const mapDispatchToPros = (dispatch) => {return {
    deleteEntry: (index) => {dispatch(deleteBarang(index))}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TableTransaksiBarang));