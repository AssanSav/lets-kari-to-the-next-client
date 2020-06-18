import React, { Component } from "react"
import { connect } from "react-redux"
import { signupUser } from "../actions/signupUser"
import { fetchInterests } from "../actions/fetchInterests"
import { withRouter } from "react-router-dom"


class Signup extends Component {
    constructor(props) {
        super()
        this.state = {
            username:  "",
            email:  "",
            password: "",
            password_confirmation: "",
            interest_ids:  [],
            city: "",
            age:  "",
            gender:"",
            orientation:  "",
            ethnicity:  "",
            height:  "",
            body_shape:  "",
            children: "",
            relationship:  "",
            education:  "",
            bio:  ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCkecked = this.handleCkecked.bind(this)
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


    handleChange(e) {
        if (e.target) {
            this.setState({
                [e.target.name]: e.target.value
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
        
        this.props.signupUser(this.state)
        
        this.setState({
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            city: "",
            age: "",
            gender: "",
            orientation: "",
            ethnicity: "",
            height: "",
            body_shape: "",
            children: "",
            relationship: "",
            education: "",
            image: "",
            bio: ""
        })
    }


    render() {
        const { username, email, password, password_confirmation, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = this.state
        
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                />
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <select name="gender" value={gender} onChange={this.handleChange}>
                    <option selected="selected">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> 

                <select name="orientation" value={orientation} onChange={this.handleChange}>
                    <option selected="selected">Orientation</option>
                    <option value="Gay">Gay</option>
                    <option value="Straight">Straight</option>
                    <option value="Lesbian">Lesbian</option>
                </select>

                <select name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                    <option selected="selected">Relationship</option>
                    <option value="Hispanic or Latino">Hispanic or Latino</option>
                    <option value="Black/African descent">Black/African descent</option>
                    <option value="White">White</option>
                    <option value="Asian/Pacific Islander">Asian/Pacific Islander</ option>
                </select>

                <select name="body_shape" value={body_shape} onChange={this.handleChange}>
                    <option selected="selected">Body Shape</option>
                    <option value="Athletic">Athletic</option>
                    <option value="Curvy">Curvy</option>
                    <option value="Skinny">Skinny</option>
                </select>

                <select name="relationship" value={relationship} onChange={this.handleChange}>
                    <option selected="selected">Ethnicity</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="In a Relationship">In a Relationship</option>
                    <option value="Engaged">Engaged</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                </select>

                <select name="education" value={education} onChange={this.handleChange}>
                    <option selected="selected">Education</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Some College">Some College</option>
                    <option value="High School">High School</option>
                    <option value="Did not complete High School">Did not complete High School</option>
                </select>
                <input
                    placeholder="age"
                    type="text"
                    name="age"
                    autoComplete={age}
                    value={age}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="height"
                    type="text"
                    name="height"
                    autoComplete={height}
                    value={height}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="city"
                    type="text"
                    name="city"
                    autoComplete={city}
                    value={city}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="children"
                    type="text"
                    name="children"
                    autoComplete={children}
                    value={children}
                    onChange={this.handleChange}
                />
                <label>Bio</label> <br/>
                <textarea
                    rows="4" cols="100" 
                    name="bio"
                    onChange={this.handleChange}
                    value={bio}>
                </textarea>
                {this.props.interests.map((interest, index) => {
                    return (
                        <div className="checkboxes" key={interest.id}>
                        <input
                            id={'index_'+ index}
                            type="checkbox" value={interest.id}
                            onChange={this.handleCkecked}
                        /> {interest.name}
                        </div>
                    )})
                }
                    <div>
                    <input
                    placeholder="password"
                    type="password"
                    name="password"
                    autoComplete={password}
                    value={password}
                    onChange={this.handleChange}
                    />
                    <input
                    placeholder="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    autoComplete={password_confirmation}
                    value={password_confirmation}
                    onChange={this.handleChange}
                    />
                    </div>
                <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({ usersReducer, interestsReducer }) => {
    return {
        interests: interestsReducer.interests,
        user: usersReducer.user
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