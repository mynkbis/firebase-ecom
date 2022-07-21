/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup } from "firebase/auth"
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CardContent } from '@mui/material';
import Validation from "../components/validation"


// eslint-disable-next-line no-unused-vars
const DisplayingErrorMessagesSchema = Yup.object().shape({
   Password: Yup.string()
     .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "must contain 8 caharacter,special,upper and lower case and atleast 1 number"
    ),
   email: Yup.string().email('Invalid email')
 });
 
const AdminLogin = () => {
  const [fValues, setFValues] = useState({
    loginEmail: "",
    loginPassword:""
})

  const [errors, setErrors] = useState({});
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

  const handleChange = (e) => {
 // console.log("ufyifyfff", e.target.value, e.target.name)
  setFValues({...fValues, [e.target.name]:e.target.value})
  }

const handleLogin = async () => {
  console.log("submiit", fValues)
  localStorage.setItem("Email",JSON.stringify(fValues.loginEmail))
    try {
      const user = await signInWithEmailAndPassword(auth, fValues.loginEmail, fValues.loginPassword)   
      if(user)navigate("/admin/dashboard")
             // using inbuit method of firebase fr signing in. 
      console.log("user loged in is ", user)
    } catch (error) {
      setErrors(Validation(fValues));
      console.log(error.message)
    }  
    setFValues({
   loginEmail: "",
    loginPassword:""
 })
  }
  return(
    <>
      <Box sx={{
        p: 2, border: '1px solid blue',
        mt:10,
        boxShadow: "2px 2px 50px",
        width: 400,
        height: 580,
        position: 'relative',
        left: "40%",
        borderRadius: 5
      }}    >  
        <CardContent>
              <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Admin Sign in
            </Typography>
            <TextField
              margin="normal"
              required
                size="Normal"
              id="email"
              label="Email Address"
              name="loginEmail"
              autoComplete="email"
              autoFocus
              defaultValue={fValues.loginEmail}
              onChange={(e) => handleChange(e)} />     
            <Typography color="red">
            {errors.email && <p>{ errors.email}</p>}
            </Typography>
            <TextField
              margin="normal"
              required
              size="Normal"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              name="loginPassword"
              defaultValue={fValues.loginPassword}
               onChange={(e) => handleChange(e)}
            />
            <Typography color="red"> {errors.password && <p>{ errors.password }</p>}
              
            </Typography>

              <Button
              type="submit"
             
              variant="contained"
              onClick={(e) => handleLogin()}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> 
       
        
          <Button   sx={{ width: 140,
        height: 40,}}type="button" className="login-with-google-btn" onClick={() => { googleLogin() }}>
   Sign In
          </Button>
          

 <Grid container>
              <Grid item sx={{ml:14, mt:2}}>
                <Link href="/forgetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              </Grid>



    </Box>
</CardContent>
     
        </Box>

  </>)
};

export default AdminLogin;