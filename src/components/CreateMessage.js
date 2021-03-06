import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../actions/createMessage";
import { fetchMessages } from "../actions/fetchMessages";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ChatRoomForm from "../common/ChatRoomForm";

class CreateMessage extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      match_id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  z;
  componentDidMount() {
    this.props.fetchMessages();
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(
      document.querySelector(".chats")
    ).scrollTop = ReactDOM.findDOMNode(
      document.querySelector(".chats")
    ).scrollHeight;
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
      match_id: this.props.routerProps.match.params.id,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createMessage(this.state).then(() => {
      this.setState({
        content: "",
      });
      this.props.fetchMessages();
    });
  }

  render() {
    if (!this.props.messages || this.props.messages.length === 0) {
      return (
        <>
        <div className="chatroom">
          <div style={{ color: "red" }}>{this.props.error}</div>
          <h3>Chat Room</h3>
          <ul className="chats"></ul>
          <ChatRoomForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} content={this.state.content}/>
        </div>
         <Link to={`/users`}>
         <Button variant="dark">back</Button>
       </Link>
     </>
      );
    } else {
      const matchName = this.props.messages.find((message) => message)
        .match_name;

      return (
        <>
        <div className="chatroom">
          <div style={{ color: "red" }}>{this.props.error}</div>
          <h3>Chat Room With {matchName}</h3>
          <ul className="chats">
            {this.props.messages.map((message) => (
              <li
                key={message.id}
                className={`chat ${
                  this.props.user.user.id === message.match_id
                    ? "right"
                    : "left"
                }`}
              >
                {this.props.user.id !== message.user_id && (
                  <img
                    src={message.image}
                    alt={`${message.username}'s profile pic`}
                  />
                )}
                {message.content}
              </li>
            ))}
          </ul>
          <ChatRoomForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} content={this.state.content}/>
        </div>
        <Link to={`/users`}>
            <Button variant="danger">back</Button>
          </Link>
        </>
      );
    }
  }
}

const mapStateToProps = ({ usersReducer, messagesReducer }, ownProps) => {
  const id = ownProps.routerProps.match.params.id;
  const userId = usersReducer.user.id;

  const received_messages = messagesReducer.messages.filter((message) => {
    return message.user_id
      ? message.user_id === parseInt(id) &&
          message.match_id === parseInt(userId)
      : message;
  });

  const sent_messages = messagesReducer.messages.filter((message) =>
    message.user_id
      ? message.user_id === parseInt(userId) &&
        message.match_id === parseInt(id)
      : message
  );

  const messages = received_messages
    .concat(sent_messages)
    .sort((a, b) => (a.created_at > b.created_at ? 1 : -1));

  return {
    error: messagesReducer.error,
    user: usersReducer,
    messages: messages,
  };
};

export default connect(mapStateToProps, { createMessage, fetchMessages })(
  CreateMessage
);
