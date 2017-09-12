import * as axios from "axios";

const loading = () => {return {type: "TABLE_USER_LOADING"}}
const fetched = (listUser) => {return {type: "TABLE_USER_FETCHED", listUser: listUser}}
export const fetchUser = () => {return (dispatch) => {
    dispatch(loading())

    axios.get("http://localhost:8080/user").then(response => {
        let listUser = []
        response.data.data.map(value => {
            listUser.push(value)
        })
        dispatch(fetched(listUser))
    })
}}