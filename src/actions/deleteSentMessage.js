import { DELETE_SENT_MESSAGE } from "./types"


export const deleteSentMessage = (message) => {

    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/messages/${message.id}/update_send_message`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(message )
        })
        .then(resp => resp.json())
            .then(data => {
                dispatch({ type: DELETE_SENT_MESSAGE, sentMessageToDelete: data.message })
            })
    }
}