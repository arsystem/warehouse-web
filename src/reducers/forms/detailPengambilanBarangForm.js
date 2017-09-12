const detailPengambilanBarangForm = (state = {
    tanggalPengambilan: "",
    customer: {id: "", nama: ""},
    checker: {id: "", nama: ""}
}, action) => {
    switch(action.type){
        case "DETAIL_PENGAMBILAN_BARANG_FORM_ON_TANGGAL_PENGAMBILAN_CHANGE":
            return Object.assign({}, state, {tanggalPengambilan: action.value})
        case "DETAIL_PENGAMBILAN_BARANG_FORM_ON_CUSTOMER_ID_CHANGE":
            return Object.assign({}, state, {customer: {id: action.value, nama: ""}})
        case "DETAIL_PENGAMBILAN_BARANG_FORM_FETCHED_CUSTOMER":
            return Object.assign({}, state, {customer: action.customer})
        case "DETAIL_PENGAMBILAN_BARANG_FORM_ON_CHECKER_ID_CHANGE":
            return Object.assign({}, state, {checker: {id: action.value, nama: ""}})
        case "DETAIL_PENGAMBILAN_BARANG_FORM_FETCHED_CHECKER":
            return Object.assign({}, state, {checker: action.checker})
        case "DETAIL_PENGAMBILAN_BARANG_FORM_CLEAR":
            return Object.assign({}, state, {
                tanggalPengambilan: "",
                customer: {id: "", nama: ""},
                checker: {id: "", nama: ""}
            })
        default:
            return state;
    }
}
export default detailPengambilanBarangForm;