import { FETCH_RECEIVED_MESSAGES, BASE_URL } from "./types"


export const fetchReceivedMessages = () => {
  return dispatch => {
    return fetch(`${ BASE_URL }/messages-inbox`, {
      headers: {
        "Conent-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
            type: FETCH_RECEIVED_MESSAGES, receivedMessages: data.received_messages.data.map(m => m.attributes)
        })
      })
  }
}

