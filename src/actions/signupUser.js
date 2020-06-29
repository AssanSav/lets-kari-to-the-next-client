import { SIGNUP, BASE_URL } from "./types"

export const signupUser = (formData, ownProps) => {
    return dispatch => {
        return fetch(`${BASE_URL}/api/v1/users`, {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            // credentials: "include",
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
                data.status === 200 ? dispatch({ type: SIGNUP, payload: data.user.data.attributes, interests: data.interests },
                    ownProps.history.push(`/my-profile/${data.user.data.attributes.id}`)) : ownProps.history.push("/signup")
            })
    }
}

