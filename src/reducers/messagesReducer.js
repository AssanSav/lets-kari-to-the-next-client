import { CREATE_MESSAGE, FETCH_RECEIVED_MESSAGES, FETCH_SENT_MESSAGES, DELETE_SENT_MESSAGE, DELETE_RECEIVED_MESSAGE } from "../actions/types"


const messagesReducer = (state = { message: {}, receivedMessages: [], sentMessages: [] }, action) => {
    const { message, receivedMessages, sentMessageToDelete, receivedMessageToDelete, sentMessages, type} = action
    
    switch (type) {
        case CREATE_MESSAGE: 
            return {
                ...state,
                messages: message
            }
        
        case FETCH_SENT_MESSAGES: 
            return {
                ...state,
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