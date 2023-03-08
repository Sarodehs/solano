import React from 'react'
import { NavLink } from 'react-router-dom'
const Plansummary = () => {
    return (
        <div>
            <div>
            <div className='text-center p-3'>

                <img src="/assets/images/logo.png" className="img-fluid "height={150} width={150} alt="logo" />
               
            </div>
                <div className="justify-content-center align-items-center d-flex row text-dark">
                    <div className='col-xl-8 col-md-8 col-sm-12 card m-5 p-5 '>
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-6 pe-5">
                                <h3 >Order Summary</h3>
                                <div className=' border-bottom border-2 p-2 row'>
                                    <div className="col-xl-2 col-md-2 col-sm-2">
                                        <img src="/assets/images/login-user-icon.png" alt="img" className='' />
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-sm-6 m-2">
                                        <p >Mark Wox</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-xl-5 col-md-5 col-sm-5 bg-light border border-primary rounded text-center m-3 ">
                                        <h6><span className='textcolourblue fs-3'>$4/</span>month</h6>
                                        <p>Per user</p>
                                        <h5>Yearly Plan</h5>
                                    </div>
                                    <div className="col-xl-5 col-md-5 col-sm-5 border border-primary rounded text-center m-3">
                                        <h6><span className='textcolourblue fs-3'>$6/</span>month</h6>
                                        <p>Per user</p>
                                        <h5>Monthly Plan</h5>
                                    </div>
                                    <div>
                                        <div className='border-bottom border-2 row p-1'>
                                            <h5 className=' p-2'>Yearly Plan</h5>
                                        </div>

                                        <div className='border-bottom border-2 row p-2' >
                                            <div className="col-xl-9 col-md-9 col-sm-9">1 User</div>
                                            <div className="col-xl-3 col-md-3 col-sm-3">$48/Year</div>
                                        </div>
                                        <div className=' row border-bottom border-2 p-2'>
                                            <div className="col-xl-9 col-md-9 col-sm-9">
                                                <h6>Final Amount </h6>
                                                <p >Including all tax.</p>
                                            </div>
                                            <div className="col-xl-3 col-md-3 col-sm-3">
                                                <h6>$48</h6>
                                            </div>
                                        </div>

                                    </div>
                                    <NavLink to="/payment/" className="text-decoration-none">
                                        <div className="d-grid gap-2 col-12 pt-4 mx-auto ">
                                            <button className="btn btn-primary buttonfocuscolor" type="button">BUY NOW</button>
                                        </div></NavLink>
                                </div>

                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 border-start border-2 ps-5">
                                <h4 className='textcolourblue'>Professional</h4>
                                <div className="text-dark">
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i> Kanban Boards</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Real-Time Chat</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Mobile app</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Statistics</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Unlimited Tasks/Month</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>File attachments up to 50 MB per file</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Decisions</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Groups</p>
                                    <p><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Strategic Goals</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plansummary