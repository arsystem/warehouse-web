import * as axios from "axios";
import {BASE_API_URL} from "../../config"

export const onIdChange = (value) => {return {
    type: "INPUT_USER_FORM_ON_ID_CHANGE",
    value: value.toUpperCase()
}}

export const onPasswordChange = (value) => {return {
    type: "INPUT_USER_FORM_ON_PASSWORD_CHANGE",
    value: value
}}

export const onNamaChange = (value) => {return {
    type: "INPUT_USER_FORM_ON_NAMA_CHANGE",
    value: value.toUpperCase()
}}

const loading = () => {return {type: "INPUT_USER_FORM_LOADING"}}
const showError = (message) => {return {type: "INPUT_USER_FORM_SHOW_ERROR", message: message}}
const showSuccess = () => {return {type: "INPUT_USER_FORM_SHOW_SUCCESS"}}

export const onSubmit = () => {return (dispatch, getState) => {
    dispatch(loading())

    let id = getState().inputUserForm.id;
    let nama = getState().inputUserForm.nama;
    let password = getState().inputUserForm.password;

    if(id && nama && password){
        axios.post(`${BASE_API_URL}/user`, {
            id: id,
            nama: nama,
            password: password
        }).then(response => {
            dispatch(showSuccess())
        }).catch(response => {
            dispatch(showError("Server gangguan!"))
        })
    }else{
        dispatch(showError("Data kosong!"))
    }
}}