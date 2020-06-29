import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchReceivedMessages } from "../actions/fetchReceivedMessages"
import { deleteReceivedMessage } from "../actions/deleteReceivedMessage"
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"


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
        <div >
          <h4 style={{ textAlign: 'center', color: ""}}>Received Messages</h4>
            <table>
                <tbody>
              <tr style={{ color: "red"}}>
                      <th>Date:</th>
                      <th>From:</th>
                      <th>Content:</th>
                      <th>Reply:</th>
                      <th>Remove:</th>
                    </tr>
                      {this.props.receivedMessages.map(message =>
                        <tr key={message.id}>
                          <td>
                            {message.created_at.split("T")[0]}
                          </td>
                          <td id="link" >
                            <Link to={`/match-profile/${message.user_id}`}>
                              {message.sender_name}
                            </Link>
                          </td>
                          <td id="link">
                            {message.content}
                          </td>
                          <td id="link">
                            <Link to={`/match-new-message/${message.user_id}`}>
                              <Button variant="outline-success">
                                  Reply
                                </Button>  
                              </Link>
                          </td>
                          <td id="last_link">
                            <button className="btn" onClick={() => this.props.deleteReceivedMessage(message)}>
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
    receivedMessages: messagesReducer.receivedMessages
  }
}


export default connect(mapStateToProps, { fetchReceivedMessages, deleteReceivedMessage })(ReceivedMessages)