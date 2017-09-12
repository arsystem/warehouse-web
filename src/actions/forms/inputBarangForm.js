import * as axios from "axios";

export const onBarcodeChange = (value) => {return {
    type: "INPUT_BARANG_FORM_ON_BARCODE_CHANGE",
    value: value
}}

export const onNamaChange = (value) => {return {
    type: "INPUT_BARANG_FORM_ON_NAMA_CHANGE",
    value: value.toUpperCase()
}}

const loading = () => {return {
    type: "INPUT_BARANG_FORM_LOADING"
}}

const showSuccess = () => {return {
    type: "INPUT_BARANG_FORM_SHOW_SUCCESS"
}}

const showError = (message) => {return {
    type: "INPUT_BARANG_FORM_SHOW_ERROR",
    message: message
}}

export const onSubmit = () => {return (dispatch, getState) => {
    dispatch(loading())
    let barcode = getState().inputBarangForm.barcode;
    let nama = getState().inputBarangForm.nama;
    
    if(barcode && nama){
        axios.post("http://localhost:8080/barang", {
            barcode: barcode,
            nama: nama,
            stock: 0
        }).then(response => {
            dispatch(showSuccess())
        }).catch(response => {
            dispatch(showError("Server gangguan!"))
        })
    }else{
        dispatch(showError("Data kosong!"))
    }
}}