import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {show as showTambahBarang} from "../../actions/modals/tambahTransaksiBarangModal";
import {simpanPenerimaanBarang} from "../../actions/pages/inputPenerimaanBarangPage";
import {clear as clearTableTransaksiBarang} from "../../actions/tables/tableTransaksiBarang";
import InputPenerimaanBarangPage from "../../components/pages/InputPenerimaanBarangPage";

const mapStateToProps = (state) => {return {
    isSaving: state.inputPenerimaanBarangPage.isSaving,
    isError: state.inputPenerimaanBarangPage.isError,
    isSuccess: state. inputPenerimaanBarangPage.isSuccess,
    errorMessage: state.inputPenerimaanBarangPage.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onTambahBarangClick: () => {dispatch(showTambahBarang())},
    onSimpanPenerimaanClick: () => {dispatch(simpanPenerimaanBarang())},
    clearTableTransaksiBarang: () => {dispatch(clearTableTransaksiBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputPenerimaanBarangPage));