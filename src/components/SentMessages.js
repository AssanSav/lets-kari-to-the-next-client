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
        <>
          <h4 style={{ textAlign: 'center', marginTop: "40px", color: "blue" }}>OUTBOX</h4>
          <table  >
            <tbody>
              <tr style={{ color: "" }}>
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
                      <td id="link" style={{overflow: "hidden"}}>
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
                      <Button variant="danger" onClick={() => this.props.deleteSentMessage(message, "sent")}>
                          Delete Message
                      </Button>
                    </td>
                    </tr>)}
              </tbody>
            </table>
        </>
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