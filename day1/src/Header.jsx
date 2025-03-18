import React from 'react'
import './Header.css'
import flower from '/flower.jpg'

function Header() {  
    return (
        

<div class="header">
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src={flower} alt="" width={50} height={50}/></a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="corporate.html"><i class="fa-solid fa-bag-shopping"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="search.html"><i class="fa-solid fa-magnifying-glass"></i>  About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="help.html"><i class="fa-solid fa-circle-info"></i>  Help</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>



    )
}
export default Header

