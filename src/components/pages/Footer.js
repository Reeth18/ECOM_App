import React from 'react'

export default function Footer() {

    return (
    <>
            {/* <!-- Footer Section --> */}
            <footer class="footer navbar-fixed-bottom">
                <div class="container-fluid text-center ">
                    <div class="row">
                        <div class="col-12 " id="backToTop">
                            {/* <!-- Add any additional footer content or links here --> */}
                            <a href="#top">Back to Top</a>
                        </div>
                    </div>
                    <div class="row  ">


                        {/* <!-- --------------UTKARSH CODE--------------------- --> */}
                        <div class="col-6 my-5">
                            <div class="col-6 text-white">
                                <ul class="list-unstyled">
                                    <li><a href="" >Products</a></li>
                                    <li><a href="" >Benefits</a></li>
                                    <li><a href="" >Partners</a></li>
                                    <li><a href="" >Team</a></li>
                                </ul>
                            </div>
                            <div class="col-6 text-white ">
                                <ul class="list-unstyled ">
                                    <li><a href="" >Documentation</a></li>
                                    <li><a href="" >Support</a></li>
                                    <li><a href="" >Legal Terms</a></li>
                                    <li><a href="" >About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md my-5">
                            <div >
                                <ul class="nav" >
                                    <li class="nav-item "><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg text-white"></i></a>
                                    </li>
                                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg text-white"></i></a></li>
                                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg text-white"></i></a></li>
                                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg text-white"></i></a></li>
                                </ul>
                            </div>
                            <br></br>
                            <div class="col-md text-white" style={{marginLeft: '30%'}}>
                                <h5 >Need Help?</h5>
                                <hr></hr>
                            </div>
          <div class="col-md-5 text-white " style={{marginLeft: '20%'}}>
                                <form>
                                    <fieldset class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </fieldset ><br></br>
                                    <fieldset class="form-group">
                                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                                    </fieldset>
                                    <fieldset class="form-group text-xs-right" style={{marginLeft: '10%'}}>
                                        <button type="button" class="btn btn-light btn-lg">Send</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


                {/* <!-- ----------------------------------------------- --> */}


                {/* </div> */}

                <div class="row">
                    <div class="col-md-12 text-white text-center my-3">
                        <p>&copy; 2023 Your Website. All rights reserved.</p>
                    </div>
                </div>
                {/* </div> */}
                </footer>
            </>
            )
}
