import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteUser } from "../actions/deleteUser";

const MyProfile = (props) => {
  const removeUser = () => {
    props.deleteUser(props.user).then(() => {
      props.history.push("/signup");
    });
  };

  if (!props.user) {
    return <div></div>;
  } else {
    const {
      id,
      age,
      image,
      username,
      city,
      gender,
      orientation,
      ethnicity,
      height,
      body_shape,
      children,
      relationship,
      education,
      bio,
    } = props.user;

    const anchorTag = (
      <a style={{ color: "red" }} href={`/edit-profile/${props.user.id}`}>
        Complete
      </a>
    );

    return (
      <div className="my-profile" style={{backgroundColor: "gray"}}>
        <div className="avatar_flip">
          <img className="profile_pic" src={image} alt="" />
        </div>
        <h2>
          <strong>{username}</strong>
        </h2>
        <Link to={`/upload-photos/${id}`}>
          <strong style={{ color: "blue" }}>ADD PHOTO</strong>
        </Link>
        <h2>Bio</h2>
        <p className="bio">{bio}</p>
        <table
          className="table"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <tbody>
            <tr>
              <td>
                <strong>GENDER:</strong> {gender}{" "}
              </td>
              <td>
                <strong>ORIENTATION:</strong> {orientation}
              </td>
            </tr>

            <tr>
              <td>
                <strong>CITY:</strong> {!city ? anchorTag : city}
              </td>
              <td>
                <strong>AGE:</strong> {!age ? anchorTag : age}{" "}
              </td>
            </tr>

            <tr>
              <td>
                <strong>RELATIONSHIP:</strong>{" "}
                {!relationship ? anchorTag : relationship}
              </td>
              <td>
                <strong>KIDS:</strong> {!children ? anchorTag : children}
              </td>
            </tr>

            <tr>
              <td>
                <strong>HEIGHT:</strong> {!height ? anchorTag : height}
              </td>
              <td>
                <strong>BODY SHAPE:</strong>{" "}
                {!body_shape ? anchorTag : body_shape}
              </td>
            </tr>

            <tr>
              <td>
                <strong>ETHNICITY:</strong> {!ethnicity ? anchorTag : ethnicity}
              </td>
              <td>
                <strong>EDUCATION:</strong> {!education ? anchorTag : education}
              </td>
            </tr>
          </tbody>
        </table>
        <h4>
          <strong>Interested In:</strong>
        </h4>
        <h2>
          {props.interests.map((int) => (
            <span key={int.id}>{int.name}&nbsp; </span>
          ))}
        </h2>
        <div>
          <Button variant="success" href={`/edit-profile/${props.user.id}`}>
            Complete Or Edit Your Profile!
          </Button>
        </div>
        <Button
          variant="danger"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete your account?"))
              removeUser();
          }}
          style={{ marginTop: "10px" }}
        >
          Delete Account
        </Button>
      </div>
    );
  }
};

const mapStateToProps = ({ usersReducer, interestsReducer }) => {
  return {
    user: usersReducer.user,
    interests: interestsReducer.interests,
  };
};

export default connect(mapStateToProps, { deleteUser })(MyProfile);
