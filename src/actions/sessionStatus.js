import { LOGGED_IN, LOGGED_OUT, BASE_URL } from "./types"

var myHeaders = new Headers() 
myHeaders.append("Allow-Control-Allow-Origin", 'https://lets-meetup-app.herokuapp.com')
myHeaders.append("Access-Control-Allow-Credentials", "true")

export const sessionStatus = () => {
    return dispatch => {
      return fetch(`${BASE_URL}/api/v1/session/status`, {
          mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            myHeaders,
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                data.logged_in ? dispatch({ type: LOGGED_IN, user: data.user.data.attributes, interests: data.interests }) : dispatch({ type: LOGGED_OUT, payload: data })
            })
    }
}

