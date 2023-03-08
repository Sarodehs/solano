import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div> <div className=" ">
    <div className=" row bg-light">
        {/* <!-- side nav start --> */}
        <div className=" col-md-12 col-xl-12 col-sm-12 pe-0" >
            <div className="d-flex flex-column vh-100 w-100 ">
            <div className="navbar-nav  d-flex justify-content-center p-3 ">
                            <img src="/assets/images/logo.png" className="img-fluid w-75" alt="logo" />
                        </div>
                <ul className="nav  flex-column mb-sm-auto mb-0 sidebar align-items-center align-items-sm-start " id="menu">
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/dashboard/" className="text-decoration-none " > <a href="/#" className="nav-link align-middle  d-flex ">
                        <span className="material-icons">space_dashboard</span><span className="ms-3 d-none d-md-inline "> Dashboard </span>
                        </a></NavLink>
                    </li>
                   
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/user/" className="text-decoration-none "> <a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">people_alt</span> <span className="ms-3 d-none d-md-inline"> Users</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/ticket/" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">confirmation_number</span> <span className="ms-3 d-none d-md-inline"> Tickets</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/enterprise/" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">business</span> <span className="ms-3 d-none d-md-inline"> Enterprise</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/transaction/" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">paid</span><span className="ms-3 d-none d-md-inline"> Transaction</span>
                        </a></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- side nav end --> */}
    </div>
   
</div>
</div>
  )
}

export default Sidenav