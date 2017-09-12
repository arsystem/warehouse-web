import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {show as showTambahBarang} from "../../actions/modals/tambahTransaksiBarangModal";
import {simpanPengambilanBarang} from "../../actions/pages/inputPengambilanBarangPage";
import InputPengambilanBarangPage from "../../components/pages/InputPengambilanBarangPage";

const mapStateToProps = (state) => {return {
    isSaving: state.inputPengambilanBarangPage.isSaving,
    isError: state.inputPengambilanBarangPage.isError,
    errorMessage: state.inputPengambilanBarangPage.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    onTambahBarangClick: () => {dispatch(showTambahBarang())},
    onSimpanPengambilanClick: () => {dispatch(simpanPengambilanBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(InputPengambilanBarangPage));