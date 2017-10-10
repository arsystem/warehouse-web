import React, {Component} from "react";
import PropTypes from "prop-types";

class DatePickerForm extends Component{
    constructor(props){
        super(props)
        this.input = null;
    }

    componentDidMount(){
        window.$(this.input).datetimepicker({
            widgetPositioning: {
                horizontal: 'left'
            },
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            },
            format: 'LL'
        }).on("dp.change", e => {
            this.props.onChange(e.date)
        });
    }

    render(){return (
        <input 
            ref={input => {this.input = input}}
            type="text" 
            className={`form-control datepicker-only-init width-${this.props.width} display-inline-block margin-inline`}
            placeholder={this.props.placeholder}/>
    )}
}
DatePickerForm.propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
DatePickerForm.defaultProps = {
    placeholder: "",
    width: 150,
    onChange: () => {}
}
export default DatePickerForm