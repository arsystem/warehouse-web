import * as axios from "axios";

export const onIdChange = (value) => {return {
    type: "INPUT_CUSTOMER_FORM_ON_ID_CHANGE",
    value: value.toUpperCase()
}}

export const onNamaChange = (value) => {return {
    type: "INPUT_CUSTOMER_FORM_ON_NAMA_CHANGE",
    value: value.toUpperCase()
}}

const showSuccess = () => {return {type: "INPUT_CUSTOMER_FORM_SHOW_SUCCESS"}}
const showError = (message) => {return {type: "INPUT_CUSTOMER_FORM_SHOW_ERROR", message: message}}
const loading = () => {return {type: "INPUT_CUSTOMER_FORM_LOADING"}}

export const onSubmit = () => {return (dispatch, getState) => {
    dispatch(loading())

    let id = getState().inputCustomerForm.id
    let nama = getState().inputCustomerForm.nama

    if(id && nama){
        axios.post("http://localhost:8080/customer", {
            id: id,
            nama: nama
        }).then(response => {
            dispatch(showSuccess())
        }).catch(response => {
            dispatch(showError("Server gangguan!"))
        })
    }else{
        dispatch(showError("Data kosong!"))
    }
}}