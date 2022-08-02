import React from 'react'
import './navBar.css'

const Navbar = () => {

window.addEventListener('scroll', function(){
  var menu = document.querySelector('.nav');
  menu.classList.toggle('sticky', window.scrollY > 0);
})
  
  return (
   
      <nav class="nav" id='myNav'>
       <h2>LOGO</h2>
  <ul class="menu-ul">
    <li className='menu-l1'>Home</li>
    <li>About</li>
    <li>Contact Us</li>
  </ul>
</nav>
     
    
  )
}

export default Navbar 