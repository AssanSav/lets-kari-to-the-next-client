import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUsers} from '../actions/fetchUsers';
import UsersList from "../components/UsersList";



class UsersContainer extends Component {

  componentDidMount() {
      this.props.fetchUsers()
  }

  render() {
      if (this.props) {
          return (
              <div>
                  <UsersList users={this.props.users} interests={this.props.interests}/>
              </div>
          )
      }
  }
}


const mapStateToProps = ({ usersReducer, interestsReducer}) => {
  return {
      users: usersReducer.users,
      interests: interestsReducer.interests
  }
}
export default connect(mapStateToProps, {fetchUsers})(UsersContainer)