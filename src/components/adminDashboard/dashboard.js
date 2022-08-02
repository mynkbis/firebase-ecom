import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase'
import { collection, query, doc, onSnapshot, deleteDoc} from 'firebase/firestore'
import { ButtonBase, Rating } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { onAuthStateChanged } from 'firebase/auth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Dashboard = () => {
  const [product, setProducts] = useState([]);      //products state
    const [isAdmin, SetIsAdmin]=useState(false) // user state
  const navigate = useNavigate();

const admin="suryabisht.softprodigy@gmail.com"

  const handleUploadProduct = () => {   // for routing to uploadproduct page
    navigate('./uploadproduct')
  }

  const localData=JSON.parse(localStorage.getItem("Email"))
  
  
  useEffect(() => {
    const q = query(collection(db, "Products"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let prodArray = [];
      QuerySnapshot.forEach((doc) => {
        prodArray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(prodArray)
      // console.log("from db", prodArray)
     console.log("from state", product)
    })
    return () => unsub
  }, [])

  
  const handleEdit = (prod) => {         //will store click data to local storage and render
    localStorage.setItem("updatePro", JSON.stringify(prod))
    navigate('../admin/dashboard/editproductdetails')
  }

  const handleDelete = async (id) => {      //for deleting the product details from db
    await deleteDoc(doc(db, "Products", id));
  }
    
  
  useEffect( () => {         // setting up user to access the pages
     if (admin === localData) {
  SetIsAdmin(true)
     } else {
      //  alert("You are not an admin")
    }
   }, [])

    
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
    <>
      {isAdmin? <Box>
        <Box sx={{ mt: 4, mb: 5 }}>
          <Button variant="outlined" onClick={() => { handleUploadProduct() }}>Upload a Product</Button>
        </Box>
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
              <StyledTableCell align="right">Edit</StyledTableCell>
               <StyledTableCell></StyledTableCell>
                <StyledTableCell align="left">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((prod) => (
                <StyledTableRow key={prod.id}>
                  <StyledTableCell component="th" scope="row">{prod.Id}</StyledTableCell>
                  {/* <StyledTableCell align="left">{prod.}</StyledTableCell> */}
                  <StyledTableCell align="left"><img src={ prod.image} style={{width:"5rem", height:"5rem", "margin-right":"2rem" }} /></StyledTableCell>
                  <StyledTableCell align="left">{prod.title}</StyledTableCell>
                  <StyledTableCell align="left">{prod.category}</StyledTableCell>
                  <StyledTableCell align="left">{prod.price}</StyledTableCell>
                  <StyledTableCell align="left">{prod.description.substring(0, 10)}...</StyledTableCell>
                  <StyledTableCell align="left">{prod.stock}</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="left">
                    <ButtonBase sx={{ mr: 4 }}>
                      <EditIcon onClick={() => { handleEdit(prod) }} />
                    </ButtonBase>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <ButtonBase >
                      <DeleteForeverIcon sx={{ color: "blue" }} onClick={() => { handleDelete(prod.id) }} />
                    </ButtonBase>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        : <div>{navigate("../profile")}</div>}
    </>
  )
}
    export default Dashboard