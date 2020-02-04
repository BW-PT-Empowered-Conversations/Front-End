import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  POST_MESSAGE_START,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAILURE,
} from '../Actions/messageActions'

const initState = {
  messages: [],
  message: '',
  isLoading: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.payload,
      }
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case POST_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
      }
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, action.payload]
      }
    case POST_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
