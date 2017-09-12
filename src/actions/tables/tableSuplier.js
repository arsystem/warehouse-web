import * as axios from "axios";

export const loading = () => {return {
    type: "TABLE_SUPLIER_LOADING"
}}

export const fetched = (listSuplier) => {return {
    type: "TABLE_SUPLIER_FETCHED",
    listSuplier: listSuplier
}}

export const fetchSuplier = () => {return dispatch => {
    dispatch(loading())
    axios.get("http://localhost:8080/suplier").then(response => {
        let listSuplier = []
        response.data.data.map(value => {
            listSuplier.push(value)
        })
        dispatch(fetched(listSuplier))
    })
}}