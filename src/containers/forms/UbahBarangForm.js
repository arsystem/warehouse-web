import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onBarcodeChange, onNamaBarangChange,
    fetchBarang, onSubmit
} from "../../actions/forms/ubahBarangForm";
import UbahBarangForm from "../../components/forms/UbahBarangForm"

const mapStateToProps = (state) => {return {
    barcode: state.ubahBarangForm.barcode,
    namaBarang: state.ubahBarangForm.namaBarang,
    isLoading: state.ubahBarangForm.isLoading,
    isFetched: state.ubahBarangForm.isFetched,
    isUpdated: state.ubahBarangForm.isUpdated
}}

const mapDispatchToPros = (dispatch) => {return {
    onBarcodeChange: (e) => {dispatch(onBarcodeChange(e.target.value))},
    onNamaBarangChange: (e) => {dispatch(onNamaBarangChange(e.target.value))},
    fetchBarang: (barcode) => {dispatch(fetchBarang(barcode))},
    onSubmit: (e) => {
        e.preventDefault()
        dispatch(onSubmit())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(UbahBarangForm));