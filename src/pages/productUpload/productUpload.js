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
import {ref, uploadBytes} from "firebase/storage"
import {v4 } from "uuid"

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
    const [imageUpload, setImageUpload] = useState(null);
    const [product, setProduct] = useState({
        Title:"",
        Details: "",
        Price: "",
        Category: "",
        Rating: "",
        Image: "",
        Id: "",
        Stock:"",
        test: ""
        
    })


const handleImageUpload = (e) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
        alert("upload successful")
    })

}

    const navigation = useNavigate();

    const handleChange = (e) => {
    
        setProduct({...product,  [e.target.name] : e.target.value})
        console.log("handle change",product)
    }

    const handleSubmitdetails = async () => {
        await addDoc(collection(db, "Products"), {
            title: product.Title,
            Id: product.Id,
            category: product.Category,
            description: product.Details,
            price: product.Price,
            image: product.Image,
            test:product.test,
            stock:product.Stock
            
        }).then(function (res) {
            alert("added")
             navigation("../admin/dashboard/")
        }).catch(function (error) {
            alert("cant be added")
        })
        // console.log("added to db"),
    }

    const handleNavigate = () => {
       navigation("../Home/admin/dashboard/")
    }     
    
    // const imageRef = useRef();

    // const imageUploadRef = () => {
    //     if (imageRef.current) {
    //         imageRef.current.click()
    //    }
    // }

    // const handleImageChange = (e) => {
    //     const URL = e.target.files[0]
    //     setProduct({...product, productImage:URL})
    //     // URL.createObjectURL(fileURL);
    // }

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
                                         {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
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
                                        </Grid>  {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
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
                                      {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}    
                                </Grid>                  
                            <Grid item xs={12}>
                                    <Typography>
                                        In-Stock
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Id" 
                                                label="In-Stock"
                                                defaultValue={product.Stock}
                                                onChange={(e)=>handleChange(e)}                                                
                                    />
                                    </Grid>
                                                  {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}                             
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
                                          {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product image
                                    </Typography>
                                     <Grid item xs={12}>
                                            <input type="file" defaultValue={product.Image}  onChange={(e)=>setImageUpload(e.target.files[0])} />
                                            <Button variant='outlined' onClick={(e)=>handleImageUpload(e)}>Upload</Button>
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
                                {/* <input type="text" id="title" defaultValue={product.test} placeholder="text" name="test" onChange={(e)=>handleChange(e)}></input> */}

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