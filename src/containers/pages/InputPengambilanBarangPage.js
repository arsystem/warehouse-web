import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {show as showTambahBarang} from "../../actions/modals/tambahTransaksiBarangModal";
import {simpanPengambilanBarang} from "../../actions/pages/inputPengambilanBarangPage";
import {clear as clearTableTransaksiBarang} from "../../actions/tables/tableTransaksiBarang";
import InputPengambilanBarangPage from "../../components/pages/InputPengambilanBarangPage";

const mapStateToProps = (state) => {return {
    isSaving: state.inputPengambilanBarangPage.isSaving,
    isError: state.inputPengambilanBarangPage.isError,
    errorMessage: state.inputPengambilanBarangPage.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onTambahBarangClick: () => {dispatch(showTambahBarang())},
    onSimpanPengambilanClick: () => {dispatch(simpanPengambilanBarang())},
    clearTableTransaksiBarang: () => {dispatch(clearTableTransaksiBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputPengambilanBarangPage));