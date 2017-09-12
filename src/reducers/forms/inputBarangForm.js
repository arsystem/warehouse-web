const inputBarangForm = (state = {
    barcode: "",
    nama: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: ""
}, action) => {
    switch(action.type){
        case "INPUT_BARANG_FORM_ON_NAMA_CHANGE":
            return Object.assign({}, state, {nama: action.value, isError: false, isSuccess: false})
        case "INPUT_BARANG_FORM_ON_BARCODE_CHANGE":
            return Object.assign({}, state, {barcode: action.value, isError: false, isSuccess: false})
        case "INPUT_BARANG_FORM_LOADING":
            return Object.assign({}, state, {isLoading: true, loggedIn: false, isError: false, isSuccess: false})
        case "INPUT_BARANG_FORM_SHOW_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                isError: false,
                isSuccess: true,
                barcode: "",
                nama: ""
            })
        case "INPUT_BARANG_FORM_SHOW_ERROR":
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.message
            })
        default:
            return state;
    }
}
export default inputBarangForm;