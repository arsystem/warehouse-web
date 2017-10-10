import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {onCariSubmit} from "../../actions/pages/lihatPenerimaanBarangPage";
import LihatPenerimaanBarangPage from "../../components/pages/LihatPenerimaanBarangPage";

const mapStateToProps = (state) => {return {
    
}}

const mapDispatchToPros = (dispatch) => {return {
    onCariSubmit: () => {dispatch(onCariSubmit())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(LihatPenerimaanBarangPage));