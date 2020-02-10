import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Header from './Header';
import ConversationList from './ConversationList';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  margin: auto;
  padding: 15%;
  color: #0f4c81;
  text-align: center;
`;

const Box = styled.div`
  margin: 2%;
`;

const Button = styled.button`
  margin: 5%;
  width: 100px;
  height: 30px;
  background: #B0AE99;
  border: solid #c7c5ad 1px;
  border-radius: 8px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
`;

const validate = ({ recipient_first_name, recipient_last_name, recipient_phone, topic }) => {
  const errors = {};

  if (!recipient_first_name) {
    errors.recipient_first_name = 'Recipient first name required.'
  } else if (recipient_first_name.length < 2) {
    errors.recipient_first_name = 'Name minimum 3 characters.'
  }

  if (!recipient_last_name) {
    errors.recipient_last_name = 'Recipient last name required.'
  } else if (recipient_last_name.length < 2) {
    errors.recipient_last_name = 'Name minimum 2 characters.'
  }

  if (!recipient_phone) {
    errors.recipient_phone = 'Mobile phone number required.'
  } else if (recipient_phone.length < 10) {
    errors.recipient_phone = 'Mobile number requires 10 digits.'
  }

  if (!topic) {
    errors.topic = 'Topic title required.'
  } else if (topic.length < 3) {
    errors.topic = 'Title minimum 3 characters.'
  }

  return errors;
}

export default function ConversationStarter() {

  const [message, setMessage] = useState('');

  const handleSubmit = (values, tools) => {
    axios.post('https://bw-emp.herokuapp.com/api/user', values)
    .then(response => {
      setMessage(response.data.message);
      tools.resetForm();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      tools.setSubmitting(false);
    })
  }
  return (
    <div className='UserDashboard'>
      <Header />
      <WrapperDiv>
        <div>{message}</div>
        

        <Formik
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={{ recipient_first_name: '', recipient_last_name: '', recipient_phone: '', topic: '' }}
          render={props => {
            console.log(props);
            return (
              <Form>
                <div>
                  <h1>User Dashboard</h1>
                  <ConversationList />  
                  <h2>Start new conversation!</h2>
                </div>
                <div>
                  <label htmlFor='to'>To: </label>
                  <Box>
                    <Field name='recipient_first_name' type='text' placeholder='Recipient First Name' />
                    <ErrorMessage name='recipient_first_name' component='div' className='red' />
                  </Box>
                  <Box>
                    <Field name='recipient_last_name' type='text' placeholder='Recipient Last Name' />
                    <ErrorMessage name='recipient_last_name' component='div' className='red' />
                  </Box>
                  <Box>
                    <Field name='recipient_phone' type='tel' placeholder='Recipient Phone Number' />
                    <ErrorMessage name='recipient_phone' component='div' className='red' />
                  </Box>
                </div>
                <div>
                  <label htmlFor='topic'>Topic: </label>
                  <Box>
                    <Field name='topic' type='text' placeholder='Title' />
                    <ErrorMessage name='topic' component='div' className='red' />
                  </Box>
                </div>
                

                <Button className='button' type='submit' disabled={props.isSubmitting}>
                  {
                    props.isSubmitting ? '...Creating' : 'Create'
                  }
                </Button>
              </Form>
            )
          }}
        />
      </WrapperDiv>
    </div>
  );
}