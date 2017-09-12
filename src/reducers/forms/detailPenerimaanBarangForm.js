const detailPenerimaanBarangForm = (state = {
    tanggalPenerimaan: "",
    suplier: {id: "", nama: ""},
    checker: {id: "", nama: ""}
}, action) => {
    switch(action.type){
        case "DETAIL_PENERIMAAN_BARANG_FORM_ON_TANGGAL_PENERIMAAN_CHANGE":
            return Object.assign({}, state, {tanggalPenerimaan: action.value})
        case "DETAIL_PENERIMAAN_BARANG_FORM_ON_SUPLIER_ID_CHANGE":
            return Object.assign({}, state, {suplier: {id: action.value, nama: ""}})
        case "DETAIL_PENERIMAAN_BARANG_FORM_FETCHED_SUPLIER":
            return Object.assign({}, state, {suplier: action.suplier})
        case "DETAIL_PENERIMAAN_BARANG_FORM_ON_CHECKER_ID_CHANGE":
            return Object.assign({}, state, {checker: {id: action.value, nama: ""}})
        case "DETAIL_PENERIMAAN_BARANG_FORM_FETCHED_CHECKER":
            return Object.assign({}, state, {checker: action.checker})
        case "DETAIL_PENERIMAAN_BARANG_FORM_CLEAR":
            return Object.assign({}, state, {
                tanggalPenerimaan: "",
                suplier: {id: "", nama: ""},
                checker: {id: "", nama: ""}
            })
        default:
            return state;
    }
}
export default detailPenerimaanBarangForm;