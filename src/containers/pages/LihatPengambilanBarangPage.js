import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {onCariSubmit} from "../../actions/pages/lihatPengambilanBarangPage";
import LihatPengambilanBarangPage from "../../components/pages/LihatPengambilanBarangPage";

const mapStateToProps = (state) => {return {
    
}}

const mapDispatchToPros = (dispatch) => {return {
    onCariSubmit: () => {dispatch(onCariSubmit())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(LihatPengambilanBarangPage));