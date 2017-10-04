import * as axios from "axios";
import {BASE_API_URL} from "../../config";
import {addBarang} from "../tables/tableTransaksiBarang";

const fetching = () => {return {type: "DETAIL_PENERIMAAN_BARANG_PAGE_FETCHING"}}
const fetched = (tanggalPenerimaan, tanggalEntri, suplier, checker, entri) => {return {
    type: "DETAIL_PENERIMAAN_BARANG_PAGE_FETCHED",
    tanggalPenerimaan: tanggalPenerimaan,
    tanggalEntri: tanggalEntri,
    suplier: suplier,
    checker: checker,
    entri: entri
}}
export const fetch = (penerimaanBarang) => {return dispatch => {
    dispatch(fetching())
    axios.get(`${BASE_API_URL}/penerimaan_barang/${penerimaanBarang.id}`).then(response => {
        let tanggalPenerimaan = window.moment(response.data.data.tanggal_terima).format("DD/MM/YYYY")
        let tanggalEntri = window.moment(response.data.data.tanggal_entri).format("DD/MM/YYYY")
        let promises = []
        promises.push(axios.get(`${BASE_API_URL}/suplier/${response.data.data.suplier.id}`))
        promises.push(axios.get(`${BASE_API_URL}/user/${response.data.data.user_cek.id}`))
        promises.push(axios.get(`${BASE_API_URL}/user/${response.data.data.user_entri.id}`))

        response.data.data.list_barang.forEach(item => {
            dispatch(addBarang(item, item.stock))
        })

        Promise.all(promises).then(responses => {
            dispatch(fetched(
                tanggalPenerimaan,
                tanggalEntri,
                {nama: responses[0].data.data.nama},
                {nama: responses[1].data.data.nama},
                {nama: responses[2].data.data.nama}
            ))
        })
    })
}}