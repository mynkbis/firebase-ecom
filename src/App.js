
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import AdminLogin from './pages/adminLogin';
import NavBar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import UserLogin from './pages/userLogin'
import Dashboard from './components/dashboard'
// import SignUp from './Pages/signUp';

function App() {
  return (
    <div className="App">
    <NavBar/>
   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path='/admin/login' element={<AdminLogin />} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route exact path='/login' element={<UserLogin />} /> 
         <Route exact path='home/admin/dashboard' element={< Dashboard />} /> 
      
            
      </Routes>   
      <div className='footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
