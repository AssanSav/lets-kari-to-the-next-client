import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      orientation: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
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
    const { gender, orientation} = this.state
    if (gender !== "" || orientation !== "") {
      this.setState({
        users: this.props.users.filter((user) => {
          if (user.gender || user.orientation) {
            return (
              user.gender.includes(gender) && user.orientation.includes(orientation)
            )
          }
        }),
        gender: "",
        orientation: ""
      })
    }
  }

  render() {
    const {
      gender,
      orientation
    } = this.state;

    const { users } = this.props

    if (users.length === 0 || !users) {
        return <div></div>;
    } else {
      return (
        <>
          <h2 style={{ textAlign: "center", color: "blue" }}>
            <strong>Let's Hangout!!!</strong>
          </h2>
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
                    <option value="Transgender">Transgender</option>
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
              <br />
              <Button variant="success" type="submit">
                Search
              </Button>
            </Form>
          </div>
          <h2 style={{ textAlign: "center", color: "yellow" }}>
            <strong>Users</strong>
          </h2>
          <div className="container">
            {this.state.users.length > 0
              ? this.state.users.map((user) => (
                  <span key={user.id}>
                    {" "}
                    <UserCard user={user} />
                  </span>
                ))
              : users.map((user) => (
                  <span key={user.id}>
                    {" "}
                    <UserCard user={user} />
                  </span>
                ))}
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    users: usersReducer.users
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

