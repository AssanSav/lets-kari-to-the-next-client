import { CREATE_MESSAGE } from "./types"

export const createMessage = (formData) => {
    return dispatch => {
        return fetch("https://lets-kari-to-the-next.herokuapp.com/api/v1/messages", {
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
                dispatch({ type: CREATE_MESSAGE, message: data.message })
            })
    }
}


// export const createMessage = (formData) => {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/messages", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include",
//             body: JSON.stringify(formData)
//         })
//             .then(resp => resp.json())
//             .then(data => {
//                 dispatch({ type: CREATE_MESSAGE, message: data.message })
//             })
//     }
// }