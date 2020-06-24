import React, { Component } from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/loginUser"
import { withRouter, Link } from 'react-router-dom';
import {Form, Button} from "react-bootstrap"


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.loginUser(this.state)

        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
        const {email, password} = this.state
        return (
            <div className="form">
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            placeholder="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Control
                            placeholder="password"
                            type="password"
                            name="password"
                            autoComplete={password}
                            value={password}
                            onChange={this.handleChange} />
                    </Form.Group> 
                    <Button variant="outline-success" type="submit">Login</Button>
                </Form>
                <div className="bottom_link">
                    Don't have an account?
                    <Link to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (dispatch, ownProps) => {
    return {
        loginUser: (formDAta) => dispatch(loginUser(formDAta, ownProps))
    }
}


const customConnectComponent = connect(null, mapStateToProps )(Login)

export default withRouter(customConnectComponent)