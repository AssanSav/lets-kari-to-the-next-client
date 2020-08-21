import { FETCH_USERS, BASE_URL } from "./types"


export const fetchUsers = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/v1/users`, {
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
          type: FETCH_USERS,
          users: data.users.data.map((m) => m.attributes),
          interests: data.interests,
        });
      });
  };
};
