import * as axios from "axios";
import {BASE_API_URL} from "../../config"

import {loading as tableLoading, fetched as tableLoaded} from "../tables/tableBarang";

export const show = () => {return {
    type: "CARI_BARCODE_MODAL_SHOW"
}}

export const hide = () => {return {
    type: "CARI_BARCODE_MODAL_HIDE"
}}

export const onBarcodeChange = (value) => {return {
    type: "CARI_BARCODE_MODAL_ON_BARCODE_CHANGE",
    value: value.toUpperCase()
}}

export const onSubmit = () => {return (dispatch, getState) => {
    let barcode = getState().cariBarcodeModal.barcode;

    dispatch(hide())
    dispatch(tableLoading())
    axios.get(`${BASE_API_URL}/barang`, {params: {
        barcode: barcode
    }}).then(response => {
        let listBarang = []
        response.data.data.map(value => {
            listBarang.push(value)
        })
        dispatch(tableLoaded(listBarang))
    })
}}