import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import { searchUsers } from "../actions/searchUsers";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      maxAge: "",
      gender: "",
      orientation: "",
      ethnicity: "",
      maxHeight: "",
      heightLimit: "",
      body_shape: "",
      children: "",
      relationship: "",
      education: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state);
    this.setState({
      city: "",
      maxAge: "",
      gender: "",
      orientation: "",
      ethnicity: "",
      maxHeight: "",
      heightLimit: "",
      body_shape: "",
      children: "",
      relationship: "",
      education: "",
    });
  }

  render() {
    const {
      education,
      city,
      maxAge,
      gender,
      orientation,
      ethnicity,
      maxHeight,
      body_shape,
      children,
      relationship,
    } = this.state;

    if (this.props.users === [] || !this.props.users) {
      return <div></div>;
    } else {
      return (
        <>
          <h2 style={{ textAlign: "center" }}>Let's Hangout!!!</h2>
          <div>
            <Form
              onSubmit={this.handleSubmit}
              className="form"
              style={{ backgroundColor: "black" }}
            >
              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={gender}
                    placeholder=""
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    name="orientation"
                    value={orientation}
                    placeholder=""
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Orientation
                    </option>
                    <option value="Gay">Gay</option>
                    <option value="Straight">Straight</option>
                    <option value="Lesbian">Lesbian</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    name="ethnicity"
                    value={ethnicity}
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Ethnicity
                    </option>
                    <option value="Hispanic or Latino">
                      Hispanic or Latino
                    </option>
                    <option value="Black/African descent">
                      Black/African descent
                    </option>
                    <option value="White">White</option>
                    <option value="Asian/Pacific Islander">
                      Asian/Pacific Islander
                    </option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    name="body_shape"
                    value={body_shape}
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Body Shape
                    </option>
                    <option value="Athletic">Athletic</option>
                    <option value="Curvy">Curvy</option>
                    <option value="Skinny">Skinny</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    name="relationship"
                    value={relationship}
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Relationship
                    </option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="In a Relationship">In a Relationship</option>
                    <option value="Engaged">Engaged</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    name="education"
                    value={education}
                    onChange={this.handleChange}
                  >
                    <option disabled value="" selected hidden>
                      Education
                    </option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Some College">Some College</option>
                    <option value="High School">High School</option>
                    <option value="Did not complete High School">
                      Did not complete High School
                    </option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control
                    placeholder="Age"
                    type="text"
                    name="maxAge"
                    value={maxAge}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Height"
                    type="text"
                    name="maxHeight"
                    value={maxHeight}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control
                    placeholder="City"
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Children"
                    type="text"
                    name="children"
                    value={children}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>

              <div />
              <br />
              <Button variant="success" type="submit">
                Search
              </Button>
            </Form>
          </div>
          <h2 style={{ textAlign: "center" }}>Users</h2>
          <div className="container">
            {this.props.users.length > 0 ? (
              this.props.users.map((user) => (
                <span key={user.id}>
                  {" "}
                  <UserCard user={user} />
                </span>
              ))
            ) : (
              <h4 style={{ color: "red" }}>No Record Found!</h4>
            )}
          </div>
        </>
      );
    }
  }
}

export default connect(null, { searchUsers })(UsersList);
