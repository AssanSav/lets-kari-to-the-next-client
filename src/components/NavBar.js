import React from "react";
import { logoutUser } from "../actions/logoutUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

const NavBarComponent = (props) => {
  const handleClick = () => {
    const { logoutUser, status, user } = props;
    if (status) {
      logoutUser(user.id).then(() => {
        props.history.push("/login");
      });
    }
  };

  return (
    <nav className="navbar">
      {props.status ? (
        <>
          <span style={{ float: "left" }}>
            <Link to="/users">Users</Link>
            <Link to="/sent-messages">Outbox</Link>
            <Link to="/received-messages">Inbox</Link>
            <Link to="/users">Users</Link>
          </span>
          <span style={{ float: "right" }}>
            <Link to={`/my-profile/${props.user.id}`}>
              Welcome, {props.user.username}
            </Link>{" "}
            <Link to="/matches">Matches </Link>
            <Button variant="danger" onClick={handleClick}>
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
    </nav>
  );
};

export default withRouter(connect(null, { logoutUser })(NavBarComponent));
