import { DELETE_USER } from "./types"




export const deleteUser = (profile) => {
    return dispatch => {
        return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/users/${profile.id}`, {
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


// export const deleteUser = (profile) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/users/${profile.id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include",
//             body: JSON.stringify(profile)
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 dispatch({ type: DELETE_USER, payload: data.user.data.attributes, interests: data.interests })
//             })
//     }
// }