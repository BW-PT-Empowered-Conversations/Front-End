import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const validate = ({ username, password, firstName, lastName, phone, email }) => {
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

  if (!firstName) {
    errors.firstName = 'First name required.'
  } else if (firstName.length < 2) {
    errors.firstName = 'First name minimum 2 characters.'
  }

  if (!lastName) {
    errors.lastName = 'Last name required.'
  } else if (lastName.length < 2) {
    errors.lastName = 'Last name minimum 2 characters.'
  }

  if (!phone) {
    errors.phone = 'Mobile phone number required.'
  } else if (phone.length < 10) {
    errors.phone = 'Mobile number requires 10 characters.'
  }

  if (!email) {
    errors.email = 'Email address required.'
  } else if (email.length < 8) {
    errors.email = 'Email must be formatted as abc@provider.com.'
  }
  return errors;
}
export default function SignupForm() {
    return (
        <Formik 
           onSubmit={(values, tools) => {
                tools.resetForm();
            }} 
            validate={validate}
            initialValues={{ username: '', password: '', firstName: '', lastName: '', phone: '', email: ''}}
            render={props => {
                console.log(props);
                return (
                  <Form>
                    <div>
                      <h1>Sign Up!</h1>
                    </div>

                    <Field name='username' type='text' placeholder='username' />
                    <ErrorMessage name='username' component='div' className='red' />

                    <Field name='password' type='text' placeholder='password' />
                    <ErrorMessage name='password' component='div' className='red' />

                    <Field name='firstName' type='text' placeholder='First Name' />
                    <ErrorMessage name='firstName' component='div' className='red' />

                    <Field name='lastName' type='text' placeholder='Last Name' />
                    <ErrorMessage name='lastName' component='div' className='red' />

                    <Field name='phone' type='number' placeholder='phone' />
                    <ErrorMessage name='phone' component='div' className='red' />

                    <Field name='email' type='email' placeholder='email' />
                    <ErrorMessage name='email' component='div' className='red' />


                    <input type='submit' />
                  </Form>
                )
            }}
        />
    );
}
