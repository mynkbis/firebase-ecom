import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
import { Button, TextField, Typography } from '@mui/material';
import { auth, db } from '../../firebase'
import { collection, addDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { storage } from '../../firebase'
import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from "firebase/storage"
import {v4 } from "uuid"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductSchema = Yup.object().shape({
   details: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   Price: Yup.string()
     .min(2, 'Too Short!')
     .max(5, 'Too Long!')
     .required('Required'),
     Details: Yup.string()
         .required('Required').max(
             200,'you exceed the limit'
     ),
     
 });


const ProductUpload = () => {
    const [progress, setProgress] = useState(0)
    const [product, setProduct] = useState({
        Title:"",
        Details: "",
        Price: "",
        Category: "",
        Rating: "",
        image: "",
        Id: "",
        Stock:"",
               
    })



   const navigation = useNavigate();

    const handleChange = (e) => {
    setProduct({...product,  [e.target.name] : e.target.value})
        // console.log("handle change",product)
    }


    const handleNavigate = () => {
       navigation("../Home/admin/dashboard/")
    }     
    
    const handleUploadImage = (e) => {
    setProduct({...product, image:e.target.files[0]})
}

    const handleSubmitdetails=()=>{
     const fireStorageRef=ref(storage, `/images/${Date.now()}${product.image.name}`)
        const imageUpload = uploadBytesResumable(fireStorageRef, product.image)
        imageUpload.on("state_changed", (snapshot) => {
            const progressPercentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progressPercentage);    
        }, (error) => {
            alert(error)
        },
            () => {
                setProduct({
                    Title: "",
                    Details: "",
                    Price: "",
                    Category: "",
                    Rating: "",
                    image: "",
                    Id: "",
                    Stock: "",
                });
                getDownloadURL(imageUpload.snapshot.ref).then((url) => {
                    const imageRef = collection(db, "Products");
                    addDoc(imageRef, {
                        title: product.Title,
            Id: product.Id,
            category: product.Category,
            description: product.Details,
            price: product.Price,
            image: url,
            stock:product.Stock
                    }).then(() => {
                        toast("Product Added Successfully", { type: "success" });
                        setProgress(0)
                        alert("added successfully");
                        navigation('../admin/dashboard')
                    })
                        .catch(err => {
                    toast("error occured while adding product", {type: "danger"})
                })
                })
        })
    }

    return (
        <Container sx={{ mt: 5, color:"#1976d2" }}>
        
           <Typography style={{"fontSize":"1.5rem", color:"#1976d2" }}> Fill below details to enter a new product</Typography>

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
                                                 placeholder="Product Description"
                                                defaultValue={product.Details}
                                                onChange={(e) => handleChange(e)}
                                               
                                    />                                      
                                        </Grid>
                                         {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                                    </Grid>
                                    
                                         <Grid item xs={12}>
                                    <Typography>
                                        Product Title
                                    </Typography>
                                     <Grid item xs={12}>
                                 <TextField name="Title" 
                                                placeholder="Product Title"
                                                defaultValue={product.Title}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                </Grid>
                             
                                <Grid item xs={12}>
                                    <Typography>
                                        Product Price
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Price" 
                                                 placeholder="Product Price"
                                                defaultValue={product.Price}
                                                onChange={(e)=>handleChange(e)}
                                                
                                    />
                                        </Grid>  {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
</Grid>
                                        <Grid item xs={12}>
                                    <Typography>
                                        Product ID
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Id" 
                                                placeholder="Product Id"
                                                defaultValue={product.Id}
                                                onChange={(e)=>handleChange(e)}
                                                
                                    />
                                        </Grid>  
                                      {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}    
                                </Grid>                  
                            <Grid item xs={12}>
                                    <Typography>
                                        In-Stock
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Id" 
                                                placeholder ="In-Stock"
                                                defaultValue={product.Stock}
                                                onChange={(e)=>handleChange(e)}                                                
                                    />
                                    </Grid>
                                                  {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}                             
                                </Grid>





                                <Grid item xs={12}>
                                    <Typography>
                                        Product Category
                                    </Typography>
                                    <Grid item xs={12}>
                                 <TextField name="Category" 
                                                placeholder="Product Category"
                                                defaultValue={product.Category}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                        </Grid>
                                          {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product Image
                                    </Typography>
                                     <Grid item xs={12}>
                                            <TextField type="file" name="image" defaultValue={product.image}
                                                onChange={(e) => handleUploadImage(e)} />
                                            {progress===0? null:(
                                            <Typography sx={{width:`${progress}%`}}>
                                                    {`Uploading Image ${progress}%`}
                                            </Typography>)}
                                    </Grid>
                                    
                                </Grid>
                           
                                                         </Grid>
                        </Form>
                    </Formik>
                    <Button variant="contained" onClick={()=>handleSubmitdetails()}>Submit</Button>
                </Container>
            </Grid>
              {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
            </Grid>
            <Grid sx={{ mt:4}}>
                 <Button variant="outlined" color="success" onClick={()=>handleNavigate()}>Back to Dashboard</Button>
            </Grid>
           
    </Container>
      

      
  )
}

export default ProductUpload