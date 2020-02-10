import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MessageList() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
        .get('https://bw-emp.herokuapp.com/api/user/:user_id/:conversation_id/messages')
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
                {messages.map(message => <li>{message}</li>)}
            </ul>
        </div>
    )
}
