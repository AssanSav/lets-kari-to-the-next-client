import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchReceivedMessages } from "../actions/fetchReceivedMessages"
import { Link } from "react-router-dom"


class ReceivedMessages extends Component {

  componentDidMount() {
    this.props.fetchReceivedMessages()
  }

  render() {
    if (this.props.receivedMessages === []) {
      return <div></div>
    }
    else {
      return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>Content</th>
                        <th>Reply</th>
                    </tr>
                    {this.props.receivedMessages.map(message =>
                        <tr key={message.id}>
                            <td>{message.created_at}</td>
                            <Link to={`/match-profile/${message.user_id}`}>
                                <td>{message.sender_name}</td>
                            </Link>
                            <td>{message.content}</td>
                            <td>
                                <Link to={`/match-new-message/${message.user_id}`}>
                                Reply
                            </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
    }
  }
}


const mapStateToProps = ({ messagesReducer }) => {
  return {
    receivedMessages: messagesReducer.receivedMessages
  }
}


export default connect(mapStateToProps, { fetchReceivedMessages })(ReceivedMessages)