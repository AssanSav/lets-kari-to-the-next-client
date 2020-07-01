import React from "react"
import { logoutUser } from "../actions/logoutUser"
import { connect } from "react-redux"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"


const NavBarComponent = (props) => {

  const handleClick = () => {
    const { logoutUser, status, user } = props
    // if (status) {
    debugger
        props.logoutUser(user.id)
    // }
  }

  return (
    <Navbar className="pb-10 " style={{backgroundColor: "black"}}>
      {props.status ? 
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                <NavDropdown.Item href="/matches">Matches</NavDropdown.Item>
                <NavDropdown.Item href="/received-messages">Inbox</NavDropdown.Item>
                <NavDropdown.Item href="sent-messages">Outbox</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login" onClick={(e) => handleClick(e)}>Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/sent-messages" className="mb-0">Outbox</Nav.Link>
              <Nav.Link href="/received-messages">Inbox</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href={`/my-profile/${props.user.id}`}>Welcome, {props.user.username} </Nav.Link>
                <Nav.Link href="/matches">Matches</Nav.Link>
              <Nav.Link href="/login" onClick={(e) => handleClick(e)}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
        :
        <>
          <Nav>
            <Navbar.Brand style={{color: "blue", fontStyle: "bold"}}>Let's Meetup!</Navbar.Brand>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </>}
    </Navbar>
  )
}



export default connect(null, {logoutUser})(NavBarComponent)



