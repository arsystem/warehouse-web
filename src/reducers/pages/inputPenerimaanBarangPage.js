const inputPenerimaanBarangPage = (state = {
    isSaving: false,
    isError: false,
    isSuccess: false,
    errorMessage: ""
}, action) => {
    switch(action.type){
        case "INPUT_PENERIMAAN_BARANG_SAVING": 
            return Object.assign({}, state, {isSaving: true, isError: false, isSuccess: false})
        case "INPUT_PENERIMAAN_BARANG_SAVED":
            return Object.assign({}, state, {isSaving: false, isError: false, isSuccess: true})
        case "INPUT_PENERIMAAN_BARANG_SHOW_ERROR":
            return Object.assign({}, state, {isSaving: false, isError: true, isSuccess: false, errorMessage: action.errorMessage})
        default:
            return state;
    }
}
export default inputPenerimaanBarangPage;