import { LOGGED_IN, LOGGED_OUT } from "./types"


export const sessionStatus = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/session/status", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include"
        }) 
        .then(resp => resp.json())
        .then(data => {
            data.logged_in ? dispatch({ type: LOGGED_IN, user: data.user.data.attributes, interests: data.interests }) : dispatch({ type: LOGGED_OUT, payload: data })
        })
    }
}