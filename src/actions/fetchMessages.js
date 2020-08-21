import { FETCH_MESSAGES, BASE_URL } from "./types"


export const fetchMessages = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/api/v1/messages`, {
      headers: {
        "Set-Cookie":
          "widget_session=_lets-kari-to-the-next; SameSite=None; Secure",
        "Conent-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then(({ messages }) => {
        dispatch({ type: FETCH_MESSAGES, messages: messages.data });
      });
  }
}
