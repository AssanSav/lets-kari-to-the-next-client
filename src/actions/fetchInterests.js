import { FETCH_INTERESTS } from "./types"


export const fetchInterests = () => {
    return dispatch => {
        return fetch("https://lets-kari-to-the-next.herokuapp.com/api/v1/interests", {
            headers: {
                "Conent-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(({ interests }) => {
                dispatch({ type: FETCH_INTERESTS, payload: interests })
            })
    }
}




// export const fetchInterests = () => {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/interests", {
//         headers: {
//             "Conent-Type": "application/json",
//             "Accept": "application/json"
//         },
//         credentials: "include"
//         })
//         .then(resp => resp.json())
//         .then(({ interests }) => {
//             dispatch({type: FETCH_INTERESTS, payload: interests})
//         })
//     }
// }