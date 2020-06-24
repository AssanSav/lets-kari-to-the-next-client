import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"


const NavBarComponent = (props) => {

  const handleClick = () => {
    const { logoutUser, status, user } = props
    if (status) {
        logoutUser(user.id)
    }
  }

  return (
      <div className="header">
          <div className="navbar">
            <>
                {props.status ?
                    <ul >
                        <li className="link" style={{ float: "right" }}>
                            <Link  to="/" onClick={(e) => handleClick(e)} >Logout</Link>
                        </li>
                        
                        <li className="link" style={{ float: "right" }}>
                              <Link to="/matches">Matches</Link>
                        </li>
                            
                        <li className="link" style={{ float: "right" }}>
                              <Link to={`/my-profile/${props.user.id}`}>| Welcome, {props.user.username} |</Link>
                        </li>

                        <li className="link" style={{ float: "left" }}>
                              <Link to="/sent-messages"> Outbox</Link>
                        </li>
                        
                        <li className="link" style={{ float: "left" }}>
                              <Link to="/received-messages">Inbox</Link>
                        </li>
                        
                        <li className="link" style={{ float: "left" }}>
                              <Link to="/users">Users </Link>
                        </li>
                    </ul> :
                    <div>
                          <li className="link" style={{ float: "left" }}>
                        <Link to="/signup" style={{color:"gray"}}>Signup</Link>
                    </li>
                          
                    <li className="link" style={{ float: "left" }}>
                        <Link to="/login">Login</Link>
                    </li>
                    </div>
                }
            </>
          </div>
      </div>
  )
}

export default connect(null, {logoutUser})(NavBarComponent)



