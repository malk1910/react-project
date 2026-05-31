import { useState } from "react";
export default function Home(){
  
//   const [name , setName] = useState('')
  // const [value , setValue] = useState(0)

  
//   function ch(){
//     console.log('name' , name )
//     setName('malak');
//   } 
   
  // function inc(){
  //   console.log('value :' , value )
  //   setValue(value + 1);
  // } 


  return (
    <>
   {/* <h1>{name}</h1>
   <button onClick={ch}>change name</button> */}

   {/* <h1>{value}</h1>
   <button onClick={inc}>inc number</button> */}
   <div className="bg-secondary-subtle min-vh-100 lh-lg d-flex justify-content-center align-items-center">
   <div className="container text-center pt-5">
    <p className="fw-bold text-danger-emphasis "> ducimus porro facilis vero dolorem</p>
    <h1 className="fw-bold">Learning <span className="text-danger-emphasis">REACT </span>.</h1>
    <p className="text-dark-emphasis">Lorem ipsum dolor sit Laborum iste suscipit impedit aut quas commodi nulla.</p>
    <button className="btn bg-dark  text-white">Let's talk</button>
    
   </div>
   </div>
    </>

  )
}