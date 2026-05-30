import React from "react";
import lap1 from "./assets/lap1.jpg"
import lap2 from "./assets/lap2.jpg"
export default function About() {
    return (
    <>
    <div className="bg-secondary-subtle min-vh-100">
    <h1 className="text-center">About</h1>
    <div className="d-flex justify-content-center align-items-center mt-5 gap-5">
  
    <div className="row ">
  <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card">
    <img src={lap1} className="rounded"/> 

      <div className="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src={lap2} className="rounded"/> 
      <div className="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
    <img src={lap1} className="rounded"/> 
      <div className="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
    <img src={lap2} className="rounded"/> 
      <div className="card-body">
        <h5 class="card-title">Special title treatment</h5>
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