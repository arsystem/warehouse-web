const loginForm = (state = {
    username: "",
    password: "",
    isLoading: false,
    isError: false,
    loggedIn: false
}, action) => {
    switch(action.type){
        case "LOGIN_FORM_ON_USERNAME_CHANGE":
            return Object.assign({}, state, {username: action.value, isError: false})
        case "LOGIN_FORM_ON_PASSWORD_CHANGE":
            return Object.assign({}, state, {password: action.value, isError: false})
        case "LOGIN_FORM_LOADING":
            return Object.assign({}, state, {isLoading: true, loggedIn: false, isError: false})
        case "LOGIN_FORM_UPDATE_LOGIN_STATUS":
            if(action.success){
                return Object.assign({}, state, {loggedIn: true, isLoading: false, isError: false})
            }else{
                return Object.assign({}, state, {loggedIn: false, isLoading: false, isError: true})
            }
        default:
            return state;
    }
}
export default loginForm;