import { FETCH_RECEIVED_MESSAGES, BASE_URL } from "./types"


export const fetchReceivedMessages = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/api/v1/messages-inbox`, {
      headers: {
        "Set-Cookie":
          "widget_session=_lets-kari-to-the-next; SameSite=None; Secure",
        "Conent-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_RECEIVED_MESSAGES,
          receivedMessages: data.received_messages.data.map(
            (m) => m.attributes
          ),
        });
      });
  }
}

