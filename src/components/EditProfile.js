import React, { Component } from "react";
import { connect } from "react-redux";
import { editProfile } from "../actions/editProfile";
import { Form, Button } from "react-bootstrap";

class EditProfile extends Component {
  constructor(props) {
    super();
    this.state = props.user 
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routerProps.match.params.id) {
      this.setState({
        user: nextProps.user
      });
    }
  }

  handleChange(e) {
    if (e.target) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.name]: e.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.routerProps.match.params.id) {
      this.props.editProfile(this.state).then(() => {
        this.props.routerProps.history.push(
          `/my-profile/${this.props.routerProps.match.params.id}`
        );
      });
    }
  }

  render() {
    const {
      username,
      gender,
      email,
      visibility,
      city,
      age,
      orientation,
      ethnicity,
      height,
      body_shape,
      children,
      relationship,
      education,
      bio,
    } = this.state;

    let visibilityChoice = ["true", "false"];
    return (
      <div className="form" style={{ backgroundColor: "black" }}>
        <h4>Edit Profile</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={gender}
              onChange={this.handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
            <div style={{ color: "red" }}>{this.props.genderError}</div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Orientation</Form.Label>
            <Form.Control
              as="select"
              name="orientation"
              value={orientation}
              onChange={this.handleChange}
            >
              <option value="Gay">Gay</option>
              <option value="Straight">Straight</option>
              <option value="Lesbian">Lesbian</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Relationship</Form.Label>
            <Form.Control
              as="select"
              name="relationship"
              value={relationship}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="In a Relationship">In a Relationship</option>
              <option value="Engaged">Engaged</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Kids</Form.Label>
            <Form.Control
              value={children}
              type="number"
              min={0}
              max={100}
              name="children"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Education</Form.Label>
            <Form.Control
              as="select"
              name="education"
              value={education}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Doctorate">Doctorate</option>
              <option value="Masters">Masters</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Some College">Some College</option>
              <option value="High School">High School</option>
              <option value="Did not complete High School">
                Did not complete High School
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Ethnicity</Form.Label>
            <Form.Control
              as="select"
              name="ethnicity"
              value={ethnicity}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Hispanic or Latino">Hispanic or Latino</option>
              <option value="Black/African descent">
                Black/African descent
              </option>
              <option value="White">White</option>
              <option value="Asian/Pacific Islander">
                Asian/Pacific Islander
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Body Shape</Form.Label>
            <Form.Control
              as="select"
              name="body_shape"
              value={body_shape}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Athletic">Athletic</option>
              <option value="Curvy">Curvy</option>
              <option value="Skinny">Skinny</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={age}
              type="number"
              min={15}
              max={100}
              name="age"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              name="height"
              autoComplete={height}
              value={height}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              autoComplete={city}
              value={city}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <label>
              <strong>Bio</strong>
            </label>{" "}
            <br />
            <Form.Control
              rows="7"
              cols="50"
              as="textarea"
              name="bio"
              onChange={this.handleChange}
              value={bio}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Want to go public?</Form.Label>
            <Form.Control
              as="select"
              name="visibility"
              value={visibility}
              onChange={this.handleChange}
            >
              {visibilityChoice.map((e, i) => (
                <option key={i + 1} value={e}>
                  {e}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button type="submit" value="Edit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, interestsReducer }) => {
  return {
    interests: interestsReducer.interests,
    user: usersReducer.user,
  };
};

export default connect(mapStateToProps, { editProfile })(EditProfile);
