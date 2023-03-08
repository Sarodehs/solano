import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'

const UsersView = () => {
    return (
        <div>
            <div className="">
                {/* <Topnav/> */}
                <div className="row">
                    {/* <!-- side nav start --> */}
                    <div className="col-md-2 col-xl-2 col-sm-2" >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}

                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0" >
                        {/* Topnav start*/}
                        <Topnav />
                        {/* topnav end*/}

                        <div className="row p-2">


                            <div className="col-xl-6 bg-light">
                                <span className="material-icons-outlined p-2 fs-3">arrow_back</span><br />
                                <div className="row p-4">
                                    <div className="col-xl-3">
                                        <img src="/assets/images/enterview.png" className="img-fluid" alt="logo" />
                                    </div>
                                    <div className="col-xl-6">
                                        <h3 className='p-2'>Ames Jackson</h3>
                                        <h6 className='p-2'>New York, US</h6>
                                    </div>
                                    <div className="col-xl-3 p-3">
                                        <span className="material-icons-outlined">more_horiz</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="m-4">
                                    <h4 className='p-2'>Contact Info</h4>
                                    <p className='d-flex'><span className="material-icons">phone</span>
                                        <p className='ps-4'>+1321456987</p></p>

                                    <p className='d-flex'><p><span className="material-icons">mail</span></p>
                                        <p className='ps-4'>+amesjackson@gmail.com</p></p>
                                </div>
                                <hr />
                                <div className="m-4">
                                    <h4 className='p-2'>Account Info</h4>
                                    <p className='d-flex'><span className="material-icons">today</span>
                                        <p className='ps-4'>Created on: 11-Jan-2022</p></p>

                                    <p className='d-flex'><p><span className="material-icons">person</span></p>
                                        <p className='ps-4'>User ID: 2348948</p></p>

                                    <p className='d-flex'><p><span className="material-icons">work</span></p>
                                        <p className='ps-4'>Company: NA</p></p>

                                    <p className='d-flex'><p><span className="material-icons">control_camera</span></p>
                                        <p className='ps-4'>Plan: Enterprise</p></p>

                                    <p className='d-flex'><p><span className="material-icons-outlined">payments</span></p>
                                        <p className='ps-4'>Subscription: Free</p></p>

                                    <p className='d-flex'><p><span className="material-icons">event</span></p>
                                        <p className='ps-4'>Expire on: 10-Jan-2023</p></p>

                                </div>

                            </div>


                            <div className="col-xl-5 m-5">
                                <h3>Activities</h3>
                                <div className="container">
                                    <div className="step ">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="content">
                                            <p>Enquiry For Basic Plan</p>
                                            <span>10:30Jan</span>
                                        </div>
                                    </div>
                                    <div className="step ">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="content">
                                            <p>Issue in Updating Order</p>
                                            <span>10:30Jan</span>
                                        </div>
                                    </div>
                                    <div className="step ">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="content">
                                            <p>Amanda and team update menu</p>
                                            <span>10:30Jan</span>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="content">
                                            <p>Anand's ticket is resolved</p>
                                            <span>10:30Jan</span>
                                        </div>
                                    </div>



                                </div>


                            </div>

                        </div>

                        {/* <!-- Content area start --> */}
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </div>
    )
}

export default UsersView