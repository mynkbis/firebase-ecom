import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './checkOutPage.css'

const CheckOutPage = () => {

  const navigate=useNavigate()
  const price = localStorage.getItem("total")
  
  return (
    <div style={{ height: "100vh" }} >
      <h1>Enter the Shipping Details for your order</h1>
      <h2>Total Cart Amount: ${price}</h2>
      <div className='formBox' >
      
        <Formik initialValues={{ email: '', address: '', name: '', phoneNumber: '', alterNo: '', }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phoneNumber: Yup.string()
              .required("This field is Required")
              .max(10, "Only 10 digit number")
              .matches(new RegExp('[0-9]{10}'), "Phone number is not valid"),
            address: Yup.string()
              .max(80, "upto 80 characters")
            })}
          
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            navigate('/payment')
            }, 400);
          }}
     >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name </label>
                <Field name="firstName" type="text" />
                <h6><ErrorMessage name="firstName" /></h6>                
              </div>
              <div>
                <label htmlFor="lastName">Last Name </label>
                <Field name="lastName" type="text" />
                <h6><ErrorMessage name="lastName" /></h6>
              </div>
              <div>
                <label htmlFor="email">Email Add </label>
                <Field name="email" type="email" />
               <h6><ErrorMessage name="email" /></h6>
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone No. </label>
                <Field name="phoneNumber" type="integer" required=""/>
               <h6> <ErrorMessage name="phoneNumber" /></h6>
              </div>
              <div>
                <label htmlFor="address">Address </label>
                <Field  name="address" type="text" minlength="20" required="required"/>
                <h6><ErrorMessage name="address" /></h6>
              </div>
             
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CheckOutPage;