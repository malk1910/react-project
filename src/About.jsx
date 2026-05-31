import React from "react";
import lap1 from "./assets/lap1.jpg"
import lap2 from "./assets/lap2.jpg"
export default function About() {
    return (
    <>
    <div className="bg-secondary-subtle min-vh-100">
        <div className="container py-5">
    <h1 className="text-center mb-5">About</h1>
  
    <div className="row g-4">
  <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-sm-0">
    <div className="card">
    <img src={lap1} className="rounded"/> 

      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <div className="card">
    <img src={lap2} className="rounded"/> 
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-lg-3">
    <div className="card">
    <img src={lap1} className="rounded"/> 
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-lg-3">
    <div className="card">
    <img src={lap2} className="rounded"/> 
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
 
</div>
    </div>
    
    </>
    )
  }