import { FETCH_SENT_MESSAGES, BASE_URL } from "./types";

export const fetchSentMessages = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/v1/messages-outbox`, {
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
          type: FETCH_SENT_MESSAGES,
          sentMessages: data.sent_messages.data.map((m) => m.attributes),
        });
      });
  };
};
