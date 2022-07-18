
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import AdminLogin from './pages/AdminLogin';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import UserLogin from './pages/UserLogin'

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
      
            
      </Routes>   
      <div className='footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
