import * as axios from "axios";
import {BASE_API_URL} from "../../config"
import {clear as clearTable} from "../tables/tableTransaksiBarang";
import {clear as clearDetailPenerimaan} from "../forms/detailPenerimaanBarangForm";

const saving = () => {return {type: "INPUT_PENERIMAAN_BARANG_SAVING"}}
const saved = () => {return {type: "INPUT_PENERIMAAN_BARANG_SAVED"}}
const showError = (message) => {return {type: "INPUT_PENERIMAAN_BARANG_SHOW_ERROR", errorMessage: message}}
export const simpanPenerimaanBarang = () => {return (dispatch, getState) => {
    dispatch(saving())
    let listBarang = getState().tableTransaksiBarang.listBarang
    let suplier = getState().detailPenerimaanBarangForm.suplier
    let checker = getState().detailPenerimaanBarangForm.checker

    if(listBarang.length > 0 && checker.nama && suplier.nama){
        let data = {
            tanggal_terima: getState().detailPenerimaanBarangForm.tanggalPenerimaan,
            suplier: {id: getState().detailPenerimaanBarangForm.suplier.id},
            user_cek: {id: getState().detailPenerimaanBarangForm.checker.id},
            user_entri: {id: getState().global.user},
            list_barang: listBarang.map(barang => {
                return Object.assign({}, barang, {stock: barang.qty})
            })
        }

        let isoDate = window.moment(data.tanggal_terima, "DD/MM/YYYY").local().toISOString()
        data = Object.assign({}, data, {tanggal_terima: isoDate})

        if(isoDate === "Invalid date"){
            dispatch(showError("Pastikan tanggal sudah benar"))
        }else{
            axios.post(`${BASE_API_URL}/penerimaan_barang`, data).then(response => {
                dispatch(clearTable())
                dispatch(clearDetailPenerimaan())
                dispatch(saved())
            }).catch(response => {
                dispatch(showError("Server gangguan."))    
            })
        }
    }else{
        dispatch(showError("Data tidak lengkap!"))
    }
}}