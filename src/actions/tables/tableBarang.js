import * as axios from "axios";

export const loading = () => {return {
    type: "TABLE_BARANG_LOADING"
}}

export const fetched = (listBarang) => {return {
    type: "TABLE_BARANG_FETCHED",
    listBarang: listBarang
}}

export const fetchBarang = () => {return dispatch => {
    dispatch(loading())
    axios.get("http://localhost:8080/barang").then(response => {
        let listBarang = []
        response.data.data.map(value => {
            listBarang.push(value)
        })
        dispatch(fetched(listBarang))
    })
}}