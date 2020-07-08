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
        < >
          <h4 style={{ textAlign: 'center', marginTop: "40px", color: "blue"}}>INBOX</h4>
          <table >
                <tbody>
              <tr>
                      <th>Date:</th>
                      <th>From:</th>
                      <th>Content:</th>
                      <th>Reply:</th>
                      <th>Remove:</th>
                    </tr>
                      {this.props.receivedMessages.map(message =>
                        <tr key={message.id}>
                          <td>
                            {message.created_at.split("T")[0]} at {message.created_at.split("T")[1].split(".")[0]}
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
                            <Button variant="danger" onClick={() => this.props.deleteReceivedMessage(message)}>
                              Delete
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
    receivedMessages: messagesReducer.receivedMessages
  }
}


export default connect(mapStateToProps, { fetchReceivedMessages, deleteReceivedMessage })(ReceivedMessages)