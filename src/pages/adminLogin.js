import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup } from "firebase/auth"
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
   username: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
const AdminLogin = () => {
const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();



    const googleLogin = async () =>{
    await signInWithPopup(auth, provider)
          .then((result) => {
             // const token = credential.accessToken;
           // The signed-in user info.
            localStorage.setItem("Email",JSON.stringify(result.user.email))
            const user = result.user;
           if (user) navigate("admin/dashboard")
          }).catch((error) => {
           // Handle Errors here.
          //  alert("Please try again")
          })}


  return(
  <div>
    <h1>Admin Login</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="username" />
          {/* If this field has been touched, and it contains an error, display it
            */}
          {touched.username && errors.username && <div>{errors.username}</div>}
          <Field name="email" />
          {/* If this field has been touched, and it contains an error, display
           it */}
          {touched.email && errors.email && <div>{errors.email}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
      


<button type="button" class="login-with-google-btn" onClick={() => { googleLogin() }}>
   Sign in with Google
</button>
    

      
  </div>)
};

export default AdminLogin;