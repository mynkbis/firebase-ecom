import React from 'react'
import './home.css'
import bannerImage from '../../assets/images/Mockup.png'
import bannerImage2 from '../../assets/images/Group 12.png'
import bannerImage3 from '../../assets/images/1.png'
import bannerImage4 from '../../assets/images/3.png'
import bannerImage5 from '../../assets/images/ic_arrow_forward_24px.png'
import bannerImage6 from '../../assets/images/2 20.png'
import bannerImage7 from '../../assets/images/s1.png'
import bannerImage8 from '../../assets/images/s2.png'
import bannerImage9 from '../../assets/images/Group 74.png'
import bannerImage10 from '../../assets/images/heroicons-outline_emoji-happy.png'
import bannerImage11 from '../../assets/images/carbon_security.png'
import bannerImage12 from '../../assets/images/Group.png'
import bannerImage13 from '../../assets/images/image222.png'
import bannerImage14 from '../../assets/images/fa-solid_quote-left.png'
import bannerImage15 from '../../assets/images/Groupnav.png'
import bannerImage16 from '../../assets/images/Mockup2.png'
import bannerImage17 from '../../assets/images/store1.png'
import  Facebook from "../../assets/images/Facebook.png"
import Youtube from "../../assets/images/Youtube.png"
import Twitter from "../../assets/images/Twitter.png"
import Instagram from "../../assets/images/Instagram.png"

const Home = () => {
  return (
    <div className='parentBox'>
      <div className='childBox1'>
        
        {/* below navbar div */}
        <section className='section1'>
          <div className='container1'>
            <h2>New E-commerce App best for You</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet.</p>
            <div className='store'>
              <img style={{ width: "19.5rem", height: "3rem" }} src={bannerImage2} alt="playstores" />
            </div>
          </div>
          <img className='mobilePic' style={{ width: "38rem", height: "48rem" }}
            src={bannerImage} alt='mock1' />
        </section>
      </div>

  {/* section one start from here
         */}

      <div className='bannerImage7'>
        <img src={bannerImage7} alt="" />
      </div>
      <div className='bannerImage9'>
        <img src={bannerImage9} alt="bannerImage9" />
      </div>
      <div className='childBox2'>
        <section className='section2'>
          <div className='section2_text'>
            <h2>What we do to help our customers in digital era.</h2>
          </div>
          
          {/* first image div */}

          <div className='sectionFirst' >
            <img src={bannerImage4} alt={bannerImage4} />
            <h2>Send</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
            <h6 className='learnMore'>Learn more 
            <img src={bannerImage5} alt="bannerImage5" /></h6>
          </div>  

          {/*second image div */}

            <div className='bannerImage3'>
            <img className='bannerImage31' src={bannerImage3} alt={bannerImage3} />
           
            <h2>Receive</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
            <h6 className='learnMore1'> Learn more
              <img src={bannerImage5} alt="bannerImage5" /></h6>
          </div>
           <div className='imagebanner91'>
              <img 
                src={bannerImage9} alt="bannerImage9" />
            </div>
          
          {/* third image div */}

           <div className='bannerImage61'>
            <img className='bannerImage611'
              src={bannerImage6} alt={bannerImage6} />          
            <h2>Buy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>          
            <h6 className='learnMore2'>Learn more</h6>
              <img className='bannerImage612' src={bannerImage5} alt="bannerImage5" />
          </div>
        </section>
        {/* section first closed */}
      </div>
      <div className='bannerImage91'>
        <img src={bannerImage9} alt="bannerImage9" />
      </div>
      <div className='bannerImage8'>
        <img src={bannerImage8} alt="bannerImage8" />
      </div>

      
      {/* section Second start from here */}

      
        <section className='section3'>
          <div className='section31'>
            <h2>How it Works</h2>
          </div>
            <div className='section3_Box'>
            <div>
              <div className='section3_Box1'>
                <img src={bannerImage12} alt="bannerImage12" />
              </div>
              <h6>Create an account</h6>
              <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
            <div>
              <div className='section3_Box1'>
                <img src={bannerImage11} alt="bannerImage11" />
              </div>
              <h6>Get authorization</h6>
              <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
            <div className='section3_Box1'>
              <div>
                <img src={bannerImage10} alt="bannerImage10" />
              </div>
              <h6>Enjoy the app</h6>
              <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
          </div>
        </section>

        
          {/*  forth section 4 */}


        <section className='section4'>
          <div className='bannerImage95'>
            <img src={bannerImage9} alt="bannerImage9" />
          </div>
          <div >
            <h1>What our Client say</h1>
          </div>
        <div className='bannerImage131'>
          <div className='colorDiv'></div>
            <div className='bannerImage130'>
              <img src={bannerImage13} alt="bannerImage13" />
            </div>
            <div className='bannerImage14'>
              <img src={bannerImage14} alt="bannerImage14" />
            </div>
            <p>Amet in elementum nulla scelerisque dui, egestas at.
              Elit consectetur turpis
              elementum amet vitae et etiam nec.
              Varius volutpat hac adipiscing tincidunt pretium.</p>
            <h4>Angel Paulina</h4>
            <div>
              <img src={bannerImage15} alt="bannerImage15" />
            </div>
          </div>
          <div className='bannerImage13'>
            <div className='pagination'>
              <img src={bannerImage16} alt="bannerImage16" />
            </div>
            <div>
              <h2>
                Download app to enjoy more!
              </h2>
              <p>
                Amet in elementum nulla scelerisque dui, egestas at.
                Elit consectetur turpis
                elementum amet vitae et etiam nec.
                Varius volutpat hac adipiscing tincidunt pretium.
              </p>
              <div className='bannerImage17'>
                <img src={bannerImage17} alt="bannerImage17" />
              </div>
            </div>
          </div>
        </section>

        {/*section closed */ }
    
     
      
      {/*footer MAIN started */}
      
      <div className='footerSecond1'>
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
       </div>
  )
}


export default Home