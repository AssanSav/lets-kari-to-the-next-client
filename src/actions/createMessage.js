import { CREATE_MESSAGE, BASE_URL } from "./types"

export const createMessage = (formData) => {
    return dispatch => {
        return fetch(`${ BASE_URL }/api/v1/messages`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            // credentials: "include",
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: CREATE_MESSAGE, message: data.message })
            })
    }
}

