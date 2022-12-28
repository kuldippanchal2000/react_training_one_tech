/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import './day11.scss';

const form = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('FirstName Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('LastName Required'),
  password: Yup.string().required('Password required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('please enter correct password '),
  email: Yup.string().email('Invalid email').required('Email Required'),
  gender: Yup.string().required('A radio option is required'),
  department: Yup.string().required('please select your department!'),
  terms: Yup.string().required('You must accept the terms and conditions.'),
});

function Day11() {
  const [data, setData] = useState(null);
  return (
    <div className="day11-container d-flex justify-content-center  align-items-center flex-column ">
      <div className="container  d-flex justify-content-center  align-items-center flex-column">
        <div className="form-header">
          <div className="h2 text-dark mt-3">SignUp</div>
        </div>
        <div className="form-div">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              password: '',
              confirmPassword: '',
              email: '',
              gender: '',
              department: '',
              terms: '',
            }}
            validationSchema={form}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setData(values);
                setSubmitting(false);
              }, 4000);
            }}
          >
            {({ errors, isSubmitting, resetForm }) => (
              <Form className="form-body">
                <div className="form-group mb-1 mb-1 row">
                  <label className="col-sm-6 h5 text-dark">FirstName:</label>
                  <Field
                    className="field col-sm-6"
                    name="firstName"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.firstName ? <div className="text-danger h6">{errors.firstName}</div> : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">LastName:</label>
                  <Field
                    className="field col-sm-6"
                    name="lastName"
                    placeholder="Enter your surname"
                  />
                </div>
                {errors.lastName ? <div className="text-danger h6">{errors.lastName}</div> : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">Password:</label>
                  <Field
                    className="field col-sm-6"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password ? <div className="text-danger h6">{errors.password}</div> : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">ConfirmPassword:</label>
                  <Field
                    className="field col-sm-6"
                    name="confirmPassword"
                    placeholder="Reenter the password"
                  />
                </div>
                {errors.confirmPassword ? (
                  <div className="text-danger h6">{errors.confirmPassword}</div>
                ) : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">Email:</label>
                  <Field className="field col-sm-6" name="email" placeholder="Email" />
                </div>
                {errors.email ? <div className="text-danger h6">{errors.email}</div> : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">Gender:</label>
                  <label className="field col-sm-3">
                    <Field type="radio" name="gender" value="male" />
                    Male
                  </label>
                  <label className="field col-sm-3">
                    <Field type="radio" name="gender" value="female" />
                    Female
                  </label>
                </div>
                {errors.gender ? <div className="text-danger h6">{errors.gender}</div> : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-6 h5 text-dark">Department:</label>
                  <Field className="field col-sm-4" name="department" as="select">
                    <option value="select">Select</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value=".Net">.Net</option>
                    <option value="Flutter">Flutter</option>
                  </Field>
                </div>
                {errors.department ? (
                  <div className="text-danger h6">{errors.department}</div>
                ) : null}
                <div className="form-group mb-1 row">
                  <label className="col-sm-12 h5 text-dark">
                    <Field type="checkbox" name="terms" />I have Read the Policy and Accepted It.
                  </label>
                </div>
                {errors.terms ? <div className="text-danger h6">{errors.terms}</div> : null}
                <div className="text-center">
                  <button className="btn btn-primary" disabled={isSubmitting} type="submit">
                    Submit
                  </button>
                  {'  '}
                  <button className="btn btn-primary" type="button" onClick={resetForm}>
                    Reset All
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Card style={{ width: '18rem' }}>
        <div className="display-flex flex-direction-column">
          {data ? (
            <div className="h5 text-dark">
              <label>firstName: </label>
              {data.firstName}
              <br />
              <label>lastName: </label>
              {data.lastName}
              <br />
              <label>password:</label>
              {data.password}
              <br />
              <label>repassword:</label> {data.confirmPassword}
              <br />
              <label>email:</label>
              {data.email}
              <br />
              <label>gender:</label>
              {data.gender}
              <br />
              <label>department:</label> {data.department}
              <br />
            </div>
          ) : (
            <h2 className="text-danger">No data found.</h2>
          )}
        </div>
      </Card>
    </div>
  );
}
export default Day11;
