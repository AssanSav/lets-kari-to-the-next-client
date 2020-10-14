import { CREATE_MESSAGE, FAILED_TO_CREATE, BASE_URL } from "./types"


  export const createMessage = (formData) => {
    return dispatch => {
      return fetch(`${ BASE_URL }/messages`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formData)
      })
        .then(resp => resp.json())
        .then(data => {  
          data.status !== 409 ? dispatch({ type: CREATE_MESSAGE, message: data.message }) : dispatch({type: FAILED_TO_CREATE, payload: data.error})
        })
    }
  }

