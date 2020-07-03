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
      orientation: "",
      ethnicity:  "",
      height:  "",
      body_shape:  "",
      children: "",
      relationship:  "",
      education:  "",
      bio: "",
      visibility: "",
      interest_ids: [],
      city: "",
      age: ""
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
      const { email, username, password, password_confirmation, visibility, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = this.state
    
      return (
          <div className="form" style={{display: "block", width: "500px", float: "center"}} >
              <h4 style={{textAlign: "center", fontStyle: "bold", width: "100%", padding: "0%"}}>Create Account!</h4>
              <ul>
                  <Form onSubmit={this.handleSubmit} className="signup">
                      <Form.Group>
                          <Form.Control
                              type="text"
                              placeholder="username"
                              name="username"
                              value={username}
                              onChange={this.handleChange} />
                <div style={{ color: "red" }}>{this.props.usernameError}</div>
                      </Form.Group>

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
                          <Form.Control as="select" name="gender" value={gender} placeholder="" onChange={this.handleChange}>
                              <option>Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                          </Form.Control>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control as="select" name="orientation" value={orientation} placeholder="" onChange={this.handleChange}>
                              <option>Orientation</option>
                              <option value="Gay">Gay</option>
                              <option value="Straight">Straight</option>
                              <option value="Lesbian">Lesbian</option>
                          </Form.Control>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control as="select" name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                              <option>Ethnicity</option>
                              <option value="Hispanic or Latino">Hispanic or Latino</option>
                              <option value="Black/African descent">Black/African descent</option>
                              <option value="White">White</option>
                              <option value="Asian/Pacific Islander">Asian/Pacific Islander</ option>
                          </Form.Control>  
                      </Form.Group>
      
                      <Form.Group>
                          <Form.Control as="select" name="body_shape" value={body_shape} onChange={this.handleChange}>
                              <option>Body Shape</option>
                              <option value="Athletic">Athletic</option>
                              <option value="Curvy">Curvy</option>
                              <option value="Skinny">Skinny</option>
                          </Form.Control>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control as="select" name="relationship" value={relationship} onChange={this.handleChange}>
                              <option>Relationship</option>
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                              <option value="In a Relationship">In a Relationship</option>
                              <option value="Engaged">Engaged</option>
                              <option value="Widowed">Widowed</option>
                              <option value="Separated">Separated</option>
                              <option value="Divorced">Divorced</option>
                          </Form.Control>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control as="select" name="education" value={education} onChange={this.handleChange} >
                              <option>Education</option>
                              <option value="Doctorate">Doctorate</option>
                              <option value="Masters">Masters</option>
                              <option value="Bachelors">Bachelors</option>
                              <option value="Some College">Some College</option>
                              <option value="High School">High School</option>
                              <option value="Did not complete High School">Did not complete High School</option>
                          </Form.Control>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control
                              placeholder="Age"
                              type="text"
                              name="age"
                              autoComplete={age}
                              value={age}
                              onChange={this.handleChange}/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control
                          placeholder="Height"
                              type="text"
                              name="height"
                              autoComplete={height}
                              value={height}
                              onChange={this.handleChange}/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control
                              placeholder="City"
                              type="text"
                              name="city"
                              autoComplete={city}
                              value={city}
                              onChange={this.handleChange}/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Control
                              placeholder="Children"
                              type="text"
                              name="children"
                              autoComplete={children}
                              value={children}
                              onChange={this.handleChange}/>
                      </Form.Group>
                  
                      <Form.Group>
                          <label style={{ textAlign: "center"}}><strong >Little Bit About Yourself</strong></label> <br />
                          <Form.Control
                              as="textarea"
                              name="bio"
                              onChange={this.handleChange}
                              value={bio}/>
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
                                  placeholder="password"
                                  type="password"
                                  name="password"
                                  autoComplete={password}
                                  value={password}
                                  onChange={this.handleChange} />
                              <div style={{ color: "red" }}>{ this.props.passwordError}</div>
                          </Col>
                          <Col>
                              <Form.Control
                                  placeholder="Confirm Password"
                                  type="password"
                                  name="password_confirmation"
                                  autoComplete={password_confirmation}
                                  value={password_confirmation}
                                  onChange={this.handleChange} />
                              <div style={{ color: "red" }}>{ this.props.passwordConfirmationError}</div>
                          </Col>
                      </Row>
                      <div /><br/>
                      <Button variant="outline-success" type="submit">Signup</Button>
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
      passwordConfirmationError: usersReducer.passwordConfirmationError
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