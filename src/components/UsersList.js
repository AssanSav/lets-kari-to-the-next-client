import React, { Component } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import UserCard from "./UserCard"


class UsersList extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            // interest_ids: [],
            city: "",
            maxAge: "",
            gender: "",
            orientation: "",
            ethnicity: "",
            maxHeight: "",
            heightLimit: "",
            body_shape: "",
            children: "",
            relationship: "",
            education: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCkecked = this.handleCkecked.bind(this)
    }


    handleCkecked(e) {
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


    handleChange(e) {
        if (e.target) {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
        else {
            this.setState({
                [e.name]: e.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const {  maxAge, maxHeight, education, city, gender, orientation, ethnicity, body_shape, children, relationship } = this.state

        this.setState({
            users: this.props.users.filter(u => {
                // var userInterestId = u.interests.map(i => i.id)
                // const interestsMatches = (a = userInterestId, b = interest_ids) => {
                //     for (var i = a.length - 1; i >= 0; i--){
                //         if (a[i].toString() === b[i]) {
                //             return true
                //         } 
                //     }
                // }
                return u.body_shape.includes(body_shape) && u.children.includes(children) && u.city.includes(city) && u.relationship.includes(relationship) && u.gender.includes(gender) && u.orientation.includes(orientation) && u.ethnicity.includes(ethnicity) && u.education.includes(education) && u.age >= maxAge && u.height >= maxHeight 
                    // && u.interests.includes(i => interest_ids.indexOf(i) > -1)
                // &&  && u.height <= heightLimit  &&  && u.age <= ageLimit    
            }),
            // interest_ids: [],
            city: "",
            maxAge: "",
            gender: "",
            orientation: "",
            ethnicity: "",
            maxHeight: "",
            body_shape: "",
            children: "",
            relationship: "",
            education: ""
        })
        // document.getElementById("index_0").checked = false
        // document.getElementById("index_1").checked = false
        // document.getElementById("index_2").checked = false
        // document.getElementById("index_3").checked = false
        // document.getElementById("index_4").checked = false
        // document.getElementById("index_5").checked = false
        // document.getElementById("index_6").checked = false
        // document.getElementById("index_7").checked = false
        // document.getElementById("index_8").checked = false
        // document.getElementById("index_9").checked = false 
    }


    render() {
        const { education, city, maxAge, gender, orientation, ethnicity, maxHeight, body_shape, children, relationship} = this.state
        let users = this.state.users.length > 0 ? this.state.users : this.props.users

        if (this.props.users !== []) {
            return (
                <div >
                    <h1>Search</h1>

                    <Form onSubmit={this.handleSubmit} className="form">
                        <Row>
                            <Col>
                                <Form.Control as="select" name="gender" value={gender} placeholder="" onChange={this.handleChange}>
                                    <option>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control as="select" name="orientation" value={orientation} placeholder="" onChange={this.handleChange}>
                                    <option>Orientation</option>
                                    <option value="Gay">Gay</option>
                                    <option value="Straight">Straight</option>
                                    <option value="Lesbian">Lesbian</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control as="select" name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                                    <option>Ethnicity</option>
                                    <option value="Hispanic or Latino">Hispanic or Latino</option>
                                    <option value="Black/African descent">Black/African descent</option>
                                    <option value="White">White</option>
                                    <option value="Asian/Pacific Islander">Asian/Pacific Islander</ option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control as="select" name="body_shape" value={body_shape} onChange={this.handleChange}>
                                    <option>Body Shape</option>
                                    <option value="Athletic">Athletic</option>
                                    <option value="Curvy">Curvy</option>
                                    <option value="Skinny">Skinny</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
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
                            </Col>
                            <Col>
                                <Form.Control as="select" name="education" value={education} onChange={this.handleChange} >
                                    <option>Education</option>
                                    <option value="Doctorate">Doctorate</option>
                                    <option value="Masters">Masters</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Some College">Some College</option>
                                    <option value="High School">High School</option>
                                    <option value="Did not complete High School">Did not complete High School</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control
                                    placeholder="age"
                                    type="text"
                                    name="maxAge"
                                    value={maxAge}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="height"
                                    type="text"
                                    name="maxHeight"
                                    value={maxHeight}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control
                                    placeholder="city"
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="children"
                                    type="text"
                                    name="children"   
                                    value={children}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>

                        {/* <div className="check-me">
                            {this.props.interests.map((interest, index) => {
                                return (
                                    <span className="mb-3" key={interest.id}>
                                        <input
                                            id={'index_' + index}
                                            type="checkbox" value={interest.id}
                                            onChange={this.handleCkecked}
                                        />
                                        {interest.name}
                                    </span>
                                )

                            })}
                        </div>  */}
                
                        <div /><br />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                    <div className="container">
                        {users.map(user => <UserCard user={user}/> )}
                    </div>
                </div>
            )
        }
    }
}



export default UsersList
































