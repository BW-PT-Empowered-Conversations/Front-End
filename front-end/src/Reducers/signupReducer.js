import {
    POST_SIGNUP_START,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FAILURE,
  } from '../Actions/messageActions'
  
  const initState = {
    signups: [],
    signup: '',
    isLoading: false,
  }
  
  export default (state = initState, action) => {
    switch (action.type) {
      case POST_SIGNUP_START:
        return {
          ...state,
          isLoading: true,
        }
      case POST_SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          signup: [...state.signup, action.payload]
        }
      case POST_SIGNUP_FAILURE:
        return {
          ...state,
          isLoading: false,
        }
      default:
        return state
    }
  }
  