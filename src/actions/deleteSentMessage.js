import { DELETE_SENT_MESSAGE, BASE_URL } from "./types"


export const deleteSentMessage = (message) => {
  return dispatch => {
    return fetch(
      `${BASE_URL}/api/v1/messages/${message.id}/update_send_message`,
      {
        method: "PATCH",
        headers: {
          "Set-Cookie":
            "widget_session=_lets-kari-to-the-next; SameSite=None; Secure",
          "Content-type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(message),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: DELETE_SENT_MESSAGE,
          sentMessageToDelete: data.message,
        });
      });
  }
}


