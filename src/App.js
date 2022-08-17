
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/home.js'
import AdminLogin from './pages/adminLogin/adminLogin';
 import NavBar from './components/navbar/navbar copy.js';
 import Footer from './components/footer/footer';
 import About from './pages/about';
 import UserLogin from './pages/userLogin/userLogin.js'
 import Dashboard from './components/adminDashboard/dashboard'
 import ProductUpload from './pages/productUpload/productUpload'
 import ResetAdminPass from './pages/adminForgetPassword/forgotAdminPass'
 import Reset from './pages/adminForgetPassword/forgotPass';
 import EditProducts from './pages/editProduct/editProducts';
 import ErrorPage from './pages/error'
import DashboardUser from './components/userDashboard/dashboardUser';
import ListingPage from './pages/listingPage/listingPage';
import UserSignUp from './pages/userSignUp/signUp'
import Cart from './components/cart/cart'
import { SingleProductDetails } from './pages/productDetailPage/productDetail';
import CheckOutPage from './pages/checkout/checkout'
import StripeContainer from './pages/payment/stripeContainer'
import OrderDetails from './components/adminDashboard/orderdetails/orderdetails'
function App() {
  return (
    <>
    <NavBar/>
   <Routes>
      <Route exact path="/" element={<Home />} /> 
        <Route exact path="/home" element={<Home/>}/> 
        <Route exact path='/adminlogin' element={<AdminLogin />} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route exact path='/login' element={<UserLogin />} /> 
        <Route exact path='/signup' element={<UserSignUp />} /> 
        <Route exact path='/profile' element={<DashboardUser />} /> 
        <Route exact path='/forgetpassword' element={<Reset />} /> 
        <Route exact path='/productdetails' element={<SingleProductDetails />} /> 
        <Route exact path='/products' element={<ListingPage />} /> 
        <Route exact path='/admin/dashboard' element={<Dashboard />} /> 
         <Route exact path='/admin/dashboard/orderdetails' element={<OrderDetails />} /> 
        <Route exact path='/admin/dashboard/uploadproduct' element={<ProductUpload />} /> 
        <Route exact path='/cart' element={< Cart />} /> 
         <Route exact path='/admin/forgetpassword' element={<ResetAdminPass/>} /> 
        <Route exact path='/admin/dashboard/editproductdetails' element={<EditProducts />} /> 
        <Route exact path='/checkout' element={<CheckOutPage />} />
        <Route exact path='/payment' element={<StripeContainer/>}/>
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>   
      
      {/* <div className='footer'>
        <Footer />
        </div> */}
    </>
  );
}

export default App;
