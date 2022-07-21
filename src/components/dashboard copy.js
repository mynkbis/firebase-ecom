import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'
import { collection, query, doc, onSnapshot, deleteDoc} from 'firebase/firestore'
import { ButtonBase, Rating } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { onAuthStateChanged } from 'firebase/auth';


const Dashboard = () => {
  const [product, setProducts] = useState([]);      //products state
   const [user, setUser] = React.useState({})   // user state
  const navigate = useNavigate();


  const handleUploadProduct = () => {   // for routing to uploadproduct page
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
      // console.log("from db", prodArray)
      // console.log("from state", product)
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
    
  
  useEffect(() => {         // setting up user to access the pages
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
     })
    return () => unsubscribe();
  }, [])

    
  return (
    <Box sx={{ mt: 4 }}>
      {!user && <Box>Kindly login first to use this feature </Box>}
      {user && <Box>      <Typography component={'span'}  >
        Hello Admin here is a summary of your product details
      </Typography>
        <Box sx={{ mt: 4 }}>
          <div>
            <Button variant="outlined" onClick={() => { handleUploadProduct() }}>Upload a Product</Button>
          </div>
        </Box>
        <Card sx={{ minWidth: 275, maxWidth: 800, m: "5vw", ml: "28vw" }}>
          <CardContent>
            <Typography component={'span'} sx={{ fontSize: 24 }} color="text.secondary">
              Product Details
            </Typography>
            {/* here we are maping the products for render */}
            {product.map((prod) => (
              <Card key={prod.id}>
                <Card key={prod.id} sx={{ minWidth: 275, maxWidth: 800, m: "5vw", ml: "28vw" }}>
                  <Box>
                    <Typography component={'span'} >Title: {prod.title}</Typography>
                  </Box>
                  <Box>
                    <Typography component={'span'} >Product Id: {prod.Id}</Typography>
                  </Box>
                  <Box>
                    <Typography component={'span'} >Details: {prod.description.substring(0, 10)}....</Typography>
                  </Box>
                  <Box>
                    <Typography component={'span'} > Price: ${prod.price}</Typography>
                  </Box>
                  <Box>
                    <Typography component={'span'} >Category: {prod.category}</Typography>
                  </Box>
                  <Box sx={{ m: 2 }}>
                    <ButtonBase>
                      <EditIcon onClick={() => { handleEdit(prod) }} />
                    </ButtonBase>
                    <Rating>{prod.rating}</Rating>
                    <ButtonBase>
                      <DeleteForeverIcon sx={{ color: "blue", hover: { color: "red" } }} onClick={() => { handleDelete(prod.id) }} />
                    </ButtonBase>
                  </Box>
                </Card>
              </Card>
            ))}
          </CardContent>
        </Card>
      </Box>
      }
    </Box>    
  )
}

export default Dashboard