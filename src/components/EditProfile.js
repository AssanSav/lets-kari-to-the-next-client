import React, { Component } from "react"
import { connect } from "react-redux"
import { editProfile } from "../actions/editProfile"


class EditProfile extends Component {
    constructor(props) {
        super()
        this.state = {
            username: props.user.username,
            email: props.user.email,
            interest_ids: props.interests.map(i => i.id),
            id: props.user.id ,
            city: props.user.city,
            age: props.user.age,
            gender: props.user.gender,
            orientation: props.user.orientation,
            ethnicity: props.user.city,
            height: props.user.height,
            body_shape: props.user.body_shape,
            children: props.user.children,
            relationship: props.user.relationship,
            education: props.user.education,
            bio: props.user.bio
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.routerProps.match.params.id) {
            const { id, username, email, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = nextProps.user
            this.setState({
                username: username,
                email: email,
                id: id,
                city: city,
                age: age,
                gender: gender,
                orientation: orientation,
                ethnicity: ethnicity,
                height: height,
                body_shape: body_shape,
                children: children,
                relationship: relationship,
                education: education,
                bio: bio
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
        if (this.props.routerProps.match.params.id) {
            this.props.editProfile(this.state)
                .then(() => {
                    this.props.routerProps.history.push(`/my-profile/${this.props.routerProps.match.params.id}`)
                })
        }
    }


    render() {
        const { username, email, password, password_confirmation, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = this.state
        let genders = ["Male", "Female"]
        let orientations = ["Straight", "Lesbian", "Gay"]
        let ethnicities = ["Black/African descent", "White", "Hispanic or Latino", "Asian/Pacific Islander"]
        let body_shapes = ["Athletic", "Curvy", "Skinny"]
        let educations = ["Doctorate", "Masters", "Bachelors", "Some College", "High School", "Did not complete High School"]
        let relationships = ["Single", "Married", "In a Relationship", "Engaged", "Widowed", "Separated", "Divorced"]
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
                        {genders.map((g, i) => <option key={i + 1} value={g} >{g}</option>)}
                    </select>

                    <select name="orientation" value={orientation} onChange={this.handleChange}>
                        {orientations.map((o, i) => <option key={i + 1} value={o} >{o}</option>)}
                    </select>

                    <select name="relationship" value={relationship} onChange={this.handleChange}>
                        {relationships.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                    </select>

                    <select name="body_shape" value={body_shape} onChange={this.handleChange}>
                        {body_shapes.map((b, i) => <option key={i + 1} value={b} >{b}</option>)}
                    </select>

                    <select name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                        {ethnicities.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                    </select>

                    <select name="education" value={education} onChange={this.handleChange}>
                        {educations.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
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
                    <label>Bio</label> <br />
                    <textarea
                        rows="4" cols="100"
                        name="bio"
                        onChange={this.handleChange}
                        value={bio}>
                    </textarea>
                    {this.props.user.id ? null :
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
                    }
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


export default connect(mapStateToProps, { editProfile})(EditProfile)
