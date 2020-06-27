import { LOGIN, BASE_URL} from "./types"

export const loginUser = (formData, ownProps) => {
    return dispatch => {
        return fetch(`${BASE_URL}/api/v1/login`, {
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
                data.status !== 409 ? dispatch({ type: LOGIN, user: data.user.data.attributes, interests: data.interests },
                ownProps.history.push(`/my-profile/${data.user.data.attributes.id}`)) : ownProps.history.push("/login")
        })
    }
}