import { FETCH_RECEIVED_MESSAGES } from "./types"

export const fetchReceivedMessages = () => {
    return dispatch => {
        return fetch("https://lets-kari-to-the-next.herokuapp.com/api/v1/messages-inbox", {
            headers: {
                "Conent-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: FETCH_RECEIVED_MESSAGES, receivedMessages: data.received_messages.data.map(m => m.attributes)
                })

            })
    }
}


// export const fetchReceivedMessages = () => {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/messages-inbox", {
//             headers: {
//                 "Conent-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include"
//             })
//             .then(resp => resp.json())
//             .then(data => {
//                 dispatch({
//                     type: FETCH_RECEIVED_MESSAGES, receivedMessages: data.received_messages.data.map(m => m.attributes)})
            
//         })
//     }
// }