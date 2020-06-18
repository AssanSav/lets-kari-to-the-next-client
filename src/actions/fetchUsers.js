import { FETCH_USERS } from "./types"



export const fetchUsers = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/users", {
            headers: {
                "Conent-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
            })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: FETCH_USERS, users: data.users.data.map(m => m.attributes) })
        })
    }
}