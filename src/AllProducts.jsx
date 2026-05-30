import { useState } from "react"
import ShowProducts from "./ShowProducts"

export default function AllProducts(){
    const [Products , setProducts] = useState( [
        {id:1 , name:" product 1" , price: 10 , onSale : true  , count : 0},
        {id:2 , name:" product 2" , price: 20 , onSale : false , count : 0},
        {id:3 , name:" product 3" , price: 30 , onSale : true , count : 0},
        {id:4 , name:" product 4" , price: 40 , onSale : false , count : 0},
        {id:5 , name:" product 5" , price: 50 , onSale : true , count : 0},
        {id:6 , name:" product 6" , price: 60 , onSale : false , count : 0}

    ])
    function DeleteProduct(id){
        console.log("delete" , id)
        
        const newProducts = structuredClone(Products)
        const result = newProducts.filter((ele) => {
            return ele.id !== id 
        })
        setProducts(result)
    }

    function Count(id){
        const counting = Products.map((num) => {
            if(num.id === id){
             num.count += 1
            }
            return num

        })
        setProducts(counting)
    }
 
    
    return (
        <>
        <h2 className="bg-dark text-center text-white">All Products</h2>
        <div className="container bg-dark">
            <div className="row justify-content-center">
        {Products.map(function(x){
            return <ShowProducts pro={x} DeleteProduct ={DeleteProduct} Count={Count} key={x.id}/>
        })}
         </div>
       </div>
        </>
    )
}