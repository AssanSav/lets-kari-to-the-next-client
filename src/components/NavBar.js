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
                            <Link to="/" onClick={(e) => handleClick(e)} >Logout</Link>
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
                        <Link to="/signup">Signup</Link>
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



// import React from "react"
// import { logoutUser } from "../actions/logoutUser"
// import { connect } from "react-redux"
// import { Navbar, Nav, NavDropdown } from "react-bootstrap"

// const NavBarComponent = (props) => {

//     const handleClick = () => {
//         const { logoutUser, status, user } = props
//         if (status) {
//             logoutUser(user.id)
//         }
//     }

//     if (props.status) {
//         return (
//             <div className="header">
//                 <div className="navbar" >
//                     <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
//                         {props.status ? <Navbar.Brand href="/users">Let's Date!</Navbar.Brand> : <Navbar.Brand href="/login">Find A Date</Navbar.Brand>}
//                         {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
//                         {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
//                             <Nav >
//                                 <Nav.Link href="/users">
//                                     Users
//                                 </Nav.Link>
//                                 {/* <NavDropdown title="Messages" id="collasible-nav-dropdown">
//                                     <NavDropdown.Item href="/received-messages">Inbox</NavDropdown.Item>
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item href="/sent-messages">Outbox</NavDropdown.Item>
//                                 </NavDropdown> */}
//                             </Nav>
//                             <Nav>
//                                 <Nav.Link href="/matches">
//                                     Matches
//                             </Nav.Link>
//                             <Nav.Link href={`/my-profile/${props.user.id}`}>
//                                     | Welcome, {props.user.username} |
//                             </Nav.Link>
//                                 <Nav.Link href="/login"  onClick={(e) => handleClick(e)} style={{float: "right"}}>
//                                     Logout
//                             </Nav.Link>
//                             </Nav>
//                         {/* </Navbar.Collapse> */}
//                     </Navbar>
//                 </div>
//             </div >
//         )
//     }
//     else {
//         return (
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Navbar.Brand href="/login">Find A Date</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav>
//                         <Nav.Link href="/signup">
//                             Signup
//                         </Nav.Link>
//                         <Nav.Link href="login">
//                             Login
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         )
//     }
// }

// export default connect(null, { logoutUser })(NavBarComponent)



