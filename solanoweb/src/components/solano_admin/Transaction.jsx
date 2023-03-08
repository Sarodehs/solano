import React
  // { useState }
  from 'react';

// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { addDays } from 'date-fns';

// import { DateRangePicker } from 'rsuite';


import Sidenav from './Sidenav'
import Topnav from './Topnav'


const Transaction = () => {

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection'
  //   }
  // ]);
  return (
    <div>   <div className="">
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
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card ">

                <form className="d-flex row m-3">
                  <div className="col-xl-2"> <h4>Transactions</h4></div>
                  <div className="col-xl-3">  <input className="form-control" type="search" placeholder="Search" aria-label="Search" /></div>
                  {/* <DateRangePicker appearance="subtle" placeholder="Subtle" style={{ width: 230 }} />         */}

                  {/* <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  /> */}
                </form>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className='table-primary'>
                      <tr>
                        <th scope="col">Trans. ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Date</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>Ames Jackson</td>
                        <td>Basic</td>
                        <td>amesjackson@gmail.com</td>
                        <td>+19874563210</td>
                        <td>11-Jan-2022</td>
                        <td>Paypal</td>
                        <td>0</td>
                      </tr>
                     
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-end">
                    <li className="page-item  m-2 active">
                        <a className="page-link" href="/#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">1</a></li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">2</a></li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">3</a></li>
                      <li className="page-item  m-2 active">
                        <a className="page-link" href="/#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Content area start --> */}
        </div>
        {/* <Footer /> */}
      </div>

    </div></div>
  )
}

export default Transaction