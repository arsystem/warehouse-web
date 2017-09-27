import * as axios from "axios";
import {BASE_API_URL} from "../../config"

export const onNamaBarangChange = (value) => {return {
    type: "UBAH_BARANG_FORM_ON_NAMA_BARANG_CHANGE",
    value: value.toUpperCase()
}}

export const onBarcodeChange = (value) => {return {
    type: "UBAH_BARANG_FORM_ON_BARCODE_CHANGE",
    value: value
}}

const loading = () => {return {
    type: "UBAH_BARANG_FORM_LOADING"
}}

const updated = () => {return {
    type: "UBAH_BARANG_FORM_UPDATED"
}}

const fetched = (barcode, namaBarang) => {return {
    type: "UBAH_BARANG_FORM_FETCHED",
    barcode: barcode,
    namaBarang: namaBarang
}}

export const fetchBarang = (barcode) => {return dispatch => {
    dispatch(loading())
    axios.get(`${BASE_API_URL}/barang/${barcode}`).then(response => {
        let barcode = response.data.data.barcode
        let namaBarang = response.data.data.nama
        dispatch(fetched(barcode, namaBarang))
    })
}}

export const onSubmit = () => {return (dispatch, getState) => {
    dispatch(loading())

    let barcode = getState().ubahBarangForm.barcode
    let namaBarang = getState().ubahBarangForm.namaBarang

    axios.put(`${BASE_API_URL}/barang/${barcode}`, {
        barcode: barcode,
        nama: namaBarang
    }).then(response => {
        dispatch(updated())
    })
}}