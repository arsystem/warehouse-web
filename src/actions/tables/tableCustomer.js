import * as axios from "axios";
import {BASE_API_URL} from "../../config"

const loading = () => {return {type: "TABLE_CUSTOMER_LOADING"}}
const fetched = (listCustomer) => {return {type: "TABLE_CUSTOMER_FETCHED", listCustomer: listCustomer}}
export const fetchCustomer = () => {return (dispatch) => {
    dispatch(loading())

    axios.get(`${BASE_API_URL}/customer`).then(response => {
        let listCustomer = []
        response.data.data.map(value => {
            listCustomer.push(value)
        })
        dispatch(fetched(listCustomer))
    })
}}