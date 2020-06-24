import { FETCH_PROFILE } from './types'


export const fetchProfile = (id) => {
  return dispatch => {
    return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/users/${id}`, {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: FETCH_PROFILE, payload: data.user.data.attributes, interests: data.interests })
      })
  }
}




// export const fetchProfile = (id) => {
//     return dispatch => {
//       return fetch(`http://localhost:3001/api/v1/users/${id}`, {
//         headers: {
//           "Content-type": "application/json",
//           "Accept": "application/json"
//         },
//         credentials: "include"
//         })
//         .then(resp => resp.json())
//         .then(data => {
//           dispatch({ type: FETCH_PROFILE, payload: data.user.data.attributes, interests: data.interests })
//         })
//     }
// }