import React, { Component } from "react"
import { connect } from "react-redux"
import { signupUser } from "../actions/signupUser"
import { fetchInterests } from "../actions/fetchInterests"
import { withRouter } from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap"
import {Link} from "react-router-dom"


class Signup extends Component {
  constructor() {
    super()
  
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      gender: "",
      visibility: "",
      interest_ids: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCkecked = this.handleCkecked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    componentDidMount() {
        this.props.fetchInterests()
    }
    

    handleCkecked(e){
        let interestsChecked = this.state.interest_ids
        let interestValue = e.target.value
        
        if (e.target.checked === true) {
            interestsChecked.push(interestValue)
            this.setState({
                interest_ids: interestsChecked
            })
        }
        else {
            let interestIndex = interestsChecked.indexOf(interestValue)
            interestsChecked.splice(interestIndex, 1)
            
            this.setState({
                interest_ids: interestsChecked
            })
        }
    }
    

    handleSubmit(e) {
      e.preventDefault()
      this.props.signupUser(this.state)
        
    }

  handleChange(e) {   
    if (e.target) {
        this.setState({
          [e.target.name]: e.target.value 
        })
    }
    else {
        this.setState({
            interest_ids: e.value
        })
    }
  }


    render() {
      const { email, username, password, password_confirmation, visibility, gender } = this.state
    
      return (
        <div className="form" style={{ display: "block", width: "500px", float: "center" }} >
          
          <h4 style={{ textAlign: "center", fontStyle: "bold", width: "100%", padding: "0%"}}>Create Account!</h4>
          <ul>
            <Form onSubmit={this.handleSubmit} className="signup">
              <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="username required!"
                    name="username"
                    value={username}
                    onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.props.usernameError}</div>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  placeholder="email required!"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.props.emailError}</div>
                </Form.Group>

                <Form.Group>
                    <Form.Control as="select" name="gender" value={gender} placeholder="" onChange={this.handleChange}>
                        <option>Gender required!</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Control>
                  <div style={{ color: "red" }}>{this.props.genderError}</div>
                </Form.Group>

                <div className="check-me">
                    <label><strong>Select Interests!</strong></label> <br />
                    <div className="interests">
                        { this.props.interests.map((interest, index) => {
                            return (
                                <span key={interest.id}>
                                <input
                                    id={'index_'+ index}
                                    type="checkbox" value={interest.id}
                                    onChange={this.handleCkecked}
                                />
                                    {interest.name}
                                </span>
                            )
                            
                        })}
                    </div>
                </div> <br />

                <Form.Group>
                    <Form.Control as="select" name="visibility" value={visibility} onChange={this.handleChange}>
                        <option>Choose True To Be Seen Publicly</option>
                        <option value="true">true</option>
                        <option value="talse">false</option>
                    </Form.Control>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Control
              placeholder="password required!"
                            type="password"
                            name="password"
                            autoComplete={password}
                            value={password}
                            onChange={this.handleChange} />
                        <div style={{ color: "red" }}>{ this.props.passwordError}</div>
                    </Col>
                    <Col>
                        <Form.Control
              placeholder="Confirm Password required!"
                            type="password"
                            name="password_confirmation"
                            autoComplete={password_confirmation}
                            value={password_confirmation}
                            onChange={this.handleChange} />
                        <div style={{ color: "red" }}>{ this.props.passwordConfirmationError}</div>
                    </Col>
                </Row>
                <div /><br/>
                <Button variant="success" type="submit">Signup</Button>
            </Form>
              <span className="bottom_link">
                  Have an account!
                  <Link to="/login" >
                          Login
                  </Link>      
              </span>
          </ul>
        </div>
      )
    }
}


const mapStateToProps = ({ usersReducer, interestsReducer }) => {
    return {
      interests: interestsReducer.interests,
      user: usersReducer.user,
      emailError: usersReducer.emailError,
      usernameError: usersReducer.usernameError,
      passwordError: usersReducer.passwordError,
      passwordConfirmationError: usersReducer.passwordConfirmationError,
      genderError: usersReducer.genderError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signupUser: (formData) => dispatch(signupUser(formData, ownProps)),
        fetchInterests: () => dispatch(fetchInterests())
    }
}

const custumComponentConnect = connect(mapStateToProps, mapDispatchToProps )(Signup)

export default withRouter(custumComponentConnect)