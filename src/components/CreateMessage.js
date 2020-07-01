import React, { Component } from "react"
import { connect } from "react-redux"
import { createMessage } from "../actions/createMessage"
import {fetchMessages} from "../actions/fetchMessages"
import ReactDOM from "react-dom"


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

  componentDidMount() {
    this.props.fetchMessages();
    this.scrollToBot()
  }

  componentDidUpdate() {
    this.scrollToBot()
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
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
        this.setState({
          content: ""
        })
        this.props.fetchMessages()
      })
  }

  render() {
    return (
      <div className="chatroom">
        <h3>Chat Room</h3>
        <ul className="chats" ref="chats">
          {
            this.props.messages.map((message) =>
              <li key={message.id} className={`chat ${this.props.user.user.id === message.match_id ? "right" : "left"}`}>
                {this.props.user.id !== message.user_id
                  && <img src={message.image} alt={`${message.username}'s profile pic`} />
                }
                {message.content}
              </li>
            )
          }
        </ul>
        <form className="input" onSubmit={this.handleSubmit}>
          <input name="content" value={this.state.content} type="texterea" ref="msg" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

const mapStateToProps = ({ usersReducer, messagesReducer }) => {
  return {
    user: usersReducer,
    messages: messagesReducer.messages
  }
}

export default connect(mapStateToProps, {createMessage, fetchMessages})(CreateMessage)