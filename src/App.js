
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import AdminLogin from './pages/adminLogin';
import NavBar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import UserLogin from './pages/userLogin'
import Dashboard from './components/dashboard'
import ProductUpload from './pages/productUpload'
import ResetAdminPass from './pages/forgotAdminPass'
import Reset from './pages/forgotPass';
import EditProducts from './pages/editProducts';
// import SignUp from './Pages/signUp';
import ErrorPage from './pages/error'

function App() {
  return (
    <div className="App">
    <NavBar/>
   <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/home" element={<Home/>}/> */}
        <Route exact path='/' element={<AdminLogin />} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route exact path='/login' element={<UserLogin />} /> 
         <Route exact path='/forgetpassword' element={<Reset />} /> 
        <Route exact path='/admin/dashboard' element={< Dashboard />} /> 
        <Route exact path='/admin/dashboard/uploadproduct' element={< ProductUpload />} /> 
         <Route exact path='/admin/forgetpassword' element={<ResetAdminPass/>} /> 
        <Route exact path='/admin/dashboard/editproductdetails' element={<EditProducts />} /> 
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>   
      <div className='footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
