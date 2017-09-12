const loginForm = (state = {
    barcode: "",
    namaBarang: "",
    isLoading: false,
    isFetched: false,
    isUpdated: false
}, action) => {
    switch(action.type){
        case "UBAH_BARANG_FORM_ON_BARCODE_CHANGE":
            return Object.assign({}, state, {barcode: action.value})
        case "UBAH_BARANG_FORM_ON_NAMA_BARANG_CHANGE":
            return Object.assign({}, state, {namaBarang: action.value})
        case "UBAH_BARANG_FORM_LOADING":
            return Object.assign({}, state, {isLoading: true, isFetched: false, isUpdated: false})
        case "UBAH_BARANG_FORM_UPDATED":
            return Object.assign({}, state, {
                isLoading: false,
                isFetched: false,
                isUpdated: true
            })
        case "UBAH_BARANG_FORM_FETCHED":
            return Object.assign({}, state, {
                isLoading: false,
                isFetched: true,
                isUpdated: false,
                barcode: action.barcode,
                namaBarang: action.namaBarang
            })
        default:
            return state;
    }
}
export default loginForm;