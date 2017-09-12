import * as axios from "axios";
import {addBarang as addTableTransaksiBarang} from "../tables/tableTransaksiBarang"

export const show = () => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_SHOW"
}}

export const hide = () => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_HIDE"
}}

export const onSearchBarcodeChange = (value) => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_ON_SEARCH_BARCODE_CHANGE",
    value: value
}}

export const onQtyChange = (value) => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_ON_QTY_CHANGE",
    value: (window.$.isNumeric(value))? parseInt(value, 10): ""
}}

const foundBarang = (barang) => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_ADD_BARANG",
    barang: barang
}}

const showError = () => {return {
    type: "TAMBAH_TRANSAKSI_BARANG_MODAL_SHOW_ERROR"
}}

export const searchBarang = () => {return (dispatch, getState) => {
    let searchBarcode = getState().tambahTransaksiBarangModal.searchBarcode;

    axios.get(`http://localhost:8080/barang/${searchBarcode}`).then(response => {
        if(!window.$.isEmptyObject(response.data.data)){
            dispatch(foundBarang(response.data.data))
        }else{
            dispatch(showError())
            dispatch(hide())
        }
    })
}}

export const onSubmit = () => {return (dispatch, getState) => {
    let barang = getState().tambahTransaksiBarangModal.barang
    let qty = getState().tambahTransaksiBarangModal.qty
    dispatch(addTableTransaksiBarang(barang, qty))
    dispatch(hide())
}}