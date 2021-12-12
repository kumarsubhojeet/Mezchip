import React from "react";
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nav_main">
        <nav class="navbar navbar-expand-lg navbar-light NavBar">
          <a class="navbar-brand" href="#">
            guranted
            <span style={{ color: "#ef4423" }}>
              <i class="fas fa-circle dot"></i>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Furniture
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Applications
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Packages
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
           
           <div className="Search">
           <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search the Website"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  id="button-addon2"
                  style={{backgroundColor:'#ea1d63' , color:'#fff' , padding:'0 19px'}}
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
           </div>

           
           <ul class="navbar-nav ">
           <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>

              
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cart
                </a>
              </li>

              </ul>

          </div>
        </nav>
      </div>
    </>
  );
}
