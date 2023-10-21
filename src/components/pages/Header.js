import React from 'react'
import ChildComp from './ChildComp';

export default function Header(props) {
  // console.log(props, " value of props");
  // console.log(props, " value of props");
  // e-commerce: cart
  // States: are info or data related to components.....(itself info)
  // Props: are way of passing info to other components.....

  // let d = [10,11,12,13,14,15];

  // Change Name Function
  // function changeName() {
  //   // Logic to change the name
  //   props.setX((prev) => {
  //     return {
  //       name: 'Rayith Bose'
  //     }
  //   })
  // }
  return (
    <> 
        {/* <header class="header"> */}
    <a class="visually-hidden-focusable" name="top" href="#content"></a>
    <nav class="navbar navbar-expand-lg " id="nav">
      <div class="container-fluid">
        {/* <!-- Logo --> */}
        <a class="navbar-brand" href="#">
          <img src="images/logo.png" alt="Logo" width="80px" height="80px" class="d-inline-block align-text-top" /></a>

        {/* <!-- Navbar Toggler for mobile --> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style= {{backgroundColor: 'rgb(245, 170, 73)'}}></span>
        </button>

        {/* <!-- Navbar items --> */}
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {/* <!-- Home --> */}
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            {/* <!-- Products --> */}
            <li class="nav-item">
              <a class="nav-link text-white" href="#" onclick="fetchproducts()">Products</a>
            </li>
            {/* <!-- Categories with Dropdown --> */}
            <li class="nav-item dropdown">
              {/* <!-- <label class="input-group-text" for="inputGroupSelect01">Categories</label> */}
               {/* --> */}
              <select class="custom-select" id="inputGroupSelect01" onchange="selectOption()" style={{marginTop:'12px'}}>
                {/* <!-- <li><a class="dropdown-item" href="#">Smartphones</a></li> --> */}
                <option selected="selected" class="dropdown-item" value="choose...">Categories</option>

              </select>
            </li>
          </ul>
        </div>

        {/* <!-- Search and Cart buttons --> */}
        <form class="d-flex">
          <input class="form-control me-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn" id="btn-search" type="submit">Search</button>
          {/* <!-- *****CART****** --> */}

          <button class="btn  ms-2 " id="cart-btn" type="button">
            <i class="fa fa-shopping-cart" style={{fontSize:'22px'}}>Cart</i>
          </button>

        </form>
      </div>
    </nav>


    <div class="shopping-cart">
      <div class="box">
        {/* <!-- <i class="fa fa-trash"></i> -->
        <!-- <img src="" alt="product"> -->
        <div class="content">
          <!-- <h3>product name 1</h3>
          <span class="price">$4.99/-</span>
          <span class="quantity">Qty : 1</span> --> */}
        </div>
      </div>


      {/* <!-- <div class="total">total : $10:00/-</div> --> */}
      <a href="" class="btn">Checkout</a>
    {/* </div>  */}
{/* //    </header> */}



            {/* My passed value from App.js is {props.a}
            My passed value from App.js is {props.b.name}
            <ChildComp a={props.a}/> */}

            {/* Change Username Button */}
            {/* <button onClick={changeName}>Change Username</button> */}
    </>

  )
}
