import { SIGNUP, FAILED_SIGNUP, FAILED_LOGIN, LOGGED_OUT, LOGGED_IN, LOGIN, LOGOUT, EDIT_PROFILE, FETCH_PROFILE, FETCH_USERS, UPLOAD_PHOTO, DELETE_USER} from "../actions/types"


const usersReducer = (state = { status: false, user: {}, profile: {}, users: [], emailError: "", usernameError: "", passwordError: "", passwordConfirmationError: "", genderError: "" }, action) => {
  const { payload, emailError, genderError, passwordError, passwordConfirmationError, usernameError, user, users, type } = action
  switch (type) {
      case SIGNUP:
          return {
          ...state,
          status: true,
          user: payload
          }
      
    case FAILED_SIGNUP: 
      return {
        ...state,
        emailError: emailError[0],
        usernameError: usernameError,
        passwordError: passwordError,
        passwordConfirmationError: passwordConfirmationError,
        genderError: genderError
      }
    
    case FAILED_LOGIN: 
      return {
        ...state,
        emailError: emailError,
        passwordError: passwordError
      }
    
      case FETCH_USERS: 
          return {
          ...state,
          users: users
          }

      case LOGIN:
          return {
          ...state,
          status: true,
          user: user
          }

      case LOGGED_IN:
          return {
          ...state,
          status: true,
          user: user
          }
      
      case EDIT_PROFILE: 
          return {
          ...state,
          user: payload
          }

      case UPLOAD_PHOTO:
          return {
          ...state,
          status: true,
          user: payload
          }
      
      case FETCH_PROFILE: 
          return {
          ...state,
          profile: payload
          }
      
      case LOGGED_OUT:
          return {
          ...state,
          status: false,
          user: {}
          }

      case LOGOUT:
          return {
          status: false,
          user: {}
          }

      case DELETE_USER: 
          return {
              ...state,
              status: false,
              user: {}
          }
      default: {
          return state
          }
  }
}

export default usersReducer