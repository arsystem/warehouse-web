import * as axios from "axios"
import {BASE_API_URL} from "../../config"

import {updateLoggedIn} from "../global";

export const onUsernameChange = (username) => {return{
    type: "LOGIN_FORM_ON_USERNAME_CHANGE",
    value: username.toUpperCase()
}}

export const onPasswordChange = (password) => {return {
    type: "LOGIN_FORM_ON_PASSWORD_CHANGE",
    value: password
}}

const updateLoginStatus = (status) => {return {
    type: "LOGIN_FORM_UPDATE_LOGIN_STATUS",
    success: status === 200? true: false
}}

const loading = () => {return {
    type: "LOGIN_FORM_LOADING"
}}

export const onSubmit = () => {return (dispatch, getState) => {
    dispatch(loading())
    let username = getState().loginForm.username;
    let password = getState().loginForm.password;

    axios.post(`${BASE_API_URL}/login`, {
        id: username,
        password: password
    }).then(response => {
        dispatch(updateLoggedIn(response.status === 200? true: false, username))
        dispatch(updateLoginStatus(response.status))
    }).catch(error => {
        dispatch(updateLoggedIn(error.status === 200? true: false, null))
        dispatch(updateLoginStatus(error.status))
    })
}}
