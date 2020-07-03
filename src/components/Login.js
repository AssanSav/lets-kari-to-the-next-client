import React, { Component } from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/loginUser"
import { withRouter, Link } from 'react-router-dom';
import {Form, Button} from "react-bootstrap"


class Login extends Component {
    constructor() {
        super()
        this.state = {
          email: "test_user@exemple.com",
          password: "111"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser({ email: this.state.email, password: this.state.password })
    }

    handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value 
      })
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="form" style={{ display: "block", width: "500px", float: "center" }}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <ul>
                    <Form onSubmit={this.handleSubmit} className="loginUser">
                        <Form.Group>
                            <Form.Control
                                placeholder="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange} />
                  <div style={{ color: "red" }}>{this.props.emailError}</div>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Control
                                placeholder="password"
                                type="password"
                                name="password"
                                autoComplete={password}
                                value={password}
                                onChange={this.handleChange} />
                  <div style={{ color: "red" }}>{this.props.passwordError}</div>
                        </Form.Group> 
                        <Button variant="outline-success" type="submit">Login</Button>
                    </Form>
                    <div className="bottom_link">
                        Don't have an account?
                        <Link to="/signup">
                            Signup
                        </Link>
                    </div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    emailError: usersReducer.emailError,
    passwordError: usersReducer.passwordError
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (formDAta) => dispatch(loginUser(formDAta, ownProps))
  }
}


const customConnectComponent = connect(mapStateToProps, mapDispatchToProps )(Login)

export default withRouter(customConnectComponent)