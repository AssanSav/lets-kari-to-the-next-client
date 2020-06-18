import React, { Component } from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/loginUser"
import { withRouter } from 'react-router-dom';


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
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                <p>
                    <input
                    placeholder="email"
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    />
                </p>
                <p>
                    <input
                    placeholder="password"
                    type="password"
                    name="password"
                    autoComplete={password}
                    value={password}
                    onChange={this.handleChange}
                    />
                </p>
                <input type="submit" value="Login" />
                </form>
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