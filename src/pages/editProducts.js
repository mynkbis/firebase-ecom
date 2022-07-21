import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
import { Button, Card, TextField, Typography } from '@mui/material';
import { db } from '../firebase'
import { collection, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const EditProducts = () => {
     const [prod, setProd] = useState([]);
    const [product, setProduct] = useState({
        Title:"",
        Details: "",
        Price: "",
        Category: "",
        Rating: "",
        Image: "",
        Id: "",
        Stock: ""        
    })

    const data=JSON.parse(localStorage.getItem('updatePro'))
console.log(data)
    const navigation = useNavigate();

    const handleChange = (e) => {
        setProduct({...product,  [e.target.name] : e.target.value})
        console.log("handle change",product)
    }


   const handleEdit = async (id) => {
         updateDoc(collection(db, "Products",id), {
            title: product.Title,
            rating: product.Rating,
            Id: product.Id,
            category: product.Category,
            description: product.Details,
            price: product.Price,
            image: product.Image,
            stock:product.Stock,
            
            
        }).then(function (res) {
            alert("Updated")
                localStorage.clear();
             navigation("../admin/dashboard/")
        }).catch(function (error) {
            alert("Can't be Updated")
        })
        // console.log("added to db"),
    }

    const handleNavigate = () => {
        localStorage.clear();
       navigation("../admin/dashboard/")
    }     

      return (
          <Container sx={{ mt: 5 }}>
               <Typography>
                                        Product Details
                                        </Typography>
      <Card>
        <Grid container spacing={2} sx={{mt:5}}>
            <Grid item>
                       <Formik>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product Details
                                        </Typography>
                                           <Grid item xs={12}>
                                    <TextField name="Details" 
                                                label={data.description}
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
                                                label={data.price}
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
                                                label={data.Id}
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
                                                label={data.category}
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
                                     <input  type="file"  defaultValue={product.Image}
                                              ></input>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Product rating
                                    </Typography>
                                     <Grid item xs={12}>
                                 <TextField name="Rating" 
                                                label={data.rating}
                                                defaultValue={product.Rating}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Typography>
                                        In-Stock
                                        </Typography>
                                          <Grid item xs={12}>
                                 <TextField name="Id" 
                                                label={data.stock}
                                                defaultValue={product.Stock}
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
                                                label={data.title}
                                                defaultValue={product.Title}
                                                onChange={(e)=>handleChange(e)}
                                    />
                                    </Grid>
                                </Grid>
                              </Grid>
                        </Form>
                    </Formik>
                    <Button variant="contained" onClick={()=>handleEdit(product.Id)} sx={{mt:5}}>Submit</Button>
                        </Grid>
            
            </Grid>
            <Grid sx={{ mt:4}}>
               
            </Grid>
              </Card>
                <Button variant="outlined" color="success" onClick={()=>handleNavigate()} sx={{mt:5}} >Back to Dashboard</Button>
    </Container>
      

      
  )
}

export default EditProducts