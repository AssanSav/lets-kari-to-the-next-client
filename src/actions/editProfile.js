import { EDIT_PROFILE, BASE_URL } from "./types"


export const editProfile = (profile) => {
  return dispatch => {
    return fetch(`${BASE_URL}/api/v1/users/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Set-Cookie":
          "widget_session=_lets-kari-to-the-next; SameSite=None; Secure",
        "Content-type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(profile),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: EDIT_PROFILE,
          payload: data.user.data.attributes,
          interests: data.interests,
        });
      });
  }
}

