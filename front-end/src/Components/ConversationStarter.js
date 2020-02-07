import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

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
      <div className='ConversationStarter'>
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
                  <h2>Start the conversation!</h2>
                </div>
                <div>
                  <label htmlFor='to'>To: </label>
                  <Field name='recipient_first_name' type='text' placeholder='Recipient First Name' />
                  <ErrorMessage name='recipient_first_name' component='div' className='red' />

                  <Field name='recipient_last_name' type='text' placeholder='Recipient Last Name' />
                  <ErrorMessage name='recipient_last_name' component='div' className='red' />

                  <Field name='recipient_phone' type='tel' placeholder='Recipient Phone Number' />
                  <ErrorMessage name='recipient_phone' component='div' className='red' />
                </div>
                <div>
                  <label htmlFor='topic'>Topic: </label>
                  <Field name='topic' type='text' placeholder='Title' />
                  <ErrorMessage name='topic' component='div' className='red' />
                </div>
                

                <button className='button' type='submit' disabled={props.isSubmitting}>
                  {
                    props.isSubmitting ? '...Creating' : 'Create'
                  }
                </button>
              </Form>
            )
          }}
        />
      </div>
    );
  }
  //<div>
//   <label htmlFor='body'>Message: </label>
//   <textarea name='body'  />
// </div>
  //, sender_first_name: '', sender_last_name: '', sender_phone: '' 