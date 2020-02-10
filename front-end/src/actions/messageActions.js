import { axiosWithAuth as axios } from '../utils/axiosConfig'

export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE'

// export const POST_MESSAGE_START = 'POST_MESSAGE_START'
// export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS'
// export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE'

export const fetchMessages = () => dispatch => {
  dispatch({ type: FETCH_MESSAGES_START });

 // const id = localStorage.getItem('id', res.data.user.id)

 axios().get('https://bw-emp.herokuapp.com/api/user/1')
    .then(res => {
      dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response.error);
      dispatch({ type: FETCH_MESSAGES_FAILURE });
    });
};

// export const postMessage = () => dispatch => {
//   //console.log("message", message)
//     dispatch({ type: POST_MESSAGE_START });

//     axios.post('/messages', message)
//     .then((res) => {
//       console.log("data", res.data)
//         dispatch({ type: POST_MESSAGE_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//         console.log(err.response.error);
//         dispatch({ type: POST_MESSAGE_FAILURE, payload: err.response.error });
//     })
// }