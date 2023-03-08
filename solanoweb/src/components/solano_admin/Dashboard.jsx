import React from 'react'
import BarChart from './BarChart';


import Sidenav from './Sidenav'
import Topnav from './Topnav'
// import { NavLink } from 'react-router-dom'



const Dashboard = () => {
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

                        <div className="row p-3">
                            <div className="col-xl-9">
                                {/* <!-- dashboard card one start --> */}
                                <div className="row text-center pe-3">

                                    <div className="col-xl-4 pe-3">
                                        <div className="card p-3">
                                            <span className="material-icons fs-1 text-success">business_center</span>
                                            <div >
                                                <h6>Enterprise</h6>
                                                <h3>5</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 pe-3">
                                        <div className="card p-3">
                                            <span className="material-icons fs-1 text-warning">stars</span>
                                            <div >
                                                <h6>Professional</h6>
                                                <h3>1000</h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xl-4 pe-3">
                                        <div className="card p-3">
                                            <span className="material-icons fs-1 text-danger">person</span>
                                            <div >
                                                <h6>Basic</h6>
                                                <h3>500</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center pe-3 pt-4">
                                    <div className="col-xl-12 ">
                                        <div className="card p-3">
                                            <BarChart/> 
                                        </div>

                                    </div>

                                    {/* Request for service start */}
                                    <div className="row  pt-4">
                                        <div className="col-xl-12">
                                            <div className="card p-3">
                                                <h4>Request for service (20)</h4>
                                                <div className="card-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">First</th>
                                                                <th scope="col">Last</th>
                                                                <th scope="col">Handle</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td colspan="2">Larry the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Request for service end */}

                                    {/* <!-- dashboard card one end --> */}
                                </div>

                            </div>
                            {/* Activities start */}
                            <div className="col-xl-3 ">
                                <div className="card p-3">
                                    <h4>Activities</h4>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Activities end */}






                            <div className="row ">

                                {/* Recent Orders start */}
                                <div className="col-xl-9 p-3">
                                    <div className="card p-3">
                                        <h4>Recent Orders</h4>
                                        <div className="card-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td colspan="2">Larry the Bird</td>
                                                        <td>@twitter</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* Recent Orders end */}


                                {/* Acquire Cities start */}
                                <div className="col-xl-3 p-3">
                                    <div className="card p-3">
                                        <h4>Acquire Cities</h4>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <p>df</p>
                                                    <p>df</p>
                                                    <p>df</p>
                                                    <p>df</p>
                                                    <p>df</p>
                                                    <p>df</p>

                                                </div>
                                                <div className="col-xl-6">
                                                    <p>12</p>
                                                    <p>12</p>
                                                    <p>12</p>
                                                    <p>12</p>
                                                    <p>12</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Acquire Cities end */}


                            </div>


                        </div>
                        {/* <!-- Content area start --> */}
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </div>
    );
}

export default Dashboard