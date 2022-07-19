import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
import { Button, TextField, Typography } from '@mui/material';
import { auth, db } from '../firebase'
import { collection, addDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const ProductUpload = () => {
    const [product, setProduct] = useState({
        Title:"",
        Details: "",
        Price: "",
        Category: "",
        Rating: "",
        Image: "",
        Id: "",
        test: ""
        
    })
    const navigation = useNavigate();

    const handleChange = (e) => {
    
        setProduct({...product,  [e.target.name] : e.target.value})
        console.log("handle change",product)
    }

    const handleSubmitdetails = async () => {
        await addDoc(collection(db, "Products"), {
            title: product.Title,
            rating: product.Rating,
            Id: product.Id,
            category: product.Category,
            description: product.Details,
            price: product.Price,
            image: product.Image,
            test:product.test,
            
            
        }).then(function (res) {
            alert("added")
             navigation("../Home/admin/dashboard/")
        }).catch(function (error) {
            alert("cant be added")
        })
        // console.log("added to db"),
    }

    const handleNavigate = () => {
       navigation("../Home/admin/dashboard/")
    }        

    return (
        <Container sx={{ mt: 5 }}>
        Fill below details to enter a new product

        <Grid container spacing={2} sx={{mt:5}}>
            <Grid item>
               <Container >
                    <Formik>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product Details
                                        </Typography>
                                           <Grid item xs={12}>
                                    <TextField name="Details" 
                                                label="Product Description"
                                                defaultValue={product.Details}
                                                onChange={(e) => handleChange(e)}
                                               
                                    />                                      
                                </Grid>
                                </Grid>
                             
                                <Grid item xs={12}>
                                    <Typography>
                                        Product price
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Price" 
                                                label="Product Price"
                                                defaultValue={product.Price}
                                                onChange={(e)=>handleChange(e)}
                                                
                                    />
                                        </Grid>
</Grid>
                                        <Grid item xs={12}>
                                    <Typography>
                                        Product ID
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Id" 
                                                label="Product Id"
                                                defaultValue={product.Id}
                                                onChange={(e)=>handleChange(e)}
                                                
                                    />
                                    </Grid>
                                        


                                        
                                </Grid>
                               
                                <Grid item xs={12}>
                                    <Typography>
                                        Product category
                                    </Typography>
                                    <Grid item xs={12}>
                                 <TextField name="Category" 
                                                label="Product Category"
                                                defaultValue={product.Category}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product image
                                    </Typography>
                                     <Grid item xs={12}>
                                 <TextField name="Product Image" 
                                            
                                                defaultValue={product.Image}
                                                onChange={(e) => handleChange(e)}
                                                type="file"
                                    />
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product rating
                                    </Typography>
                                     <Grid item xs={12}>
                                 <TextField name="Rating" 
                                                label="Product Rating"
                                                defaultValue={product.Rating}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product title
                                    </Typography>
                                     <Grid item xs={12}>
                                 <TextField name="Title" 
                                                label="Product Title"
                                                defaultValue={product.Title}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                </Grid>
                                {/* <input type="file"></input> */}
                                <input type="text" id="title" defaultValue={product.test} placeholder="text" name="test" onChange={(e)=>handleChange(e)}></input>

                            </Grid>
                        </Form>
                    </Formik>
                    <Button variant="contained" onClick={()=>handleSubmitdetails()}>Submit</Button>
                </Container>
            </Grid>
            
            </Grid>
            <Grid sx={{ mt:4}}>
                 <Button variant="outlined" color="success" onClick={()=>handleNavigate()}>Back to Dashboard</Button>
            </Grid>
           
    </Container>
      

      
  )
}

export default ProductUpload