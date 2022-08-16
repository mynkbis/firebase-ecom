import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { auth, db } from '../../firebase'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc,where, orderBy, getDocs} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonBase, Rating } from '@mui/material';
import { Box } from '@mui/system'
const DashboardUser = props => {
  const [ordersDetails, setOrdersDetails] = useState();

     
  const user = sessionStorage.getItem("User")
  // console.log(user, "ser")
  useEffect(() => {
    const arrayData = [];
    const q = getDocs(collection(db, 'orders'), where('email', "==", user))
    // const q = getDocs(collection(db, 'orders'),)
    // console.log(q, "sdfsd")
    arrayData.push(q)
    Promise.all(arrayData).then((snapshots) => {
        const docData = [];
      for (const snap of snapshots) {
        for (const doc of snap.docs) {
          // let data = doc.data();
            docData.push(doc.data())
        // console.log(docData, "sdfsdfsdfsdf")
          setOrdersDetails(docData)
          // console.log(orders,"orders")
               }
      }
    })
  })
    
  const dateFunction = () => {
  
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
      <Grid className="container">
        {user ? <Typography variant='h5'>Hello: {user}</Typography> : "Hello User"}
        <Typography> Your Order history</Typography>

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
                     <StyledTableCell align="left">Quantity</StyledTableCell>
                  {/* <StyledTableCell align="left">TotalPrice</StyledTableCell> */}
                       <StyledTableCell align="left">Ordered on</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {ordersDetails && ordersDetails.map((order) => {
                  return (
                    <StyledTableRow key={order.email}>
                      <StyledTableCell component="th" scope="row">{order.products[0].Id}</StyledTableCell>
                      <StyledTableCell align="left"><img src={order.products[0].image} alt={order.products[0].title}
                        style={{ width: "5rem", height: "5rem", "marginRight": "2rem" }} /></StyledTableCell>
                      
                      <StyledTableCell component="th" scope="row">{order.products[0].title}</StyledTableCell>

                      <StyledTableCell component="th" scope="row">{order.products[0].category}</StyledTableCell>

                      <StyledTableCell component="th" scope="row">{order.products[0].price}</StyledTableCell>

                      <StyledTableCell component="th" scope="row">{order.products[0].description.substring(0, 25)}...</StyledTableCell>
                      
                      <StyledTableCell component="th" scope="row">{order.products[0].cartQuantity}</StyledTableCell>

                      <StyledTableCell component="th" scope="row">nan</StyledTableCell>
                    </StyledTableRow>
                  )
                })
                }
                  </TableBody>                  
          </Table>
        </TableContainer>
      </Box>

   
      </Grid>
    )
}

export default DashboardUser