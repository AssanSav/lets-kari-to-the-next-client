import { UPLOAD_PHOTO } from "./types"


export const uploadPhoto = (formData) => {
    return dispatch => {
        return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/avatars/${formData.user_id}`, {
            method: "PATCH",
            credentials: "include",
            body: formData
            })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: UPLOAD_PHOTO, payload: data.user.data.attributes, interests: data.interests})
        })
    }
}