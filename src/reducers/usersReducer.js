import {
  SIGNUP,
  SEARCH,
  FAILED_SIGNUP,
  FAILED_LOGIN,
  LOGGED_OUT,
  LOGGED_IN,
  LOGIN,
  LOGOUT,
  EDIT_PROFILE,
  FETCH_PROFILE,
  FETCH_USERS,
  UPLOAD_PHOTO,
  DELETE_USER,
} from "../actions/types";

const usersReducer = (
  state = {
    status: false,
    user: {},
    profile: {},
    users: [],
    emailError: "",
    usernameError: "",
    passwordError: "",
    passwordConfirmationError: "",
    genderError: "",
  },
  action
) => {
  const {
    payload,
    emailError,
    orientationError,
    interestError,
    genderError,
    passwordError,
    passwordConfirmationError,
    usernameError,
    user,
    users,
    type,
  } = action;
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        status: true,
        user: payload,
      };

    case FAILED_SIGNUP:
      return {
        ...state,
        emailError: emailError[0],
        usernameError: usernameError,
        passwordError: passwordError,
        passwordConfirmationError: passwordConfirmationError,
        genderError: genderError,
        orientationError: orientationError,
        interestError: interestError,
      };

    case FAILED_LOGIN:
      return {
        ...state,
        emailError: emailError,
        passwordError: passwordError,
      };

    case FETCH_USERS:
      return {
        ...state,
        users: users,
      };

    case LOGIN:
      return {
        ...state,
        status: true,
        user: user,
      };

    case LOGGED_IN:
      return {
        ...state,
        status: true,
        user: user,
      };

    case EDIT_PROFILE:
      return {
        ...state,
        user: payload,
      };

    case UPLOAD_PHOTO:
      return {
        ...state,
        status: true,
        user: payload,
      };

    case FETCH_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case LOGGED_OUT:
      return {
        ...state,
        status: false,
        user: {},
      };

    case LOGOUT:
      return {
        status: false,
        user: {},
      };

    case DELETE_USER:
      return {
        ...state,
        status: false,
        user: {},
      };

    case SEARCH:
      const {
        maxAge,
        maxHeight,
        education,
        city,
        gender,
        orientation,
        ethnicity,
        body_shape,
        children,
        relationship,
      } = payload;
      return {
        ...state,
        users: state.users.filter((u) => {
          if (
            u.gender ||
            u.orientation ||
            u.ethnicity ||
            u.body_shape ||
            u.relationship ||
            u.education ||
            u.age ||
            u.height
          ) {
            return (
              u.gender.includes(gender) &&
              u.orientation.includes(orientation) &&
              u.ethnicity.includes(ethnicity) &&
              u.body_shape.includes(body_shape) &&
              u.relationship.includes(relationship) &&
              u.education.includes(education) &&
              u.age >= maxAge &&
              u.height >= maxHeight &&
              u.city.includes(city) &&
              u.children.includes(children)
            );
          } else {
            return console.log("No User Found!");
          }
        }),
      };

    default: {
      return state;
    }
  }
};

export default usersReducer;
