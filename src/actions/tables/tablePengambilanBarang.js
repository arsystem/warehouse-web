import * as axios from "axios";
import {BASE_API_URL} from "../../config";

const loading = () => {return {type: "TABLE_PENGAMBILAN_BARANG_LOADING"}}
const fetched = (listPengambilanBarang) => {return {
    type: "TABLE_PENGAMBILAN_BARANG_FETCHED",
    listPengambilanBarang: listPengambilanBarang
}}
export const fetchPengambilanBarang = (mulaiTanggal, sampaiTanggal) => {return (dispatch, getState) => {
    dispatch(loading())

    if(mulaiTanggal === null || mulaiTanggal === undefined){
        mulaiTanggal = window.moment().startOf("year").toISOString()
    }
    if(sampaiTanggal === null || sampaiTanggal === undefined){
        sampaiTanggal = window.moment().endOf("year").toISOString()
    }
    
    axios.get(`${BASE_API_URL}/pengambilan_barang`, {params: {
        start_tanggal_ambil: mulaiTanggal,
        end_tanggal_ambil: sampaiTanggal
    }}).then(response => {
        let promises = []
        response.data.data.forEach(item => {
            let totalBarangKeluar = 0;
            item.list_barang.forEach(item => {totalBarangKeluar += item.stock})

            promises.push(axios.get(`${BASE_API_URL}/customer/${item.customer.id}`).then(response => {
                return {
                    id: item.id,
                    tanggalAmbil: window.moment(item.tanggal_ambil).format("DD MMMM YYYY"),
                    namaCustomer: response.data.data.nama,
                    totalBarangKeluar: totalBarangKeluar
                }
            }))
        })
        Promise.all(promises).then(responses => {
            dispatch(fetched(responses))
        })
    })
}}