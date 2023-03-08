import React from 'react'


const Payment = () => {
    return (
        <div className='p-5'>
            <div className='text-center m-3'>
                <img src="/assets/images/logo.png" className="img-fluid " height={150} width={150}alt="logo" />
                <h6 className='text-dark p-2'>Payable Amount : $48</h6>
            </div>
            <div className='row justify-content-center  d-flex '>
               
                <div className="col-xl-2 col-md-2 col-sm-4 mx-3  paymentbuttons">
                     <div className=" btn-group-vertical  bg-white  w-100 h-50" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                        <label className="btn btn-outline-primary " htmlFor="btnradio1">Credit/Debit Card</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Net Banking</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-primary " htmlFor="btnradio3">G-Pay</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio4">Apple-Pay</label>
                    </div> 
                
                </div>
                <div className='col-xl-4 col-md-8 col-sm-12 card'>

                    <div className='p-3 m-4'>
                        <div className="mb-2 ">
                            <label for="exampleFormControlInput1" className="form-label">Enter Card Number</label>
                            <input type="number" className="form-control inputfocus " placeholder="xxxx xxxx xxxx" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="  mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">Expiry Date</label>
                                    <select className="form-select inputfocus" aria-label="Default select example">
                                        <option value="Month" selected>Month</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className=" mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">.</label>
                                    <select className="form-select inputfocus" aria-label="Default select example">
                                        <option value="year" selected>Year</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className=" ">
                                    <label for="exampleFormControlInput1" className="form-label">CVV</label>
                                    <input type="password" className="form-control inputfocus" placeholder="xxx" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <label for="exampleFormControlInput1" className="form-label"></label>
                                <p>Usually found on the back of
                                    your card</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-12 pt-4 mx-auto">

                            <button className="btn btn-primary buttonfocuscolor " type="button">PAY SECURELY</button>

                        </div>
                    </div>

                </div>
                
            </div>



        </div>

    )
}

export default Payment
