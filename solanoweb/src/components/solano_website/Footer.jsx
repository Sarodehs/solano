import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className="row footer p-5">
        <div className="col-xl-4 col-md-4 col-sm-4">
          <img src="/assets/images/logo_footer.png" className="img-fluid w-25" alt="logo" /><br />
          <img src="/assets/images/google-play-img.png" className="img-fluid w-25 m-3" alt="logo" />
          <img src="/assets/images/App_Store_Badge .png" className="img-fluid w-25" alt="logo" /><br />
          <i className="fa-brands fa-facebook-square fs-3 p-2"></i>
          <i className="fa-brands fa-linkedin  fs-3 p-2"></i>
          <i className="fa-brands fa-twitter-square  fs-3 p-2"></i>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4">
          <h3>Quick Links</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Blogs</p>
          <p>Contact us</p>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4">
          <h3>Subscribe to Newsletter</h3>
          <input type="text" className="form-control inputfocus bg-light " placeholder="Enter Your Email Address"
           aria-label="Username" aria-describedby="basic-addon1" />
          <div className="d-grid gap-2 col-4 pt-4">
            <button className="btn btn-light buttonfocuscolor2 rounded-pill " type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer1 justify-content-center align-items-center d-flex p-3">
        <p>All Rights Reserved © Solano</p>
      </div>
    </div>
  )
}

export default Footer