import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./style.css";

const ShareholderForm = ({ shareholder }) => (
  <Formik
    initialValues={shareholder}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
  >
    {({ isSubmitting }) => (
      <>
        <h2>Add a Shareholder</h2>
        <Form id="shareholder-form">
          <label>
            Shareholder first name
            <Field type="text" name="firstName" />
          </label>
          <label>
            Shareholder last name
            <Field type="text" name="lastName" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <div>
            <button>Add shareholder</button>
          </div>
        </Form>
      </>
    )}
  </Formik>
);

export default ShareholderForm;
