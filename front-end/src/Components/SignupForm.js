import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function SignupForm() {
    return (
        <Formik 
            initialValues={{ username: '', password: '', firstName: '', lastName: '', phone: '', email: ''}}   
            onSubmit={(values, tools) => {
                tools.resetForm();
            }} 
            render={props => {
                console.log(props);
                return (
                  <Form>
                    <Field name='username' type='text' placeholder='username' />
                    <Field name='password' type='text' placeholder='password' />
                    <Field name='firstName' type='text' placeholder='First Name' />
                    <Field name='lastName' type='text' placeholder='Last Name' />
                    <Field name='phone' type='number' placeholder='phone' />
                    <Field name='email' type='email' placeholder='email' />

                    <input type='submit' />
                  </Form>
                )
            }}
        />
    );
}
