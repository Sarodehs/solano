import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <div className="container-fluid  ">
        <div className=' row p-3'>
          <div className="col-xl-9 col-md-9 col-sm-9">
            <img src="/assets/images/logo.png" className="img-fluid " height={150} width={150} alt="logo" />
          </div>
          <div className="col-xl-3 col-md-3 col-sm-3 d-flex">
            <h6 >Already have an account?</h6>
            <NavLink to="/login/" className="text-decoration-none">
              <button className="btn btn-primary buttonfocuscolor ms-4" type="button">LOGIN</button>
            </NavLink>
          </div>

        </div>
        {/* <!-- Content area start --> */}
        <div className="row  ">
          <div className="justify-content-center align-items-center d-flex">
            <div className='col-xl-4 col-md-8 col-sm-12 card m-5 p-5'>
              <h3 className=" text-center ">Create Account</h3>
              <div className='p-4 '>
                <div className="input-group mb-4 ">
                  <i className="fa-regular fa-user  input-group-text"></i>
                  <input type="text" className="form-control inputfocus border-start-0" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-4">
                  <i className="fa-regular fa-envelope  input-group-text"></i>
                  <input type="text" className="form-control inputfocus border-start-0" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
               
                <div className="input-group ">
                  <i className="fa fa-lock  input-group-text"></i>
                  
                  <input type="text" className="form-control inputfocus border-start-0 border-end-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                  <i className="fa-regular  fa-eye-slash input-group-text"></i>
                </div>
                <p className='text-dark '>Use minimum 8 characters</p>
                <NavLink to="/plansummary/" className="text-decoration-none">
                  <div className="d-grid gap-2 col-12 pt-4 mx-auto">
                    <button className="btn btn-primary buttonfocuscolor" type="button">GET STARTED WITH SOLANO</button>
                  </div></NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content area start --> */}
      </div>



    </>
  )
}

export default Login