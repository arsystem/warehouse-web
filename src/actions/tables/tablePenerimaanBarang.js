import * as axios from "axios";
import {BASE_API_URL} from "../../config";

const loading = () => {return {type: "TABLE_PENERIMAAN_BARANG_LOADING"}}
const fetched = (listPenerimaanBarang) => {return {
    type: "TABLE_PENERIMAAN_BARANG_FETCHED",
    listPenerimaanBarang: listPenerimaanBarang
}}
export const fetchPenerimaanBarang = () => {return (dispatch, getState) => {
    dispatch(loading())

    let mulai_tanggal = window.moment().startOf("year").toISOString()
    let sampai_tanggal = window.moment().endOf("year").toISOString()
    
    axios.get(`${BASE_API_URL}/penerimaan_barang`, {params: {
        start_tanggal_terima: mulai_tanggal,
        end_tanggal_terima: sampai_tanggal
    }}).then(response => {
        let promises = []
        response.data.data.forEach(item => {
            let totalBarangMasuk = 0;
            item.list_barang.forEach(item => {totalBarangMasuk += item.stock})

            promises.push(axios.get(`${BASE_API_URL}/suplier/${item.suplier.id}`).then(response => {
                return {
                    id: item.id,
                    tanggalTerima: window.moment(item.tanggal_terima).format("DD MMMM YYYY"),
                    namaSuplier: response.data.data.nama,
                    totalBarangMasuk: totalBarangMasuk
                }
            }))
        })
        Promise.all(promises).then(responses => {
            dispatch(fetched(responses))
        })
    })
}}