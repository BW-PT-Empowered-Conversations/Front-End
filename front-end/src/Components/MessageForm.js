import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { postMessage } from '../Actions/messageActions'

import messageList from './messageList'

const MessageForm = () => {
  console.log(props)
  return (
    <Form>
      {props.touched && props.errors.message && <p>Please enter a message!</p>}
      <Field
        type="text"
        name="message"
        placeholder="Type your message here"
        value={props.values.message}
      />
    </Form>
  )
}

const MessageFormWithFormik = withFormik({
  mapPropsToValues: values => {
    return {
      message: values.message || '',
    }
  },
  validationSchema: yup.object().shape({
    message: yup.string().required('Please enter a message'),
  }),
  handleSubmit: (values, formikBag) => {
    console.log('Formik bag', formikBag)
    formikBag.props.postMessage(values)
    console.log(values)
    formikBag.resetForm()
  },
})(MessageForm)

export default connect(null, { postMessage })(MessageFormWithFormik)
