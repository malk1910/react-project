import react from 'react'
export default function Child(props){
    const {car , model} = props

    return(
        <>
        <h2>{car}</h2>
        <p>{model}</p>
        
        </>
    )

}