import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    hide, searchBarang, onSearchBarcodeChange,
    onSubmit, onQtyChange
} from "../../actions/modals/tambahTransaksiBarangModal";
import TambahTransaksiBarangModal from "../../components/modals/TambahTransaksiBarangModal";

const mapStateToProps = (state) => {return {
    isShown: state.tambahTransaksiBarangModal.isShown,
    isError: state.tambahTransaksiBarangModal.isError,
    barang: state.tambahTransaksiBarangModal.barang,
    searchBarcode: state.tambahTransaksiBarangModal.searchBarcode,
    qty: state.tambahTransaksiBarangModal.qty
}}

const mapDispatchToPros = (dispatch) => {return {
    onCloseClick: () => {dispatch(hide())},
    searchBarang: () => {dispatch(searchBarang())},
    onSearchBarcodeChange: (e) => {dispatch(onSearchBarcodeChange(e.target.value))},
    onQtyChange: (e) => {dispatch(onQtyChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TambahTransaksiBarangModal));