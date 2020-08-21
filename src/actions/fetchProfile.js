import { FETCH_PROFILE, BASE_URL } from './types'


export const fetchProfile = (id) => {
  return dispatch => {
    return fetch(`${BASE_URL}/api/v1/users/${id}`, {
      headers: {
        "Set-Cookie": "samesite=none; secure",
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_PROFILE,
          payload: data.user.data.attributes,
          interests: data.interests,
        });
      });
  }
}


