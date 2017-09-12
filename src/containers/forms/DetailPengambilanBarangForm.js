import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onTanggalPengambilanChange, onCustomerIdChange, fetchCustomer,
    onCheckerIdChange, fetchChecker
} from "../../actions/forms/detailPengambilanBarangForm";
import DetailPengambilanBarangForm from "../../components/forms/DetailPengambilanBarangForm";

const mapStateToProps = (state) => {return {
    tanggalPengambilan: state.detailPengambilanBarangForm.tanggalPengambilan,
    customer: state.detailPengambilanBarangForm.customer,
    checker: state.detailPengambilanBarangForm.checker
}}

const mapDispatchToPros = (dispatch) => {return {
    onTanggalPengambilanChange: (e) => {
        if(e.target !== undefined) dispatch(onTanggalPengambilanChange(e.target.value))
    },
    onCustomerIdChange: (e) => {dispatch(onCustomerIdChange(e.target.value))},
    onCheckerIdChange: (e) => {dispatch(onCheckerIdChange(e.target.value))},
    fetchCustomer: () => {dispatch(fetchCustomer())},
    fetchChecker: () => {dispatch(fetchChecker())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPengambilanBarangForm));