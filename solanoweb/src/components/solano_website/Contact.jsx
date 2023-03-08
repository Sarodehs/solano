

import { useState } from 'react'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

  const [msg, setMsg] = useState('');
  const [Home, setHome] = useState({});
  const {
     name , 
     message 
    } = Home;
  const onInputChange = e => {
    setHome({ ...Home, [e.target.name]: e.target.value });

  };

  const onSubmit = async (e) => {

    document.getElementById("demo-form").submit();
  
    await axios.post("http://localhost:8000/contact")
      .then(response => setMsg(response.data.respMesg)); 
  };
 

  return (
    <div>
      {/* <!-- contact area start --> */}
      <div className="row  bgdotcard borderredii">
        <div className="justify-content-center align-items-center d-flex">
          <div className='col-xl-4 col-md-8 col-sm-12 card m-5 p-5'>
            <h3 className="  bordercolor mx-auto ">Contact Us</h3>
            <form className="row" id='demo-form'  
            // onSubmit={onSubmit} 
            > 
       
              <p className="mb-3 mt-2" ><b>{msg}</b></p>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg inputfocus"
                  placeholder="Name"
                  required
                  onChange={onInputChange}
                  value={name}
                />
              </div>
              <div className="form-group mb-4 ">
                <input
                  type="email"
                  className="form-control form-control-lg inputfocus"
                  placeholder="Email"
                 required
                  onChange={onInputChange}
                  value={Home.email}
                
                />
              </div>
              <div className="form-group  mb-4">
                <textarea
                  type="email"
                  className="form-control form-control-lg inputfocus"
                  placeholder="Message"
                  required
                  onChange={onInputChange}
                  value={message}
                 
                />
              </div>
              <div id='recapcha'>
              <ReCAPTCHA  sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1"/>
                </div>
              <button 
              onClick={onSubmit} 
              className="btn btn-primary buttonfocuscolor rounded-pill col-4 m-4" >SEND</button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- contact area start --> */}
    </div>
  )
}

export default Contact

