import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MessageList() {

    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios
        .get('https://bw-emp.herokuapp.com/api/user/1/1/messages', {
            headers: {
              'Authorization': `${token}`
            }
          })
        .then(response => {
            console.log(response.data);
            setMessages(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
        
    return (
        <div className='messages'>
            <ul>
                {messages.map(message => <li>{message.message}</li>)}
            </ul>
        </div>
    )
}
