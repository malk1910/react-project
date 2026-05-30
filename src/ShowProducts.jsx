export default function ShowProduct(Props){
    const{id , name , price , onSale , count} = Props.pro 
    const{DeleteProduct , Count} = Props


    return(
        <>
        <div className="col-md-3 bg-info m-2 p-2">
            <h2 className="text-center">{id}</h2>
            <p>{name}</p>
            <p>Price : {price}</p>
            <p>Count : {count}</p>

            {onSale == true ?
            <p className="bg-success text-center text-white rounded p-1"> Sale </p> : " " }

            <button onClick = {() => DeleteProduct(id)} className="btn bg-danger text-white w-100">Delete</button>
            <button onClick = {() => Count(id)} className="btn bg-warning text-white w-100 mt-2">Count</button>


        </div>
        
        </>
    )
}