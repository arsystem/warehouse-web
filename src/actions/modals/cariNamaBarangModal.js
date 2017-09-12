import * as axios from "axios";

import {loading as tableLoading, fetched as tableLoaded} from "../tables/tableBarang";

export const show = () => {return {
    type: "CARI_NAMA_BARANG_MODAL_SHOW"
}}

export const hide = () => {return {
    type: "CARI_NAMA_BARANG_MODAL_HIDE"
}}

export const onNamaBarangChange = (value) => {return {
    type: "CARI_NAMA_BARANG_MODAL_ON_NAMA_BARANG_CHANGE",
    value: value.toUpperCase()
}}

export const onSubmit = () => {return (dispatch, getState) => {
    let namaBarang = getState().cariNamaBarangModal.namaBarang;

    dispatch(hide())
    dispatch(tableLoading())
    axios.get("http://localhost:8080/barang", {params: {
        nama: namaBarang
    }}).then(response => {
        let listBarang = []
        response.data.data.map(value => {
            listBarang.push(value)
        })
        dispatch(tableLoaded(listBarang))
    })
}}