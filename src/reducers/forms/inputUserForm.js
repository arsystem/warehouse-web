const inputUserForm = (state = {
    id: "",
    nama: "",
    password: "",
    errorMessage: "",
    isLoading: false,
    isSuccess: false,
    isError: false
}, action) => {
    switch(action.type){
        case "INPUT_USER_FORM_ON_ID_CHANGE":
            return Object.assign({}, state, {id: action.value, isLoading: false, isSuccess: false, isError: false})
        case "INPUT_USER_FORM_ON_PASSWORD_CHANGE":
            return Object.assign({}, state, {password: action.value, isLoading: false, isSuccess: false, isError: false})
        case "INPUT_USER_FORM_ON_NAMA_CHANGE":
            return Object.assign({}, state, {nama: action.value, isLoading: false, isSuccess: false, isError: false})
        case "INPUT_USER_FORM_LOADING":
            return Object.assign({}, state, {isLoading: true, isSuccess: false, isError: false})
        case "INPUT_USER_FORM_SHOW_SUCCESS":
            return Object.assign({}, state, {
                id: "",
                nama: "",
                password: "",
                isLoading: false,
                isSuccess: true, 
                isError: false
            })
        case "INPUT_USER_FORM_SHOW_ERROR":
            return Object.assign({}, state, {isLoading: false, isSuccess: false, isError: true, errorMessage: action.message})
        default:
            return state;
    }
}
export default inputUserForm;