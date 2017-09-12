const inputSuplierForm = (state = {
    id: "",
    nama: "",
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: ""
}, action) => {
    switch(action.type){
        case "INPUT_SUPLIER_FORM_ON_ID_CHANGE":
            return Object.assign({}, state, {id: action.value, isSuccess: false, isError: false})
        case "INPUT_SUPLIER_FORM_ON_NAMA_CHANGE":
            return Object.assign({}, state, {nama: action.value, isSuccess: false, isError: false})
        case "INPUT_SUPLIER_FORM_LOADING":
            return Object.assign({}, state, {isLoading: true, isSuccess: false, isError: false})
        case "INPUT_SUPLIER_FORM_SHOW_SUCCESS":
            return Object.assign({}, state, {
                isSuccess: true,
                isLoading: false,
                isError: false,
                id: "",
                nama: ""
            })
        case "INPUT_SUPLIER_FORM_SHOW_ERROR":
            return Object.assign({}, state, {
                isSuccess: false,
                isLoading: false,
                isError: true,
                errorMessage: action.message
            })
        default:
            return state;
    }
}
export default inputSuplierForm;