import { LOGOUT, BASE_URL  } from "./types"


export const logoutUser = (id) => {
  return dispatch => {
      return fetch(`${BASE_URL}/api/v1/logout/${id}`, {
          method: "DELETE",
          credentials: "include"
      })
          .then(resp => dispatch({ type: LOGOUT }))
  }
}

