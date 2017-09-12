import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {hide, onBarcodeChange, onSubmit} from "../../actions/modals/cariBarcodeModal";
import CariBarcodeModal from "../../components/modals/CariBarcodeModal";

const mapStateToProps = (state) => {return {
    isShown: state.cariBarcodeModal.isShown,
    barcode: state.cariBarcodeModal.barcode
}}

const mapDispatchToPros = (dispatch) => {return {
    onCloseClick: () => {dispatch(hide())},
    onBarcodeChange: (e) => {dispatch(onBarcodeChange(e.target.value))},
    onSubmit: (e) => {
        e.preventDefault();
        dispatch(onSubmit());
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(CariBarcodeModal));