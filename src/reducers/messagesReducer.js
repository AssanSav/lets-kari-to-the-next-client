import { CREATE_MESSAGE, FETCH_RECEIVED_MESSAGES, FETCH_SENT_MESSAGES } from "../actions/types"


const messagesReducer = (state = { message: {}, receivedMessages: [], sentMessages: [] }, action) => {
    const {message, receivedMessages, sentMessages, type} = action
    
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
            
        default: 
            return state
    }
}


export default messagesReducer