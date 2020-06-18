import React, { Component } from "react"
import { connect } from "react-redux"
import { createMessage } from "../actions/createMessage"


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
            <form onSubmit={this.handleSubmit}>
            <textarea name={this.state.content} onChange={this.handleChange} rows="4" cols="50"></textarea><br/>
            <input type="submit" value="Send" />
            </form>
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