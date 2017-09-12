import {Component} from "react";
import PropTypes from "prop-types";

class Modal extends Component{
    componentDidUpdate(){
        if(this.props.isShown){
            window.$(this.modal).modal({show: true, keyboard: false, backdrop: "static"})
        }else{
            window.$(this.modal).modal("hide")
        }
    }

    componentDidMount(){
        window.$(this.modal).on("shown.bs.modal", e => {
            this.input.focus()
        })
    }
}
Modal.propTypes = {
    isShown: PropTypes.bool.isRequired
}
export default Modal