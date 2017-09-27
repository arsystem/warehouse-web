import * as axios from "axios";
import {BASE_API_URL} from "../../config"

export const loading = () => {return {
    type: "TABLE_SUPLIER_LOADING"
}}

export const fetched = (listSuplier) => {return {
    type: "TABLE_SUPLIER_FETCHED",
    listSuplier: listSuplier
}}

export const fetchSuplier = () => {return dispatch => {
    dispatch(loading())
    axios.get(`${BASE_API_URL}/suplier`).then(response => {
        let listSuplier = []
        response.data.data.map(value => {
            listSuplier.push(value)
        })
        dispatch(fetched(listSuplier))
    })
}}