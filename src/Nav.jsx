import React from "react";
import {Link} from 'react-router-dom'
export default function Nav(){
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to ="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/Products">All Products</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>   
    </>
    )
}