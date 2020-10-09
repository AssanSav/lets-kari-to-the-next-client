import { SIGNUP, BASE_URL, FAILED_SIGNUP } from "./types";

export const signupUser = (formData, ownProps) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.status === 200
          ? dispatch(
              {
                type: SIGNUP,
                payload: data.user.data.attributes,
                interests: data.interests,
              },
              ownProps.history.replace(
                `/edit-profile/${data.user.data.attributes.id}`
              )
            )
          : dispatch(
              {
                type: FAILED_SIGNUP,
                usernameError: data.username_error,
                emailError: data.email_error,
                passwordError: data.passwordError,
                passwordConfirmationError: data.password_confirmation_error,
                genderError: data.gender_error,
                orientationError: data.orientation_error,
                interestError: data.interest_error,
              },
              ownProps.history.push("/signup")
            );
      });
  };
};
