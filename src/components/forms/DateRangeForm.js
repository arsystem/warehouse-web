import React, {Component} from "react";
import PropTypes from "prop-types";

import DatePickerForm from "./DatePickerForm"

class DateRangeForm extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        this.props.onSubmit()
    }

    render(){return (
        <form onSubmit={this.onSubmit}>
            <DatePickerForm placeholder="Dari" onChange={this.props.onDariChange}/>
            <span className="margin-right-10">—</span>
            <DatePickerForm placeholder="Sampai" onChange={this.props.onSampaiChange} />
            <button type="submit" className="btn btn-default display-inline-block margin-inline">Cari</button>
        </form>
    )}
}
DateRangeForm.propTypes = {
    onDariChange: PropTypes.func.isRequired,
    onSampaiChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default DateRangeForm;