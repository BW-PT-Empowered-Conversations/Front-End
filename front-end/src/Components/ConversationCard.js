import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column; 
`;

export default function ConversationCard(props) {

    return (
        <Card>
            <p>Recipient: {props.recipient_first_name}</p>
            <p>Number: {props.recipient_phone}</p>
        </Card>
    );
}