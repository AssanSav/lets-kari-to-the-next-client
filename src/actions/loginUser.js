import {LOGIN} from "./types"


export const loginUser = (formData, ownProps) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
                dispatch({ type: LOGIN, user: data.user.data.attributes, interests: data.interests },
                ownProps.history.push(`/my-profile/${data.user.data.attributes.id}`))
        })
    }
}