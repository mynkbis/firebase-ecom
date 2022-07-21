import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ErrorPage = () => {
    return (
    <Box sx={{mt:10}}>
      <Typography variant="h5" component="div">
        Oops you are trying to access something which is currently unavailable! Kindly visit later.
      </Typography>
    </Box>
  )
}

export default ErrorPage