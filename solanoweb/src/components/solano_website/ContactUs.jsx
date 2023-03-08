import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';
import Contact from './Contact';
const ContactUs = () => {
  return (


    <div className="">
      <Navbar />
      <h1 className='text-center'>Contact Us</h1>
      {/* <!-- contactus area start --> */}
      <div className="row justify-content-center align-items-center d-flex">
        <div className="col-xl-6 col-md-6 col-sm-6">
          <img src="/assets/images/contactus.png" alt="img" className='contactusimg img-fluid' />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-6 fs-5 ">
          <div>
            <h3>General</h3>
            <p className='text-dark'>For any general questions, send us an email at<br />
              <span className='text-primary'>general@solano.com</span></p>
          </div><br/>
          <div>
            <h3>Sales</h3>
            <p className='text-dark'>For sales inquiries, reach out to us at<br />
              <span className='text-primary'> sales@solano.com</span></p>
          </div><br/>
          <div>
            <h3>Support</h3>
            <p className='text-dark'>For anything support, contact us at <br />
              <span className='text-primary'>support@solano.com</span></p>
          </div> 
        </div>
      </div>
      {/* <!-- contactus area start --> */}
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default ContactUs