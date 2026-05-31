import React from "react";
import {Link , Outlet} from "react-router-dom"
export default function Projects(){
    return(
        <>
       
<div className="">
<div className="row">
<div className="col-12 col-md-3 col-3 bg-dark flex-column ">
<ul className="nav flex-column">
  <li className="nav-item">
    <Link className="nav-link active"  to="Project1">
    <h2>Project 1</h2>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active"  to="Project2">
    <h2>Project 2</h2>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="Project3">
    <h2>Project 3</h2>
    </Link>
  </li>

</ul>
</div>
<div className="col-12 col-md-9 text-center mt-5">
                    <Outlet />
                </div>
</div>
</div>
        </>
    )
}