import { CREATE_MESSAGE, FAILED_TO_CREATE, FETCH_RECEIVED_MESSAGES, FETCH_SENT_MESSAGES, DELETE_SENT_MESSAGE, DELETE_RECEIVED_MESSAGE, FETCH_MESSAGES } from "../actions/types"


  const messagesReducer = (state = {  messages: [], receivedMessages: [], sentMessages: [], error: "" }, action) => {
  const { message, messages, receivedMessages, sentMessageToDelete, receivedMessageToDelete, sentMessages, type} = action

  switch (type) {
    case CREATE_MESSAGE: 
      return {
        ...state,
        messages: state.messages.concat(message),
        error: ""
      }
    
    case FAILED_TO_CREATE: 
      return {
        ...state,
        error: "Content".concat(' ', action.payload)
      }
    
    case FETCH_MESSAGES: 
      return {
        ...state,
        messages: messages.map(message => message.attributes)
      }
    
    case FETCH_SENT_MESSAGES: 
      return {
        ...state,
        ...receivedMessages,
        sentMessages: sentMessages
      }
    
    case FETCH_RECEIVED_MESSAGES:
      return {
        ...state,
        ...sentMessages,
        receivedMessages: receivedMessages
      }
    
    case DELETE_SENT_MESSAGE: 
      return {
        ...state,
        sentMessages: state.sentMessages.filter(m => m.id !== sentMessageToDelete.id)
      }
  
    case DELETE_RECEIVED_MESSAGE:
      return {
        ...state,
        receivedMessages: state.receivedMessages.filter(m => m.id !== receivedMessageToDelete.id)
      }
        
    default: 
      return state
  }
  }


  export default messagesReducer