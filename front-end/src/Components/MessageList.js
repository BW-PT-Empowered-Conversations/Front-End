import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMessages }  from '../Actions/messageActions';

import Message from './Message'

const MessageList = (props) => {
    useEffect(() => {
        props.fetchMessages();
    }, []);

    return (
    <div>
        {props.messages && props.messages.map(message => <Message key={message.id} {...message} />)}
        </div>
    );
};

mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages
})

export default connect(mapStateToProps, { fetchMessages })(MessageList);