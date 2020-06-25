import { SIGNUP } from "./types"

export const signupUser = (formData, ownProps) => {
    return dispatch => {
        return fetch("https://lets-kari-to-the-next.herokuapp.com/api/v1/users", {
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
                data.status === 200 ? dispatch({ type: SIGNUP, payload: data.user.data.attributes, interests: data.interests },
                    ownProps.history.push(`/my-profile/${data.user.data.attributes.id}`)) : ownProps.history.push("/signup")
            })
    }
}

