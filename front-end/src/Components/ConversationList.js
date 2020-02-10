import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ConversationCard from './ConversationList';

export default function ConversationList() {

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        axios
        .get('https://bw-emp.herokuapp.com/api/user/:user_id')
        .then(response => {
            console.log(response.data);
            setConversations(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
        
    return (
        <div className='conversations'>
            <h2>Conversations</h2>
            
                {conversations.map(conversation => ( 
                    <ConversationCard key={conversation.id} name={conversation.recipient_first_name} value={conversation.topic} />))}
            
        </div>
    )
}