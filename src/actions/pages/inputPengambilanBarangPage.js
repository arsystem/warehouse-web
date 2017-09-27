import * as axios from "axios";
import {BASE_API_URL} from "../../config"
import {clear as clearTable} from "../tables/tableTransaksiBarang";
import {clear as clearDetailPengambilan} from "../forms/detailPengambilanBarangForm";

const saving = () => {return {type: "INPUT_PENGAMBILAN_BARANG_SAVING"}}
const saved = () => {return {type: "INPUT_PENGAMBILAN_BARANG_SAVED"}}
const showError = (message) => {return {type: "INPUT_PENGAMBILAN_BARANG_SHOW_ERROR", errorMessage: message}}

export const simpanPengambilanBarang = () => {return (dispatch, getState) => {
    dispatch(saving())
    let listBarang = getState().tableTransaksiBarang.listBarang
    let customer = getState().detailPengambilanBarangForm.customer
    let checker = getState().detailPengambilanBarangForm.checker

    if(listBarang.length > 0 && checker.nama && customer.nama){
        let data = {
            tanggal_ambil: getState().detailPengambilanBarangForm.tanggalPengambilan,
            customer: {id: getState().detailPengambilanBarangForm.customer.id},
            user_cek: {id: getState().detailPengambilanBarangForm.checker.id},
            user_entri: {id: getState().global.user},
            list_barang: listBarang.map(barang => {
                return Object.assign({}, barang, {stock: barang.qty})
            })
        }

        let isoDate = window.moment(data.tanggal_ambil, "DD/MM/YYYY").local().toISOString()
        data = Object.assign({}, data, {tanggal_ambil: isoDate})

        if(isoDate === "Invalid date"){
            dispatch(showError("Pastikan tanggal sudah benar"))
        }else{
            axios.post(`${BASE_API_URL}/pengambilan_barang`, data).then(response => {
                dispatch(clearTable())
                dispatch(clearDetailPengambilan())
                dispatch(saved())
            }).catch(response => {
                dispatch(showError("Server gangguan."))    
            })
        }
    }else{
        dispatch(showError("Data tidak lengkap!"))
    }
}}