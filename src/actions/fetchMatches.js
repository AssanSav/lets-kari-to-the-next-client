import { FETCH_MATCHES, BASE_URL } from "./types"


export const fetchMatches = () => {
  return dispatch => {
    return fetch(`${BASE_URL}/matches`, {
      headers: {
        "Conent-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then(({ matches }) => {
        dispatch({ type: FETCH_MATCHES, payload: matches });
      });
  }
}

