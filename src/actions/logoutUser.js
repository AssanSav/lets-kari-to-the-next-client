import { LOGOUT } from "./types"

export const logoutUser = (id) => {
    return dispatch => {
        return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/logout/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include"
        })
            .then(resp => dispatch({ type: LOGOUT }))
    }
}


// export const logoutUser = (id) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/logout/${id}`, {
//             method: "DELETE",
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             },
//             credentials: "include"
//         })
//         .then(resp => dispatch({ type: LOGOUT }))
//     }
// }