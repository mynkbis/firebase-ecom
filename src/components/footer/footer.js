import React from 'react'
import  Facebook from "../../assets/images/Facebook.png"
import Youtube from "../../assets/images/Youtube.png"
import Twitter from "../../assets/images/Twitter.png"
import Instagram from "../../assets/images/Instagram.png"
import '../footer/footer.css'



const Footer = () => {


  return (

      <div className='container'>
        <div className='footerSecond'>
          <h2>LOGO</h2>
          <div>
            <h3>Quick links</h3>
            <h4>SignUp</h4>
            <h4>AboutUs</h4>
          </div>
          <div>
            <h3>Others</h3>
            <h4>User FAQs</h4>
            <h4>Contact Us</h4>
            <h4> Legal</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms and Conditions</h4>
          </div>
          <div>
            <h3>Products</h3>
            <h4>Send</h4>
            <h4>Receive</h4>
            <h4>Buy</h4>
          </div>
          <div>
            <h5>Subscribe to our newsletter and be the first to know about our updates</h5>
            <div>
              <input placeholder='Email Address'></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
          

      {/*footer started */}
           <footer className='footer'>
        <div>
          <h6>Copyright © 2020. All rights reserved.</h6>
        </div>
        <div className='socialMedia'>
          <img src={Youtube} alt="Youtube" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
        </div>
      </footer>
      
    
      </div>
  );
}

export default Footer;

