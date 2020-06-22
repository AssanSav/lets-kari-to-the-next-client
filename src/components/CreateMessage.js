import React, { Component } from "react"
import { connect } from "react-redux"
import { createMessage } from "../actions/createMessage"
import {Form, Button} from "react-bootstrap"


class CreateMessage extends Component {
    constructor() {
        super()
        this.state = {
            content: "",
            match_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            content: e.target.value,
            match_id: this.props.routerProps.match.params.id

        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createMessage(this.state)
        .then(() => {
            this.props.routerProps.history.push("/sent-messages")
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="border border-primary mx-25">
                        <Form.Control
                            rows="4" cols="50"
                            as="textarea"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({ usersReducer, ownProps }) => {
    return {
        user: usersReducer
    }
}

export default connect(mapStateToProps, {createMessage})(CreateMessage)