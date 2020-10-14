import { FETCH_INTERESTS, BASE_URL } from "./types"


export const fetchInterests = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/interests`, {
      headers: {
        "Conent-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then(({ interests }) => {
        dispatch({ type: FETCH_INTERESTS, payload: interests });
      });
  };
};


