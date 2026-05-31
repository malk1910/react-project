import React from "react";
import {Link} from 'react-router-dom'
export default function Nav(){
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">

    <div className=" container container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>

    <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to ="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/Projects">Projects</Link>
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