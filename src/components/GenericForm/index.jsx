"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const GenericForm = ({ fields, initialValues, validationSchema, onSubmit }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => (
          <Form>
            {fields.map((field) => (
              <div key={field.name} className="form-field">
                <label htmlFor={field.name} className="form-label">
                  {field.label}
                </label>
                <Field
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="form-input"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="form-error"
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-button"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GenericForm;