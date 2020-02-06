import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import axios from 'axios';
//import Popup from 'reactjs-popup';

export default function ConversationStarter() {
  return (
      <div className='ConversationStarter'>

        <Formik
          initialValues={{ recipient_first_name: '', recipient_last_name: '', recipient_phone: '', sender_first_name: '', sender_last_name: '', sender_phone: '' }}
          render={props => {
            console.log(props);
            return (
              <Form>
                <div>
                  <h1>Start the conversation!</h1>
                </div>
                <div>
                  <label htmlFor='to'>To:</label>
                  <Field name='recipient_first_name' type='text' placeholder='Recipient First Name' />
                  <ErrorMessage name='recipient_first_name' component='div' className='red' />

                  <Field name='recipient_last_name' type='text' placeholder='Recipient Last Name' />
                  <ErrorMessage name='recipient_last_name' component='div' className='red' />

                  <Field name='recipient_phone' type='text' placeholder='Recipient Phone Number' />
                  <ErrorMessage name='recipient_phone' component='div' className='red' />
                </div>
                <div>
                  <label htmlFor='body'>Body:</label>
                  <textarea name='body'  />
                </div>


                {/* <Field name='sender_first_name' type='text' placeholder='Sender First Name' />
                <ErrorMessage name='sender_first_name' component='div' className='red' />

                <Field name='sender_last_name' type='text' placeholder='Sender Last Name' />
                <ErrorMessage name='sender_last_name' component='div' className='red' />

                <Field name='recipient_phone' type='text' placeholder='Sender Phone Number' />
                <ErrorMessage name='recipient_phone' component='div' className='red' /> */}

                <button className='button' type='submit' disabled={props.isSubmitting}>
                  {
                    props.isSubmitting ? '...Sending' : 'Send'
                  }
                </button>
              </Form>
            )
          }}
        />
      </div>
    );
  }