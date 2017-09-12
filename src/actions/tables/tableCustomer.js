import * as axios from "axios";

const loading = () => {return {type: "TABLE_CUSTOMER_LOADING"}}
const fetched = (listCustomer) => {return {type: "TABLE_CUSTOMER_FETCHED", listCustomer: listCustomer}}
export const fetchCustomer = () => {return (dispatch) => {
    dispatch(loading())

    axios.get("http://localhost:8080/customer").then(response => {
        let listCustomer = []
        response.data.data.map(value => {
            listCustomer.push(value)
        })
        dispatch(fetched(listCustomer))
    })
}}