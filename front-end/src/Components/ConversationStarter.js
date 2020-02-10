import React from 'react'; //, { useState } 
import { Formik, Form, Field } from 'formik'; // , ErrorMessage
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import Header from './Header';
import MessageList from './MessageList';



const WrapperDiv = styled.div`
  margin: auto;
  padding: 15%;
  color: #0f4c81;
  text-align: center;
`;

const MessageBox = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #B0AE99;
  border: solid #c7c5ad 1px;
  border-radius: 8px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
`;



export default function ConversationStarter() {

 // const [data, setData] = useState('');

  const handleSubmit = (values, tools) => {
    // hardcoded testing user/1
    // axios.post('https://bw-emp.herokuapp.com/api/user/1/1/message', values)
    axios.post('https://bw-emp.herokuapp.com/api/user/:user_id/:conversation_id/message', values)
    .then(response => {
      console.log(response);
      tools.resetForm();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      tools.setSubmitting(false);
    })
  }
  // <div>{data}</div>
  return (
    <div className='ConversationStarter'>
      <Header />
      <WrapperDiv>
        <MessageList />
        <Formik
          onSubmit={handleSubmit}
         // validate={validate}
          initialValues={{ message: '' }}
          render={props => {
            console.log(props);
            return (
              <Form>
                <div>
                  <h3>Vulnerability is strength.</h3>
                  <h3>Honesty is powerful!</h3>
                  <h4>Write the words you really want to say.</h4>
                </div>
                
                <MessageBox className='messageBox'>
                  <label htmlFor='message'>Message: </label>
                  <Field name='message' as='textarea' placeholder='Enter message' required/>
                </MessageBox>

                <Button className='button' type='submit' disabled={props.isSubmitting}>
                  {
                    props.isSubmitting ? '...Sending' : 'Send'
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



 