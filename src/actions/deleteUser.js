import { DELETE_USER, BASE_URL } from "./types"




export const deleteUser = (profile) => {
    return dispatch => {
        return fetch(`${BASE_URL}/api/v1/users/${profile.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(profile)
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: DELETE_USER, payload: data.user.data.attributes, interests: data.interests })
            })
    }
}

