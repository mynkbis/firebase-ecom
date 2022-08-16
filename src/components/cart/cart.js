import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/cartSlice'
import './cart.css'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
  import { styled } from '@mui/material/styles';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import { ButtonBase, Rating } from '@mui/material';
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart  = useSelector((state) => state.cart)
  // console.log("from cart", cart);
  const [total, setTotal] = useState(); 
  const user=JSON.parse(sessionStorage.getItem("User"))

  useEffect(() => {
    dispatch(getTotals());
    setTotal(cart.cartTotalAmount)
  
  },[dispatch,cart])
  
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleClear = () => {
    // localStorage.clear();
    dispatch(clearCart());
    navigate('../products')
    alert("cart is cleared continue shopping")
  }
  
  const handleDecreaseCart = (cartItem) => {
  dispatch(decreaseCart(cartItem))
  }
  
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  

  const handleCheckOut = () => {
    if (!user) {
      alert("Kindly Login to place order");
      navigate('../login');
    }
    else { navigate("../checkout") }
    
    localStorage.setItem("total", total)
  }



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
 


  return (
    <Grid className='cart-containter' >  
      <Typography variant="h3">Your Shopping cart</Typography>
      {
        cart.cartItems.length === 0 ? (
          <Typography className="cart-empty">
            <Typography>Your cart is empty</Typography>
        
            </Typography>)
          : (

    <Box>
       <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {/* <StyledTableCell align="left">DB id</StyledTableCell> */}
                <StyledTableCell align="left">Product ID</StyledTableCell>
                    <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Price&nbsp;($)</StyledTableCell>
              <StyledTableCell align="left">Details</StyledTableCell>
            
                       <StyledTableCell align="left">Stock</StyledTableCell>
              <StyledTableCell align="right" sx={{ml:"20rem"}}>Remove</StyledTableCell>
               <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="left">Quantity</StyledTableCell>
                        <StyledTableCell align="left">TotalPrice</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
               {cart.cartItems &&
        cart.cartItems.map((cartItem, id) => (
                <StyledTableRow key={cartItem.id}>
                  <StyledTableCell component="th" scope="row">{cartItem.Id}</StyledTableCell>
                  {/* <StyledTableCell align="left">{prod.}</StyledTableCell> */}
            <StyledTableCell align="left"><img src={cartItem.image} alt={cartItem.title } style={{width:"5rem", height:"5rem", "margin-right":"2rem" }} /></StyledTableCell>
                  <StyledTableCell align="left">{cartItem.title}</StyledTableCell>
                  <StyledTableCell align="left">{cartItem.category}</StyledTableCell>
                  <StyledTableCell align="left">{cartItem.price}</StyledTableCell>
                  <StyledTableCell align="left">{cartItem.description.substring(0, 10)}...</StyledTableCell>
                  <StyledTableCell align="left">{cartItem.stock}</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="left">
                    <ButtonBase sx={{ mr: 4 }}>
                      <Button onClick={() => handleRemoveFromCart(cartItem)}>Remove</Button>
                    </ButtonBase>
            </StyledTableCell>
        
                  <StyledTableCell align="left">
              <ButtonBase>
                <Button sx={{ color: "green", border: ".01px solid green" }} onClick={() => handleAddToCart(cartItem)}>+</Button>
                <Typography sx={{width:"1.5rem"}} className="count">{cartItem.cartQuantity}</Typography>
                <Button sx={{ color: "red", border: ".01px solid red" }} onClick={() => handleDecreaseCart(cartItem)}>
                      - </Button>
               
              </ButtonBase>
              
            </StyledTableCell>
            <StyledTableCell align="right">
               <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div> 
              </StyledTableCell>
            
                </StyledTableRow>
              ))}
                  </TableBody>
                  
          </Table>
        </TableContainer>
      </Box>) }

     
      <Grid>
        {/* {cart && cart.length < 1 && !cart ? <h1>"Please add something in cart to preceed checkout"</h1> : */}
        
          <Grid className="cart-summary">
            <Grid className="subtotal">
              <span>Total Cart Value: </span>
              <span className="amount">${cart.cartTotalAmount}</span>
            </Grid>
            <ButtonBase>
              <Button sx={{ color: "white", backgroundColor: "#1976d2", '&:hover': { backgroundColor: "red" } }} onClick={() => handleClear()}>Clear Cart</Button>
            </ButtonBase>
          </Grid>
          <Grid className="continue-shopping">
            <Link to='/products'>
              <Typography variant="h5">Continue Shopping</Typography>
            </Link>
          </Grid>
                                   
        </Grid>
      
  <div>Summary
          <div>
            <span>subtotal: {cart.length} items</span>
          </div>
          <span>Total Price: ${total}</span>
        </div>
        <div>
        
          <button onClick={() => { handleCheckOut() }}>CheckOut</button>  
        </div>
      </Grid>
  )
}

export default Cart