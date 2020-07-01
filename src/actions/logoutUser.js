import { LOGOUT, BASE_URL  } from "./types"


export const logoutUser = (id) => {
  return dispatch => {
      return fetch(`${BASE_URL}/api/v1/logout/${id}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          credentials: "include"
      })
        .then(resp => resp.json())
          .then(({ user }) => {
            dispatch({ type: LOGOUT, user: user })
          })
  }
}

