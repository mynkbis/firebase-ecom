import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, query, doc, onSnapshot, deleteDoc } from 'firebase/firestore'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/cartSlice'



const ProductComponent = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
     
    const q = query(collection(db, "Products"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let prodArray = [];
      QuerySnapshot.forEach((doc) => {
        prodArray.push({ ...doc.data(), id: doc.id });
      });
     
      setProducts(prodArray)
       if (product) {
        setIsLoading(false)
      }
      // console.log("from db", prodArray)
      // console.log("from state", product)
    })
    return () => unsub
  }, [])

const handleAddToCart = (prod) => {
    // console.log("add cart clicked")
  dispatch(addToCart(prod))
  
    // navigate('/cart')
}
  
  
  const handleDecreaseCart = (prod) => {
  dispatch(decreaseCart(prod))
  }
  
  const handleSinglePage = (prod) => {
    localStorage.clear();
    navigate("../productDetails");
    localStorage.setItem("productsingle", JSON.stringify(prod))
  }
  
  return (
    <Grid className='main'>
      {isLoading? <Typography sx={{fontSize:35, ml:"2rem"}}>Loading...</Typography> : product.map((prod) => {
        return (
<Typography className='productBox'>
          <Typography className='productBox1'>
            
            <img src={prod.image} alt={prod.title} style={{ width:"50%", height:"auto"}} onClick={()=>handleSinglePage(prod)} />
            <Typography><strong>Title:</strong> {prod.title }</Typography>
              <Typography><strong>Price:</strong> ${prod.price}</Typography>

              {!prod.stock? <Typography style={{ color: "red"}}><strong>Stock: Out of Stock</strong></Typography> :
                <Typography> <strong>InStock:</strong> {prod.stock}</Typography>}
              
              
            <Typography className='product details'><strong>Details:</strong> {prod.description.substring(0,65)}...</Typography>
            <Typography><strong>Category: </strong>{prod.category}</Typography>
              <Typography><br /></Typography>

              { !prod.stock?  <> <Button  disabled onClick={() => handleAddToCart(prod)} >Add to cart</Button>  
                <div className="cart-product-quantity">
                    <Button disabled onClick={() => handleDecreaseCart(prod)}>
                      - </Button>
                    <div className="count">{cart.count}</div>
                    <Button disabled onClick={() => handleAddToCart(cart.cartItem)}>+</Button>
                  </div></>
:    <Button onClick={() => handleAddToCart(prod)} >Add to cart</Button>}
          
</Typography>
          </Typography>
        )
      })}
      </Grid>
        )}

export default ProductComponent;
