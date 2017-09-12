import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {show as showCariNama} from "../../actions/modals/cariNamaBarangModal";
import {show as showCariBarcode} from "../../actions/modals/cariBarcodeModal";
import LihatBarangPage from "../../components/pages/LihatBarangPage";

const mapStateToProps = (state) => {return {
    
}}

const mapDispatchToPros = (dispatch) => {return {
    onCariBarcodeClick: () => {dispatch(showCariBarcode())},
    onCariNamaClick: () => {dispatch(showCariNama())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(LihatBarangPage));