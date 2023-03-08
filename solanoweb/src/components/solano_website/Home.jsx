import React from 'react'
import Navbar from "./Navbar";

import Footer from './Footer';
import { InlineWidget } from "react-calendly";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* banner start */}
      <div className="text-center pt-5 fs-4">
        <h1 className='fw-bolder p-2'>Organize it all with Solano</h1>
        <p>From the small stuff to the big picture, Solano organizes work so teams <br />know what to do, why it matters, and how to get it done</p><br />
        <div className="d-grid gap-2 col-1  mx-auto">
          <button className="btn btn-primary buttonfocuscolor rounded-pill " type="button">GET STARTED</button>
        </div>
        <div className="row  justify-content-center d-flex mt-5">
          <div className="col-xl-2 col-md-2 col-sm-2 justify-content-center align-items-center d-flex">
            <img src="/assets/images/organize1.png" alt="img" className='w-75 img-fluid' />
          </div>
          <div className="col-xl-1 col-md-2 col-sm-2 justify-content-center align-items-center d-flex">
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_xodvzdyn.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className="col-xl-2 col-md-2 col-sm-2 justify-content-center align-items-center d-flex">
            <img src="/assets/images/organize2.png" alt="img" className='w-100 img-fluid' />
          </div>
          <div className="col-xl-1 col-md-2 col-sm-2 justify-content-center align-items-center d-flex">
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_xodvzdyn.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className="col-xl-2 col-md-2 col-sm-2 justify-content-center align-items-center d-flex">
            <img src="/assets/images/organize3.png" alt="img" className='w-100 img-fluid' />
          </div>
          <div className="col-xl-1 col-md-1 col-sm-1 justify-content-center align-items-center d-flex">
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_xodvzdyn.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className="col-xl-2 col-md-2 col-sm-2 me-5  justify-content-center align-items-center d-flex">
            <img src="/assets/images/organize4.png" alt="img" className='w-100 img-fluid' />
          </div>
        </div>
      </div><br />
      {/* banner end */}
      <div className='arrowanimasion mx-auto m-5 '>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_2z4qmxlj.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div><br />
      {/* Why Solano start */}
      <div className="row justify-content-center align-items-center d-flex fs-5 ">
        <div className="col-xl-9 col-md-9 col-sm-9 ">
          <div className="card " >
            <div className="card-body p-5">
              <h2 className="card-title bordercolor mx-auto">Why Solano</h2>
              <div className="row p-3">
                <div className="col-xl-2 col-md-2 col-sm-2 text-center">
                  <img src="/assets/images/to-do-list.png" alt="img" className='img-fluid w-75' />
                </div>
                <div className="col-xl-10 col-md-10 col-sm-10">
                  <h4>Keep task in one place</h4>
                  <p>Save time ,avoid losing
                    work and information and track task to stay on schedule. Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
                </div>
              </div>
              <div className='arrowrouned1 offset-9'>

                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_xobjz23a.json" background="transparent" speed="1" loop autoplay></lottie-player>
              </div>
              <div className="row p-3">

                <div className="col-xl-10 col-md-10 col-sm-10">
                  <h4>Blocker tracking</h4>
                  <p>Save time ,avoid losing
                    work and information and track task to stay on schedule. Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
                </div>
                <div className="col-xl-2 col-md-2 col-sm-2 text-center">
                  <img src="/assets/images/Bug.png" alt="img" className=' w-75 img-fluid' />
                </div>
              </div>
              <div className='arrowrouned2 '>
                <div className='arrowrouned3 offset-9'>
                  <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_xobjz23a.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-xl-2 col-md-2 col-sm-2 text-center">
                  <img src="/assets/images/to-do-list.png" alt="img" className='img-fluid w-75' />
                </div>
                <div className="col-xl-10 col-md-10 col-sm-10">
                  <h4>you can make a Strategicgoal</h4>
                  <p>Save time ,avoid losing
                    work and information and track task to stay on schedule. Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Solano end */}
      {/* Features start */}
      <div className=''>
        <div className="text-center  p-5 fs-5">
          <h2 className='pt-5 bordercolor mx-auto'>Features</h2>
          <blockquote>Solano combines messaging, video/audio calls, tasks, notes and files.<br />
            Organize, discuss and get things done together.</blockquote>
        </div>
        <div className="row justify-content-center align-items-center d-flex m-5">
          <div className="col-xl-8 col-md-8 col-sm-8 justify-content-center align-items-center d-flex">
            <img src="/assets/images/Features1.png" alt="img" className='img-fluid' />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <div>
              <img src="/assets/images/Manage.png" alt="img" className='img-fluid' />
              <h4>Manage everything in one workspace</h4>
              <p>Planning, tracking and delivering your teams best work has never been easier</p>
              <h6>Learn More <i className="fa-solid fa-arrow-right-long"></i></h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex m-5">
          <div className="col-xl-4 col-md-4 col-sm-4 justify-content-center align-items-center d-flex">
            <div className='offset-2'>
              <img src="/assets/images/Progress.png" alt="img" className='img-fluid' />
              <h4>Track progress</h4>
              <p>Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
              <h6>Learn More <i className="fa-solid fa-arrow-right-long"></i></h6>
            </div>
          </div>
          <div className="col-xl-8  col-md-8 col-sm-8 justify-content-center align-items-center d-flex">
            <img src="/assets/images/Features2.png" alt="img" className='img-fluid' />
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex m-5">
          <div className="col-xl-8 col-md-8 col-sm-8 justify-content-center align-items-center d-flex">
            <img src="/assets/images/Features3.png" alt="img" className='img-fluid' />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <div>
              <img src="/assets/images/Decision.png" alt="img" className='img-fluid' />
              <h4>Take decisions any where any time</h4>
              <p>whereby the Task leader and Higher authorities decide upon Task strategy, tactics, and acceptable actions.</p>
              <h6>Learn More <i className="fa-solid fa-arrow-right-long"></i></h6>
            </div>
          </div>
        </div>
      </div>
      {/* Features end */}
      {/* clients think start */}
      <div className='bg-light p-5 '>
        <h3 className=' bordercolor mx-auto pt-5 mt-5 w-50'>What our clients think about Solano?</h3>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide text-dark fs-5 rounded" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner p-5 ">
            <div className="carousel-item active">
              <div className='row' >
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4  p-4">
                  <div className="card" >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className='row'>
                <div className="col-xl-4  p-4">
                  <div className="card" >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 p-4">
                  <div className="card " >
                    <div className="card-body">
                      <p className="card-text">Solano team has all desired knowledge, experience an team to collaborate and inculcate Design Thinking and user
                        Experience mindset with you and your teams for your success</p>
                      <div className="row m-4">

                        <div className='col-xl-3 offset-2'>
                          <img src="/assets/images/istockphoto1.png" className="img-fluid rounded-pill" alt="logo" />
                        </div>
                        <div className='col-xl-5'>
                          <h5>Palak Desai</h5>
                          <p>IBM, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* clients think end */}
      {/* Mobile Apps start */}
      <div className="row justify-content-center align-items-center d-flex">
        <div className="col-xl-5 col-md-5 col-sm-5 p-5">
          <img src="/assets/images/Mobile.png" alt="img" className=' p-5 m-5 w-75 img-fluid' />
        </div>
        <div className="col-xl-7 col-md-7 col-sm-7">
          <div className='p-5'>
            <h4>Our Mobile Apps</h4>
            <h2>Whenever. Wherever.</h2>
            <p>Download our native apps to manage projects and tasks wherever
              you are. Solano on mobile supports real-time collaboration, offline functionality and more.</p>
            <p>Available On</p>
            <img src="/assets/images/google-play-img.png" className="img-fluid w-25 m-3" alt="logo" />
            <img src="/assets/images/App_Store_Badge .png" className="img-fluid w-25 " alt="logo" /><br />
          </div>

        </div>
      </div>
      {/* Mobile Apps end */}
      {/* Get Productive start */}
      <div className="text-center bg-light p-5 bgcolour fs-1">
        <h4>Get Productive. Get Solano.</h4>
        <h1>Try Solano for your team</h1>
        <h5 className='p-3'>14-day free trial | No credit card needed.</h5>
        <div className="d-grid gap-2 col-1  mx-auto">
          <button className="btn btn-primary buttonfocuscolor rounded-pill " type="button">GET STARTED</button>
        </div>
      </div>
      {/* Get Productive end */}
      {/* calender start */}

      <div className='row '>
        <div className='col-xl-12 col-md-12 col-sm-12 '>
          <InlineWidget className=" " 
          styles={{ height: "900px" }}
          url="https://calendly.com/solanohome/30min"/>
        </div>
      </div>

      {/* calender end */}
      <div className='row '>

        <Footer />
      </div>
    </div>
  )
}

export default Home