import React from "react"
import { useSelector } from "react-redux"
import { addToCart } from '../../redux/cartSlice';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './productDetail.css'
export const SingleProductDetails = (prod) => {
  
  // console.log("from single page",prod)
  const dispatch = useDispatch();
  const navigate = useNavigate();

const Product=JSON.parse(localStorage.getItem("productsingle"))
    
  const handleAddToCart = (Product) => {
    dispatch(addToCart(Product))
    navigate('/cart')
  }
 return (
      <Grid className="singleProductContainer">      
          <Grid className="singleProductContainer1">
              <div> <strong>Product Id</strong>: {Product.Id}</div>
              <div><strong>Title</strong>: {Product.title}</div>
             
              <div><img className="singleProductimg" src={Product.image} alt={Product.title} /></div>
     </Grid>
     {!Product.stock?
       <div><strong>Stock: Out of Stock</strong></div> : <div><strong>Stock:</strong> {Product.stock}</div>}
          <div><strong>Price:</strong> ${Product.price}</div>
              <div><strong>Description</strong>: {Product.description}</div>
     <div><strong>Category</strong>: {Product.category}</div>
    
     <Button onClick={() => navigate("../products")} >Back</Button>
     {!Product.stock? <Button disabled onClick={() => handleAddToCart(Product)}>Add to cart</Button> : <Button onClick={() => handleAddToCart(Product)}>Add to cart</Button> }
   
     
         
      </Grid>
  )
}