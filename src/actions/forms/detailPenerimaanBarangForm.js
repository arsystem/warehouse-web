import * as axios from "axios"
import {BASE_API_URL} from "../../config"

export const clear =  () => {return {type: "DETAIL_PENERIMAAN_BARANG_FORM_CLEAR"}}
export const onTanggalPenerimaanChange = (value) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_FORM_ON_TANGGAL_PENERIMAAN_CHANGE",
    value: value
}}

export const onSuplierIdChange = (value) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_FORM_ON_SUPLIER_ID_CHANGE",
    value: value.toUpperCase()
}}

export const onCheckerIdChange = (value) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_FORM_ON_CHECKER_ID_CHANGE",
    value: value.toUpperCase()
}}

const fetchedSuplier = (suplier) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_FORM_FETCHED_SUPLIER",
    suplier: suplier
}}
export const fetchSuplier = (value) => {return (dispatch, getState) => {
    let suplierId = getState().detailPenerimaanBarangForm.suplier.id
    axios.get(`${BASE_API_URL}/suplier/${suplierId}`).then(response => {
        dispatch(fetchedSuplier(response.data.data))
    })
}}

const fetchedChecker = (checker) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_FORM_FETCHED_CHECKER",
    checker: checker
}}
export const fetchChecker = (value) => {return (dispatchEvent, getState) => {
    let checkerId = getState().detailPenerimaanBarangForm.checker.id;
    axios.get(`${BASE_API_URL}/user/${checkerId}`).then(response => {
        dispatchEvent(fetchedChecker(response.data.data))
    })
}}