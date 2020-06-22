import React, { Component } from "react"
import { connect } from "react-redux"
import { editProfile } from "../actions/editProfile"
import { Form, Button } from "react-bootstrap"


class EditProfile extends Component {
    constructor(props) {
        super()
        this.state = {
            username: props.user.username,
            email: props.user.email,
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
            bio: props.user.bio,
            visibility: props.user.visibility
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.routerProps.match.params.id) {
            const { id, username, visibility, email, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = nextProps.user
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
                bio: bio,
                visibility: visibility
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
        const { username, email, password, visibility, password_confirmation, city, age, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = this.state
        let genders = ["Male", "Female"]
        let orientations = ["Straight", "Lesbian", "Gay"]
        let ethnicities = ["Black/African descent", "White", "Hispanic or Latino", "Asian/Pacific Islander"]
        let body_shapes = ["Athletic", "Curvy", "Skinny"]
        let educations = ["Doctorate", "Masters", "Bachelors", "Some College", "High School", "Did not complete High School"]
        let relationships = ["Single", "Married", "In a Relationship", "Engaged", "Widowed", "Separated", "Divorced"]
        let visibilityChoice = ["true", "false"]
        return (
            <div className="form">
                <h1>Edit Profile</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            value={username}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            placeholder="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="gender" value={gender} onChange={this.handleChange}>
                            {genders.map((g, i) => <option key={i + 1} value={g} >{g}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="orientation" value={orientation} onChange={this.handleChange}>
                            {orientations.map((o, i) => <option key={i + 1} value={o} >{o}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Control as="select" name="relationship" value={relationship} onChange={this.handleChange}>
                            {relationships.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="body_shape" value={body_shape} onChange={this.handleChange}>
                            {body_shapes.map((b, i) => <option key={i + 1} value={b} >{b}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                            {ethnicities.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="education" value={education} onChange={this.handleChange}>
                            {educations.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            placeholder="age"
                            type="text"
                            name="age"
                            autoComplete={age}
                            value={age}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            placeholder="height"
                            type="text"
                            name="height"
                            autoComplete={height}
                            value={height}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            placeholder="city"
                            type="text"
                            name="city"
                            autoComplete={city}
                            value={city}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            placeholder="children"
                            type="text"
                            name="children"
                            autoComplete={children}
                            value={children}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select" name="visibility" value={visibility} onChange={this.handleChange}>
                            {visibilityChoice.map((e, i) => <option key={i + 1} value={e} >{e}</option>)}
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Control as="select" name="visibility" value={visibility} onChange={this.handleChange}>
                            <option>Choose True To Be Seen Publicly</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group>
                        <label><strong>Bio</strong></label> <br />
                        <Form.Control
                            rows="7" cols="50"
                            as="textarea"
                            name="bio"
                            onChange={this.handleChange}
                            value={bio} />
                    </Form.Group>

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
                    <Button type="submit" value="Edit">
                        Edit
                    </Button>
                </Form>
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
