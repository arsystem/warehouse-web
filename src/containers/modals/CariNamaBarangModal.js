import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {hide, onNamaBarangChange, onSubmit} from "../../actions/modals/cariNamaBarangModal";
import CariNamaBarangModal from "../../components/modals/CariNamaBarangModal";

const mapStateToProps = (state) => {return {
    isShown: state.cariNamaBarangModal.isShown,
    namaBarang: state.cariNamaBarangModal.namaBarang
}}

const mapDispatchToPros = (dispatch) => {return {
    onCloseClick: () => {dispatch(hide())},
    onNamaBarangChange: (e) => {dispatch(onNamaBarangChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault();
        dispatch(onSubmit());
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(CariNamaBarangModal));