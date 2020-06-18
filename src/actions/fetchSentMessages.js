import { FETCH_SENT_MESSAGES } from "./types"


export const fetchSentMessages = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/messages-outbox", {
            headers: {
                "Conent-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
            })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: FETCH_SENT_MESSAGES, sentMessages: data.sent_messages.data.map(m => m.attributes) })
        })
    }
}