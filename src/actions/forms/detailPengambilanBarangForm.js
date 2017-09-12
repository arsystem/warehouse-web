import * as axios from "axios"

export const clear =  () => {return {type: "DETAIL_PENGAMBILAN_BARANG_FORM_CLEAR"}}
export const onTanggalPengambilanChange = (value) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_FORM_ON_TANGGAL_PENGAMBILAN_CHANGE",
    value: value
}}

export const onCustomerIdChange = (value) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_FORM_ON_CUSTOMER_ID_CHANGE",
    value: value.toUpperCase()
}}

export const onCheckerIdChange = (value) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_FORM_ON_CHECKER_ID_CHANGE",
    value: value.toUpperCase()
}}

const fetchedCustomer = (customer) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_FORM_FETCHED_CUSTOMER",
    customer: customer
}}
export const fetchCustomer = (value) => {return (dispatch, getState) => {
    let customerId = getState().detailPengambilanBarangForm.customer.id
    axios.get(`http://localhost:8080/customer/${customerId}`).then(response => {
        dispatch(fetchedCustomer(response.data.data))
    })
}}

const fetchedChecker = (checker) => {return {
    type: "DETAIL_PENGAMBILAN_BARANG_FORM_FETCHED_CHECKER",
    checker: checker
}}
export const fetchChecker = (value) => {return (dispatchEvent, getState) => {
    let checkerId = getState().detailPengambilanBarangForm.checker.id;
    axios.get(`http://localhost:8080/user/${checkerId}`).then(response => {
        dispatchEvent(fetchedChecker(response.data.data))
    })
}}