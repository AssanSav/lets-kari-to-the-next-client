import React, {Component} from "react"
import { connect } from "react-redux"
import { fetchSentMessages } from "../actions/fetchSentMessages"
import { deleteSentMessage } from "../actions/deleteSentMessage"
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"


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
          <h4 style={{ textAlign: 'center', color: ""  }}>Sent Messages</h4>
          <table >
            <tbody>
              <tr style={{ color: "red" }}>
                  <th>Date:</th>
                  <th>Sent to:</th>
                  <th>Content:</th>
                  <th>Send More:</th>
                  <th>Remove:</th>
                </tr>
                {this.props.sentMessages.map(message =>
                    <tr key={message.id}>
                      <td>
                      {message.created_at.split("T")[0]} at {message.created_at.split("T")[1].split(".")[0]}
                      </td>
                      <td id="link">
                        <Link to={`/match-profile/${message.match_id}`} style={{textDecoration: "underline"}}>
                          {message.match_name}
                        </Link>
                      </td>
                      <td id="link">
                          {message.content}
                      </td>
                      <td id="link">
                        <Link  to={`/match-new-message/${message.match_id}`}>
                        <Button variant="outline-success">
                                Send Again
                            </Button>
                        </Link>
                    </td>
                    <td id="last_link">
                      <button className="btn" onClick={() => this.props.deleteSentMessage(message, "sent")}>
                          X
                      </button>
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


export default connect(mapStateToProps, { fetchSentMessages, deleteSentMessage})(SentMessages)