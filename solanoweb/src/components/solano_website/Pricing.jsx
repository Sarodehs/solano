import React from 'react'
import Navbar from "./Navbar";
import Contact from './Contact';
import Footer from './Footer';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center p-5">
                <h3 >Solano Pricing</h3>
                <p>Choose the Perfect Plan for Your Team.</p>

                <div className="btn-group paymentbuttons" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check " name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label className="btn btn-outline-primary " htmlFor="btnradio1">YEARLY</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">MONTHLY</label>
                </div>
            </div>
            {/* card start */}
            <div className="row borderred">
                <div className="col-xl-4 col-md-8 col-sm-12">
                    <div className="card border-2 border-dark m-5 " >
                        <div className="card-body p-4">
                            <h3 className="card-title text-center">Basic</h3>
                            <p className='text-center'>task management features for single users</p>
                            <h3 className="card-subtitle mb-2 text-dark text-center">Free Forever</h3>
                            <p className='text-center'></p>
                            <div className="d-grid gap-2 col-9 pt-4 mx-auto">
                                <button className="btn btn-outline-primary buttonfocuscolor1 rounded-pill " type="button">GET STARTED</button>
                            </div>
                            <div className="text-dark">
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>25 Tasks/Month</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Kanban Boards</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Real-Time Chat</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>File attachments up to 20 MB per file</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Mobile app</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Statistics</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-md-8 col-sm-12 ">
                    <div className="card border-2 border-primary m-5" >
                        <div className="card-body  borderblue  p-4">
                            <h3 className="card-title text-center">Professional</h3>
                            <p className='text-center'>Simple, collaborative task management for teams</p>
                            <h6 className="card-subtitle mb-2 text-dark text-center"><span className='textcolourblue fs-3'>$4/</span>month</h6>
                            <p className='text-center'>Per user</p>
                            <div className="d-grid gap-2 col-9  mx-auto">
                                <button className="btn btn-primary buttonfocuscolor rounded-pill " type="button">GET STARTED</button>
                            </div>
                            <div className="text-dark">
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Everything Included in Basic</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Unlimited Tasks/Month</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>File attachments up to 20 MB per file</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Decisions</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Groups</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Strategic Goals</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-8 col-sm-12">
                    <div className="card  border-2 border-warning m-5 " >
                        <div className="card-body borderwarning p-4">
                            <h3 className="card-title text-center">Enterprise</h3>
                            <p className='text-center'>Extended collaboration features for larger teams</p>
                            <h3 className="card-subtitle mb-2 text-dark text-center">Contact Sales</h3>
                            <p className='text-center'></p>
                            <div className="d-grid gap-2 col-9 pt-4 mx-auto">
                                <button className="btn btn-warning rounded-pill " type="button">GET STARTED</button>
                            </div>
                            <div className="text-dark">
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Everything Included in Professional</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>File attachments up to 100 MB per file</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Audit Trails</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Team Management</p>
                                <p className="card-text"><i className="fa-solid fa-check text-warning fs-4 m-2"></i>Discussions With Team</p><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card end */}
            {/* faq start */}
            <div className='p-5 m-5 salano '>
                <h3 ><i className="fa-regular fa-circle-question text-warning fs-2 me-3"></i>Frequently Asked Questions</h3>
            <div className="accordion accordion-flush fs-5 m-5" id="accordionFlushExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        As a PRO user, am I allowed to collaborate with free Basic users?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Where are your servers located?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Do you offer in-house installations?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Do you offer a calendar view?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Are updates included?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Can I purchase and manage multiple licenses with one account?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
              
                <div className="d-grid gap-2 col-3 p-5 mx-auto">
                    <button className="btn btn-primary buttonfocuscolor" type="button">VIEW ALL FAQs</button>
                </div>
            </div>
            
            </div>
            {/* faq end */}
            {/* Get Productive start */}
            <div className="text-center bgcolour p-5">
                <h5>Get Productive. Get Solano.</h5>
                <h2>Try Solano for your team</h2>
                <p>14-day free trial | No credit card needed.</p>
                <div className="d-grid gap-2 col-1  mx-auto">
                  <button className="btn btn-primary buttonfocuscolor rounded-pill " type="button">GET STARTED</button>
                </div>
            </div>
            {/* Get Productive end */}

            <Contact/>
            <Footer/>
        </div>
    )
}

export default Pricing