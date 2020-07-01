import React, { Component } from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/loginUser"
import { withRouter, Link } from 'react-router-dom';
import {Form, Button} from "react-bootstrap"


class Login extends Component {
    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({
                fields: fields
            });
        }
        this.props.loginUser({ email: this.state.fields.email, password: this.state.fields.password })
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }


    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Wrong Password!";
            }
        }

        this.setState({
            errors: errors
        });
        document.querySelector(".loginUser").reset()
        return formIsValid;
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="form" style={{ display: "block", width: "500px", float: "center" }}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <ul>
                    <Form onSubmit={this.submituserRegistrationForm} className="loginUser">
                        <Form.Group>
                            <Form.Control
                                placeholder="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange} />
                            <div style={{color: "red"}}>{this.state.errors.email}</div>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Control
                                placeholder="password"
                                type="password"
                                name="password"
                                autoComplete={password}
                                value={password}
                                onChange={this.handleChange} />
                            <div style={{ color: "red" }}>{this.state.errors.password}</div>
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


const mapStateToProps = (dispatch, ownProps) => {
    return {
        loginUser: (formDAta) => dispatch(loginUser(formDAta, ownProps))
    }
}


const customConnectComponent = connect(null, mapStateToProps )(Login)

export default withRouter(customConnectComponent)