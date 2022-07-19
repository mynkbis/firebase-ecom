import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'
import { collection, query, onSnapshot} from 'firebase/firestore'
import { Rating } from '@mui/material';


const Dashboard = () => {
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleUploadProduct = () => {
    navigate('./uploadproduct')
  }


  useEffect(() => {
    const q = query(collection(db, "Products"));
        const unsub = onSnapshot(q, (QuerySnapshot) => {    
            let prodArray = [];
            QuerySnapshot.forEach((doc) => {
                 prodArray.push({ ...doc.data(), id: doc.id });
            }); 
          setProducts(prodArray)
          console.log("from db",prodArray)
          console.log("from state",product)
        })
return()=>unsub        
    },[])

  return (
    <Box sx={{ mt: 4 }}>
      <Typography >
      Hello Admin here is a summary of your product details
      </Typography>
        <Box sx={{ mt: 4 }}>
        <Button variant="outlined" onClick={()=>{handleUploadProduct()}}>Upload a Product</Button>
      </Box>

      <Card sx={{ minWidth: 275, maxWidth:800, m:"5vw", ml:"28vw" }}>
         <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Product Details
            </Typography>
          {product.map((prod) =>(  
            <Card sx={{ minWidth: 275, maxWidth:800, m:"5vw", ml:"28vw" }}>
              <Typography>Title: {prod.title}</Typography>
              <Typography>Product Id: {prod.Id}</Typography>
              <Typography>Details: {prod.description}</Typography>
              <Typography> Price: ${prod.price}</Typography>
              <Typography>Category: {prod.category}</Typography>
              <Rating>{prod.rating}</Rating>
              </Card>
         ))}
          </CardContent>
      </Card>
     


    </Box>
  )
}

export default Dashboard