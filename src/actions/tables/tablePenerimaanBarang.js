import * as axios from "axios";
import {BASE_API_URL} from "../../config";

const loading = () => {return {type: "TABLE_PENERIMAAN_BARANG_LOADING"}}
const fetched = (listPenerimaanBarang) => {return {
    type: "TABLE_PENERIMAAN_BARANG_FETCHED",
    listPenerimaanBarang: listPenerimaanBarang
}}
export const fetchPenerimaanBarang = (mulaiTanggal, sampaiTanggal) => {return (dispatch, getState) => {
    dispatch(loading())

    if(mulaiTanggal === null || mulaiTanggal === undefined){
        mulaiTanggal = window.moment().startOf("year").toISOString()
    }
    if(sampaiTanggal === null || sampaiTanggal === undefined){
        sampaiTanggal = window.moment().endOf("year").toISOString()
    }
    
    axios.get(`${BASE_API_URL}/penerimaan_barang`, {params: {
        start_tanggal_terima: mulaiTanggal,
        end_tanggal_terima: sampaiTanggal
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