import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import React from 'react';
import { CookiesProvider } from 'react-cookie';

import Onboarding from './onboarding';

function SignupForm() {
  const paperStyle = { padding: '0 15px 40px 15px', width: 250 };
  const btnStyle = { marginTop: 10 };
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    phoneNumber: Yup.number().typeError('Enter valid Phone number'),
  });
  const onSubmit = async (values, props) => {
    alert(JSON.stringify(values), null, 2);
    props.resetForm();
  };
  //Cookie Provider will change to index.js
  return (
    <div>
      <CookiesProvider>
        <Grid>
          <Paper elevation={0} style={paperStyle}>
            <Grid align="center">
              <Typography variant="caption">Fill the form to create an account</Typography>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={Onboarding}>
              {props => (
                <Form noValidate>
                  {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
          onChange={props.handleChange} /> */}
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    error={props.errors.name && props.touched.name}
                    helperText={<ErrorMessage name="name" />}
                    required
                  />
                  {/* <TextField label='Email' name='email' type='Email' fullWidth 
          {...props.getFieldProps('email')}/> */}
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    error={props.errors.email && props.touched.email}
                    helperText={<ErrorMessage name="email" />}
                    required
                  />
                  <Field
                    as={TextField}
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    error={props.errors.phoneNumber && props.touched.phoneNumber}
                    helperText={<ErrorMessage name="phoneNumber" />}
                    required
                  />
                  <Button type="submit" style={btnStyle} variant="contained" color="primary">
                    Connect to MetaMask
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </CookiesProvider>
    </div>
  );
}
export default SignupForm;
