import React, {Component} from "react";
import { logoutUser } from "../actions/logoutUser";
import { sessionStatus } from "../actions/sessionStatus"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

class NavBar extends Component {

  componentDidMount() {
    this.props.sessionStatus();
  }
 

 handleClick = () => {
    const { logoutUser, status, user, history } = this.props;
    if (status) {
      logoutUser(user.id).then(() => {
        history.push("/login");
      });
    }
  };

  render() { 
    const {status, user} = this.props

    return ( <nav className="navbar">
      {status ? (
        <>
          <span style={{ float: "left" }}>
            <Link to="/sent-messages">Outbox</Link>
            <Link to="/received-messages">Inbox</Link>
            <Link to="/users">Users</Link>
          </span>
          <span style={{ float: "right" }}>
            <Link to={`/my-profile/${user.id}`}>
              Welcome, {user.username}
            </Link>{" "}
            <Link to="/matches">Matches </Link>
            <Button variant="danger" onClick={this.handleClick}>
              Logout
            </Button>
          </span>
        </>
      ) : (
        <>
          <span style={{float: "left"}}>
          <h2 style={{ color: "red"}}>
            Let's Meetup!
          </h2>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </span>
        </>
      )}
    </nav> );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    status: usersReducer.status,
    user: usersReducer.user,
  };
};


export default withRouter(connect(mapStateToProps, { logoutUser, sessionStatus })(NavBar));

