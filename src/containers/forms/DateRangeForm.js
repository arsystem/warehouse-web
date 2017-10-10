import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {onDariChange, onSampaiChange} from "../../actions/forms/dateRangeForm";
import DateRangeForm from "../../components/forms/DateRangeForm";

const mapStateToProps = (state) => {return {
}}

const mapDispatchToPros = (dispatch) => {return {
    onDariChange: (date) => {dispatch(onDariChange(date))},
    onSampaiChange: (date) => {dispatch(onSampaiChange(date))}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DateRangeForm));