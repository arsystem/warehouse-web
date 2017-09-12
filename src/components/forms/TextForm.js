import React, {Component} from "react";
import PropTypes from "prop-types";

class TextForm extends Component{
    constructor(props){
        super(props);
        this.focus = this.focus.bind(this);
    }

    componentDidMount(){
        window.$(this.input).on("keydown", e => {
            this.props.onKeydown(e)
        })
        window.$(this.input).on("blur", e => {
            this.props.onBlur(e)
        })
    }

    focus(){ this.input.focus() }
    disable(){ this.input.disabled = true}
    enable(){ this.input.disabled = false}

    getInput(){return (
        <input 
            ref={input => {this.input = input}} 
            type={this.props.type} 
            className="form-control" 
            placeholder={`${this.props.placeholder}`} 
            id={`${this.props.id}`} 
            value={this.props.value}
            onChange={this.props.onChange}
            disabled={this.props.disabled}/>
    )}

    render(){
        if(this.props.mode === "horizontal"){
            return (
                <div className="form-group row">
                    <div className="col-md-3">
                        <label className="form-control-label" htmlFor={`${this.props.id}`}>{`${this.props.label}`}</label>
                    </div>
                    <div className="col-md-9">
                        {this.getInput()}
                    </div>
                </div>
            )
        }else if(this.props.mode === "vertical"){
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    {this.getInput()}
                </div>
            )
        }
    }
}
TextForm.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    mode: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
}
TextForm.defaultProps = {
    placeholder: "",
    mode: "horizontal",
    type: "text",
    disabled: false,
    mask: null,
    onKeydown: () => {},
    onBlur: () => {}
}
export default TextForm;