import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


const NavBar = (props) => {

  const handleClick = () => {
    const { logoutUser, status, user } = props
    if (status) {
        logoutUser(user.id)
    }
  }

  return (
    <div >
        <ul className="nav_bar">
        {props.status 
            ?
            <div className="logout">
                <li >
                <Link to="/" onClick={(e) => handleClick(e)}>
                    Logout
                </Link>
            </li>
            <li >
                <Link to="/matches">
                    Matches
                </Link>
            </li>
            <li>
                <Link to="/sent-messages">
                    Outbox
                </Link>
            </li>
            <li>
                <Link to="/received-messages">
                    Inbox
                </Link>
            </li>
            <li>
                <Link to="/users">
                    Users
                </Link>
            </li>
            <li >
                <Link to={`/my-profile/${props.user.id}`}>
                    | Welcome, {props.user.username} |
            </Link>
            </li>
            </div>
            :
            <div>
            <li>
                <Link to="/signup">
                    Signup
                </Link>
            </li>
            <li>
                <Link to="/login">
                    Login
                </Link>
            </li>
            </div>
        }
        </ul>
    </div>
  )
}

export default connect(null, {logoutUser})(NavBar)




