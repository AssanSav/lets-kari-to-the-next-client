import { FETCH_MATCHES } from "./types"


export const fetchMatches = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/matches", {
        headers: {
            "Conent-Type": "application/json",
            "Accept": "application/json"
        },
        credentials: "include"
        })
        .then(resp => resp.json())
        .then(({ matches}) => {
            dispatch({ type: FETCH_MATCHES, payload: matches})
        })
    }
}