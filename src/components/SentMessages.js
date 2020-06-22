import React, {Component} from "react"
import { connect } from "react-redux"
import { fetchSentMessages } from "../actions/fetchSentMessages"
import { Link } from "react-router-dom"


class SentMessages extends Component {

  componentDidMount() {
    this.props.fetchSentMessages()
  }

  render() {
    if (this.props.sentMessages === [] || !this.props.sentMessages) {
      return <div></div>
    }
    else {
      return (
        <div>
            <table className="messages-table">
                <tbody>
                <tr>
                    <th id="date">Date</th>
                    <th id="sent_messages">Sent to</th>
                    <th id="content">Content</th>
                    <th id="send_more">Send More</th>
                </tr>
                {this.props.sentMessages.map(message =>
                    <tr key={message.id}>
                    <td>{message.created_at}</td>
                    <Link id="link" to={`/match-profile/${message.match_id}`}>
                        <td>{message.match_name}</td>
                    </Link>
                    <td>{message.content}</td>
                    <td>
                        <Link id="link" to={`/match-new-message/${message.match_id}`}>
                        Send Again
                    </Link>
                    </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
      )
    }
  }
}


const mapStateToProps = ({ messagesReducer }) => {
  return {
    sentMessages: messagesReducer.sentMessages
  }
}


export default connect(mapStateToProps, { fetchSentMessages})(SentMessages)