import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions/signupUser";
import { fetchInterests } from "../actions/fetchInterests";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      gender: "",
      visibility: "",
      interest_ids: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCkecked = this.handleCkecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchInterests();
  }

  handleCkecked(e) {
    let interestsChecked = this.state.interest_ids;
    let interestValue = e.target.value;

    if (e.target.checked === true) {
      interestsChecked.push(interestValue);
      this.setState({
        interest_ids: interestsChecked,
      });
    } else {
      let interestIndex = interestsChecked.indexOf(interestValue);
      interestsChecked.splice(interestIndex, 1);

      this.setState({
        interest_ids: interestsChecked,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signupUser(this.state);
  }

  handleChange(e) {
    if (e.target) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        interest_ids: e.value,
      });
    }
  }

  render() {
    const {
      email,
      username,
      password,
      password_confirmation,
      visibility,
      gender,
      orientation,
    } = this.state;

    return (
      <div
        className="form"
        style={{
          display: "block",
          width: "500px",
          float: "center",
          backgroundColor: "black",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontStyle: "bold",
            width: "100%",
            padding: "0%",
          }}
        >
          Create Account!
        </h4>
        <ul>
          <Form onSubmit={this.handleSubmit} className="signup">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="username required!"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{this.props.usernameError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="email required!"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{this.props.emailError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="select"
                name="gender"
                value={gender}
                placeholder=""
                onChange={this.handleChange}
              >
                <option>Gender required!</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </Form.Control>
              <div style={{ color: "red" }}>{this.props.genderError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="select"
                name="orientation"
                value={orientation}
                placeholder=""
                onChange={this.handleChange}
              >
                <option>Orientation</option>
                <option value="Gay">Gay</option>
                <option value="Straight">Straight</option>
                <option value="Lesbian">Lesbian</option>
              </Form.Control>
              <div style={{ color: "red" }}>{this.props.orientationError}</div>
            </Form.Group>

            <div className="check-me">
              <label>
                <strong style={{ color: "red" }}>Select Interests!</strong>
              </label>{" "}
              <br />
              <div className="interests">
                {this.props.interests.map((interest, index) => {
                  return (
                    <span key={interest.id}>
                      <input
                        id={"index_" + index}
                        type="checkbox"
                        value={interest.id}
                        onChange={this.handleCkecked}
                      />
                      {interest.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div style={{ color: "red" }}>{this.props.orientationError}</div>
            <br />
            <br />

            <Form.Group>
              <Form.Control
                as="select"
                name="visibility"
                value={visibility}
                onChange={this.handleChange}
              >
                <option>Choose Yes To Be Seen Publicly</option>
                <option value="true">Yes</option>
                <option value="talse">No</option>
              </Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Form.Control
                  placeholder="password required!"
                  type="password"
                  name="password"
                  autoComplete={password}
                  value={password}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.props.passwordError}</div>
              </Col>

              <Col>
                <Form.Control
                  placeholder="Confirm Password!"
                  type="password"
                  name="password_confirmation"
                  autoComplete={password_confirmation}
                  value={password_confirmation}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>
                  {this.props.passwordConfirmationError}
                </div>
              </Col>
            </Row>
            <div />
            <br />
            <Button variant="success" type="submit">
              Signup
            </Button>
          </Form>
          <span className="bottom_link" style={{ color: "antiquewhite" }}>
            Have an account!
            <Link to="/login">Login</Link>
          </span>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, interestsReducer }) => {
  const {
    user,
    emailError,
    usernameError,
    passwordError,
    passwordConfirmationError,
    genderError,
    orientationError,
    interestError,
  } = usersReducer;

  return {
    interests: interestsReducer.interests,
    user: user,
    emailError: emailError,
    usernameError: usernameError,
    passwordError: passwordError,
    passwordConfirmationError: passwordConfirmationError,
    genderError: genderError,
    orientationError: orientationError,
    interestError: interestError,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signupUser: (formData) => dispatch(signupUser(formData, ownProps)),
    fetchInterests: () => dispatch(fetchInterests()),
  };
};

const custumComponentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default withRouter(custumComponentConnect);
