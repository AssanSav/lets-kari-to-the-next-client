import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";
import Pagination from "../common/Pagination"
import paginate from "../utils/paginate"

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      orientation: "",
      users: [],
      pageSize: 5, 
      currentPage: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
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
          return (
            user.gender.includes(gender) && user.orientation.includes(orientation)
          )
        }),
        gender: "",
        orientation: ""
      })
    }
  }

  render() {
    const {
      gender,
      orientation, 
      pageSize,
      currentPage
    } = this.state;

    const { users } = this.props
    
    if (users.length === 0 || !users) return <div></div>;
      const paginatedUsers = paginate(users, currentPage, pageSize)
      return (
        <>
          <br /> <br />
          <h2 style={{ textAlign: "center", color: "blue" }}>
            <strong>Let's Hangout!!!</strong>
          </h2>
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
                  placeholder=" Gender"
                  onChange={this.handleChange}
                >
                  <option value="">
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
                  <option value="" >
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
          <h2 style={{ textAlign: "center", color: "yellow" }}>
            <strong>Users</strong>
          </h2>{" "}
          <br />
          <br />
          {this.state.users.length > 0
            ? this.state.users.map((user) => (
                <span key={user.id}>
                  {" "}
                  <UserCard user={user} />
                </span>
              ))
            : paginatedUsers.map((user) => (
                <span key={user.id}>
                  {" "}
                  <UserCard user={user} />
                </span>
              ))}
              <Pagination usersCount={users.length} currentPage={currentPage}  pageSize={pageSize} onPageChange={this.handlePageChange}/>
        </>
      );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    users: usersReducer.users
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

