import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

export default function MessageList() {
  const [messages, setMessages] = useState([])

  //const token = localStorage.getItem('token');
  const id = localStorage.getItem('id')
  const conversation_id = localStorage.getItem('conversation_id')
  const message_id = localStorage.getItem('message_id')

  useEffect(() => {
    axios()
      .get(
        `https://bw-emp.herokuapp.com/api/user/${id}/${conversation_id}/messages`
      )
      .then(response => {
        console.log(response.data)
        setMessages(response.data)
        localStorage.setItem('message_id',response.data[0])
      })
     // .then(localStorage.setItem('conversation_id',response.data[0]))
      .catch(err => {
        console.log(err)
      })
  }, [])

  // https://bw-emp.herokuapp.com/api/user/:user_id/:conversation_id/message/:message_id

const deleteMessage = (e) => {
    e.preventDefault();
    console.log('The button was clicked.');
    axios()
      .delete(`https://bw-emp.herokuapp.com/api/user/${id}/${conversation_id}/${message_id}`)
      .then(response => {
        console.log(response.data)
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <div className="messages">
      <h2>Message list:</h2>
      <div>
        {messages.map(message => (
          <li 
          align="left" 
          conversation_id={conversation_id} 
          key={message.id}
          message_id={message.id}
          >
            {message.message}
            <button onClick={deleteMessage}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  )
}
