import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography,Grid } from '@mui/material';

import ProductComponent from '../../components/productComponent/productComponent';
const ListingPage = () => {
       

 return (
      <Grid>
      <Typography  sx={{p:5, ml:5, mb:5}} >
       <ProductComponent />
       </Typography>
    </Grid>
  )
}

export default ListingPage
