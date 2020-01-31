import React from 'react';
import ReactDOM from 'react';
import { withFormik, Form, Field } from 'formik';

export default function SignUp() {
    return (
        <Formik 
            initialValues={{ username: '', password: '', firstName: '', lastName: '', phone: '', email: ''}}   
            onSubmit={(...things) => {
                console.log(things);
            }} 
            render={props => {
                return (
                  <Form>
                    <Field username='username' type='text' placeholder='username' />
                    <Field password='password' type='text' placeholder='password' />
                    <Field fname='firstName' type='text' placeholder='First Name' />
                    <Field lname='lastName' type='text' placeholder='Last Name' />
                    <Field phone='phone' type='text' placeholder='phone' />
                    <Field email='email' type='text' placeholder='email' />

                    <input type='submit' />
                  </Form>
                )
            }}
        />
    );
}
