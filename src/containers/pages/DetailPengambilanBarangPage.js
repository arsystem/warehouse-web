import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetch as fetchDetailPengambilanBarang} from "../../actions/pages/detailPengambilanBarangPage";
import {clear as clearTableTransaksiBarang} from "../../actions/tables/tableTransaksiBarang";
import DetailPengambilanBarangPage from "../../components/pages/DetailPengambilanBarangPage";

const mapStateToProps = (state) => {return {
    tanggalPengambilan: state.detailPengambilanBarangPage.tanggalPengambilan,
    tanggalEntri: state.detailPengambilanBarangPage.tanggalEntri,
    customer: state.detailPengambilanBarangPage.customer,
    checker: state.detailPengambilanBarangPage.checker,
    entri: state.detailPengambilanBarangPage.entri,
    isLoading: state.detailPengambilanBarangPage.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchDetailPengambilanBarang: (pengambilanBarang) => {dispatch(fetchDetailPengambilanBarang(pengambilanBarang))},
    clearTableTransaksiBarang: () => {dispatch(clearTableTransaksiBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPengambilanBarangPage));