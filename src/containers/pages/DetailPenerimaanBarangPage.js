import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {fetch as fetchDetailPenerimaanBarang} from "../../actions/pages/detailPenerimaanBarangPage";
import {clear as clearTableTransaksiBarang} from "../../actions/tables/tableTransaksiBarang";
import DetailPenerimaanBarangPage from "../../components/pages/DetailPenerimaanBarangPage";

const mapStateToProps = (state) => {return {
    tanggalPenerimaan: state.detailPenerimaanBarangPage.tanggalPenerimaan,
    tanggalEntri: state.detailPenerimaanBarangPage.tanggalEntri,
    suplier: state.detailPenerimaanBarangPage.suplier,
    checker: state.detailPenerimaanBarangPage.checker,
    entri: state.detailPenerimaanBarangPage.entri,
    isLoading: state.detailPenerimaanBarangPage.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchDetailPenerimaanBarang: (penerimaanBarang) => {dispatch(fetchDetailPenerimaanBarang(penerimaanBarang))},
    clearTableTransaksiBarang: () => {dispatch(clearTableTransaksiBarang())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPenerimaanBarangPage));