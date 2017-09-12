import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onTanggalPengambalianChange, onCustomerIdChange, fetchCustomer,
    onCheckerIdChange, fetchChecker
} from "../../actions/forms/detailPengembalianBarangForm";
import DetailPengembalianBarangForm from "../../components/forms/DetailPengembalianBarangForm";

const mapStateToProps = (state) => {return {
    tanggalPengembalian: state.detailPengembalianBarangForm.tanggalPengembalian,
    customer: state.detailPengembalianBarangForm.customer,
    checker: state.detailPengembalianBarangForm.checker
}}

const mapDispatchToPros = (dispatch) => {return {
    onTanggalPengambalianChange: (e) => {
        if(e.target !== undefined) dispatch(onTanggalPenerimaanChange(e.target.value))
    },
    onSuplierIdChange: (e) => {dispatch(onSuplierIdChange(e.target.value))},
    onCheckerIdChange: (e) => {dispatch(onCheckerIdChange(e.target.value))},
    fetchSuplier: () => {dispatch(fetchSuplier())},
    fetchChecker: () => {dispatch(fetchChecker())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPengembalianBarangForm));