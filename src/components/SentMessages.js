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
            <table>
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Sent to</th>
                    <th>Content</th>
                    <th>Send More</th>
                </tr>
                {this.props.sentMessages.map(message =>
                    <tr key={message.id}>
                    <td>{message.created_at}</td>
                    <Link to={`/match-profile/${message.match_id}`}>
                        <td>{message.match_name}</td>
                    </Link>
                    <td>{message.content}</td>
                    <td>
                        <Link to={`/match-new-message/${message.match_id}`}>
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