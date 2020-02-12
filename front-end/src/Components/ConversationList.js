import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/messageActions'
import ConversationCard from './ConversationList';

const ConversationList = (props) => {
    useEffect(() => {
        fetchMessages();
    }, [props]);
        
    return (
        <div className='conversations'>
            <h2>Conversation List</h2>
            <div>{props.messages && props.messages.map(message => <ConversationCard key={message.id} {...message} />)}</div>
        </div>
    );
};

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages
});

export default connect(mapStateToProps, { fetchMessages })(ConversationList);