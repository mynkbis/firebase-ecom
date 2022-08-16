import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"
import Paymentform from './payment'
const Public_key = "pk_test_51LKIp4SBPnLuXhRvsbOVNrM27FpdizG4lBpNaQf1UJQY13581gGwTY7Oe26f5lJsM81Ryy4N8krFAtX6CqKBTaCO00C0JwHXWC"
const stripeTestPromise=loadStripe(Public_key)


 const StripeContainer = () => {
  return (
      <Elements stripe={stripeTestPromise}>
      <Paymentform/>
  </Elements>
)}

export default StripeContainer;