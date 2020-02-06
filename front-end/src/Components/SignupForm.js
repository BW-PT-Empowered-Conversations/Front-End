import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Popup from 'reactjs-popup';

const validate = ({ username, password, email, user_phone, first_name, last_name, checkbox }) => {
  const errors = {};

  if (!username) {
    errors.username = 'Username required.'
  } else if (username.length < 3) {
    errors.username = 'Username minimum 3 characters.'
  }

  if (!password) {
    errors.password = 'Password required.'
  } else if (password.length < 6) {
    errors.password = 'Password minimum 6 characters.'
  }

  if (!email) {
    errors.email = 'Email address required.'
  } else if (email.length < 8) {
    errors.email = 'Email must be formatted as abc@provider.com.'
  }

  if (!user_phone) {
    errors.user_phone = 'Mobile phone number required.'
  } else if (user_phone.length < 10) {
    errors.user_phone = 'Mobile number requires 10 digits.'
  }

  if (!first_name) {
    errors.first_name = 'First name required.'
  } else if (first_name.length < 2) {
    errors.first_name = 'First name minimum 2 characters.'
  }

  if (!last_name) {
    errors.last_name = 'Last name required.'
  } else if (last_name.length < 2) {
    errors.last_name = 'Last name minimum 2 characters.'
  }

  if (!checkbox) {
    errors.checkbox = 'Acceptance required. Must be checked to submit.'
  }

  return errors;
}

export default function SignupForm() {

  const [message, setMessage] = useState('');

  const handleSubmit = (values, tools) => {
    axios.post('https://bw-emp.herokuapp.com/api/register', values)
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
      <div className='SignupForm'>
        <div>{message}</div>
      
        <Formik 
            onSubmit={handleSubmit} 
            validate={validate}
            initialValues={{ username: '', password: '', first_name: '', last_name: '', user_phone: '', email: '', checkbox: '' }}
            render={props => {
                console.log(props);
                return (
                  <Form>
                    <div>
                      <h1>Sign Up!</h1>
                    </div>

                    <Field name='username' type='text' placeholder='username' />
                    <ErrorMessage name='username' component='div' className='red' />

                    <Field name='password' type='password' placeholder='password' />
                    <ErrorMessage name='password' component='div' className='red' />

                    <Field name='email' type='email' placeholder='email' />
                    <ErrorMessage name='email' component='div' className='red' />

                    <Field name='user_phone' type='tel' placeholder='Phone' />
                    <ErrorMessage name='user_phone' component='div' className='red' />

                    <Field name='first_name' type='text' placeholder='First Name' />
                    <ErrorMessage name='first_name' component='div' className='red' />

                    <Field name='last_name' type='text' placeholder='Last Name' />
                    <ErrorMessage name='last_name' component='div' className='red' />                  

                    <label>
                    <Field name='checkbox' type='checkbox' checked={props.checked} />
                    <ErrorMessage name='checkbox' component='div' className='red' />
                    <Popup    //modal
                        trigger={<button className="TOS"> Accept Terms of Service </button>}
                        position='bottom right'
                        closeOnDocumentClick
                    >
                        <span> CONDITIONS OF USE
                          Welcome to our website/app. Empowered Conversation and its associates provide
                          their services to you subject to the following conditions. If you visit
                          this website, you accept these conditions. Please read them carefully.
                          ELECTRONIC COMMUNICATIONS
                          When you visit Empowered Conversation or send e-mails to us, you are
                          communicating with us electronically. You consent to receive communications from
                          us electronically. We will communicate with you by e-mail or by posting notices on
                          this site. You agree that all agreements, notices, disclosures and other
                          communications that we provide to you electronically satisfy any legal requirement
                          that such communications be in writing.
                        </span>
                    </Popup>
                    </label>
             
                    <button className='button' type='submit' disabled={props.isSubmitting}>
                      {
                        props.isSubmitting ? '...SUBMITTING' : 'Submit'
                      } 
                    </button>
                  </Form>
                )
            }}
        />
      </div>
    );
}
