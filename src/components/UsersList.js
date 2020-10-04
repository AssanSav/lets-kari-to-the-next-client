import React, { Component } from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";
import Pagination from "../common/Pagination";
import paginate from "../utils/paginate";
import ListGroup from "../common/ListGroup";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      genders: [],
      selectedGender: "",
      pageSize: 5,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.setState({
      genders: ["All Genders", "Male", "Female"],
      users: this.props.fetchUsers(),
    });
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleOnGenderSelect = (gender) => {
    this.setState({ selectedGender: gender, currentPage: 1 });
  };

  render() {
    const { genders, selectedGender, pageSize, currentPage } = this.state;

    const { users } = this.props;

    if (!users) return <div></div>;

    const filteredByGender =
      selectedGender === "Male" || selectedGender === "Female"
        ? users.filter((user) => user.gender === selectedGender)
        : users;

    const paginatedUsers = paginate(filteredByGender, currentPage, pageSize);

    return (
      <>
        <div className="col-5">
          <h2 style={{ textAlign: "center", color: "blue" }}>
            <strong>Let's Hangout!!!</strong>
          </h2>
          <ListGroup
            genders={genders}
            selectedGender={selectedGender}
            OnGenderSelect={this.handleOnGenderSelect}
          />
        </div>
        <br />
        <br />
        {paginatedUsers.map((user) => (
          <span key={user.id}>
            {" "}
            <UserCard user={user} />
          </span>
        ))}
        {/* } */}
        <Pagination
          usersCount={filteredByGender.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    users: usersReducer.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
