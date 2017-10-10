import * as axios from "axios";
import {BASE_API_URL} from "../../config";
import {addBarang} from "../tables/tableTransaksiBarang";

const fetching = () => {return {type: "DETAIL_PENGAMBILAN_BARANG_PAGE_FETCHING"}}
const fetched = (tanggalPengambilan, tanggalEntri, customer, checker, entri) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_PAGE_FETCHED",
    tanggalPengambilan: tanggalPengambilan,
    tanggalEntri: tanggalEntri,
    customer: customer,
    checker: checker,
    entri: entri
}}
export const fetch = (pengambilanBarang) => {return dispatch => {
    dispatch(fetching())
    axios.get(`${BASE_API_URL}/pengambilan_barang/${pengambilanBarang.id}`).then(response => {
        let tanggalPengambilan = window.moment(response.data.data.tanggal_ambil).format("DD/MM/YYYY")
        let tanggalEntri = window.moment(response.data.data.tanggal_entri).format("DD/MM/YYYY")
        let promises = []
        promises.push(axios.get(`${BASE_API_URL}/customer/${response.data.data.customer.id}`))
        promises.push(axios.get(`${BASE_API_URL}/user/${response.data.data.user_cek.id}`))
        promises.push(axios.get(`${BASE_API_URL}/user/${response.data.data.user_entri.id}`))

        response.data.data.list_barang.forEach(item => {
            dispatch(addBarang(item, item.stock))
        })

        Promise.all(promises).then(responses => {
            dispatch(fetched(
                tanggalPengambilan,
                tanggalEntri,
                {nama: responses[0].data.data.nama},
                {nama: responses[1].data.data.nama},
                {nama: responses[2].data.data.nama}
            ))
        })
    })
}}