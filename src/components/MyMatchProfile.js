import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../actions/fetchProfile";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyMatchProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.routerProps.match.params.id);
  }

  render() {
    if (!this.props.profile) {
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
      } = this.props.profile;
      return (
        <div className="my-profile" style={{ backgroundColor: "gray" }}>
          <div className="avatar_flip">
            <img className="profile_pic" src={image} alt="" />
          </div>
          <h2>
            <strong>{username}</strong>
          </h2>
          <h2>Bio</h2>
          <p className="bio">{bio}</p>
          <table
            className="table"
            style={{ color: "black", backgroundColor: "white" }}
          >
            <tbody>
              <tr>
                <td>
                  <strong>City:</strong> {city}
                </td>
                <td>
                  <strong>Age:</strong> {age}{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gender:</strong> {gender}{" "}
                </td>
                <td>
                  <strong>Orientation:</strong> {orientation}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Relationship:</strong> {relationship}
                </td>
                <td>
                  <strong>Children:</strong> {children}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Height:</strong> {height}
                </td>
                <td>
                  <strong>Body Shape:</strong> {body_shape}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ethnicity:</strong> {ethnicity}
                </td>
                <td>
                  <strong>Education:</strong> {education}
                </td>
              </tr>
            </tbody>
          </table>
          <h4>
            <strong>Interested In:</strong>
          </h4>
          <h2>
            {this.props.interests.map((int) => (
              <span key={int.id}>{int.name}&nbsp; </span>
            ))}
          </h2>
          <Link to={`/match-new-message/${id}`}>
            <Button variant="success">Send Message</Button>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ usersReducer, interestsReducer }) => {
  return {
    profile: usersReducer.profile,
    interests: interestsReducer.profileInterests,
  };
};

export default connect(mapStateToProps, { fetchProfile })(MyMatchProfile);
