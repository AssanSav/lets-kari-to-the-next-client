import { EDIT_PROFILE } from "./types"


export const editProfile = (profile) => {
    return dispatch => {
        return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/users/${profile.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(profile)
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: EDIT_PROFILE, payload: data.user.data.attributes, interests: data.interests })
            })
    }
}


// export const editProfile = (profile) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/users/${profile.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include",
//             body: JSON.stringify(profile)
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 dispatch({ type: EDIT_PROFILE, payload: data.user.data.attributes, interests: data.interests})
//             })
//     }
// }