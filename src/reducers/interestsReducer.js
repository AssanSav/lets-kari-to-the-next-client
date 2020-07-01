import { FETCH_INTERESTS, LOGGED_IN, LOGOUT, SIGNUP, LOGIN, EDIT_PROFILE, FETCH_PROFILE, UPLOAD_PHOTO, FETCH_USERS } from "../actions/types";

const interestsReducer = (state = { interests: [], profileInterests: [] }, action) => {
  const { payload, interests, type } = action 
  
  switch (type) {
      case FETCH_INTERESTS: 
          return {
              ...state,
              interests: payload
          }
      
      case LOGGED_IN: 
          return {
              ...state,
              interests: interests
          }
      
    case LOGOUT: 
      return {
        interests: [],
        profileInterests: []
      }
    
      case SIGNUP:
          return {
              ...state,
              interests: interests
          }
      
      case EDIT_PROFILE:
          return {
              ...state,
              interests: interests
          }
      
      case FETCH_PROFILE: 
          return {
              ...state,
              profileInterests: interests
          }
      
      case LOGIN: 
          return {
              ...state,
              interests: interests
          }
      
      case UPLOAD_PHOTO:
          return {
              ...state,
              interests: interests
          }
      
      case FETCH_USERS:
          return {
              ...state,
              interests: interests
          }
      default: {
          return state
          }
  }
}

export default interestsReducer 