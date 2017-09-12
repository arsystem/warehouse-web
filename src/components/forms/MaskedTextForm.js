import TextForm from "./TextForm";

class MaskedTextForm extends TextForm{
    focus(){ super.focus() }
    disable(){ super.disable() }
    enable(){ super.enable() }

    componentDidMount(){
        let options = {
            onChange: this.props.onChange,
        }
        window.$(this.input).mask(this.props.mask, options)
    }
    render(){return super.render()}
}
MaskedTextForm.defaultProps = {
    onChange: (e) => {},
    placeholder: "",
    mode: "horizontal",
    type: "text",
    disabled: false,
    mask: null,
}
export default MaskedTextForm