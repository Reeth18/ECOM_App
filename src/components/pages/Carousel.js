import React from 'react'

export default function Carousel() {
  return (
    <div>

<div class="container-fluid" id="carousel1" style={{padding: '0'}}>
      <div class="row">
        {/* <p>This is First Carousel</p> */}
         {/* <!-- carausel Section --> */}
        <div class="col" style={{paddingLeft: '0'}}>
          <div id="pCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row ">
                  <div class="col">
                    {/* <!-- <div class="card"> --> */}
                    <img src="/images/banner1.jpg" id="bannerImg" alt="Project 1" />

                    <div class="cityshopText">
                      <img src="/images/cityShop.png" style={{width: '200px', height: '160px'}} alt="" />

                      <ul class="social-icons" id="socialaLink">
                        <li> <a class="	fa fa-facebook " style={{fontSize:'24px'}} href=""></a></li>
                        <li> <a class="fa fa-instagram" style={{fontSize:'24px'}} href=""></a></li>
                      </ul>

                    </div>

                    {/* <!-- </div> --> */}
                  </div>

                </div>
              </div>
              <div class="carousel-item">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card">
                      <img src="/images/card1.jpg" class="card-img-top" alt="Project 4" />

                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src="/images/card2.jpg" class="card-img-top" alt="Project 5" />

                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src="/images/card1.jpg" class="card-img-top" alt="Project 6" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#pCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#pCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

    </div>
    </div>
    </div>
  )
}

