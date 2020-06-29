import { LOGGED_IN, LOGGED_OUT, BASE_URL } from "./types"


export const sessionStatus = () => {
    return dispatch => {
        return fetch(`${BASE_URL}/api/v1/session/status`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Allow-Control-Allow-Origin": 'https://lets-meetup-app.herokuapp.com',
                "Access-Control-Allow-Credentials": "true"
            },
            credentials: "include",
        })
            .then(resp => resp.json())
            .then(data => {
                data.logged_in ? dispatch({ type: LOGGED_IN, user: data.user.data.attributes, interests: data.interests }) : dispatch({ type: LOGGED_OUT, payload: data })
            })
    }
}

