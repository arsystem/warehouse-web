import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {
    onTanggalPenerimaanChange, onSuplierIdChange, fetchSuplier,
    onCheckerIdChange, fetchChecker
} from "../../actions/forms/detailPenerimaanBarangForm";
import DetailPenerimaanBarangForm from "../../components/forms/DetailPenerimaanBarangForm";

const mapStateToProps = (state) => {return {
    tanggalPenerimaan: state.detailPenerimaanBarangForm.tanggalPenerimaan,
    suplier: state.detailPenerimaanBarangForm.suplier,
    checker: state.detailPenerimaanBarangForm.checker
}}

const mapDispatchToPros = (dispatch) => {return {
    onTanggalPenerimaanChange: (e) => {
        if(e.target !== undefined) dispatch(onTanggalPenerimaanChange(e.target.value))
    },
    onSuplierIdChange: (e) => {dispatch(onSuplierIdChange(e.target.value))},
    onCheckerIdChange: (e) => {dispatch(onCheckerIdChange(e.target.value))},
    fetchSuplier: () => {dispatch(fetchSuplier())},
    fetchChecker: () => {dispatch(fetchChecker())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPenerimaanBarangForm));