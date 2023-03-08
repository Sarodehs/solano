import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div >
                    {/* <!--top nav start --> */}
                    <nav className="navbar navbar-expand-md navbar-light w-100 fs-5 topnav">
                        <div className="navbar-nav  d-flex justify-content-center px-4">
                            <a className="navbar-brand" href="/#"> <img src="/assets/images/logo.png" className="img-fluid w-75" alt="logo" /></a>
                        </div>
                        <div className="text-end px-4" >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">

                            <ul className="navbar-nav w-100 justify-content-center align-items-center">

                                <li className="nav-item pe-5">
                                    <NavLink to="/" className="text-decoration-none">
                                        <a className="nav-link " href="/#">Features</a></NavLink>
                                </li>
                                <li className="nav-item pe-5 ps-5">
                                    <NavLink to="/pricing/" className="text-decoration-none">
                                        <a className="nav-link" href="/#">Pricing</a></NavLink>
                                </li>
                                {/* <li className="nav-item pe-5 ps-5">
                                    <NavLink to="/" className="text-decoration-none">
                                        <a className="nav-link" href="/#">Blogs</a></NavLink>
                                </li> */}
                                <li className="nav-item ps-5">
                                    <NavLink to="/contactus/" className="text-decoration-none">
                                        <a className="nav-link" href="/#">Contact Us</a>  </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav  justify-content-around align-items-end ">
                                <li className="nav-item pe-5">
                                    <NavLink to="/login/" className="text-decoration-none">
                                        <button className="btn btn-outline-primary buttonfocuscolor1" type="submit">LOGIN</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary buttonfocuscolor" type="submit">SIGNUP</button>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    {/* <!--top nav end --> */}
                </div>
            </div>
        </>
    )
}

export default Navbar