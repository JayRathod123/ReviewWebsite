import React from 'react'
import './index.css'

function Reviews(props) {
  return (
    <>
      
      <div style={{display:"flex" }}>
        
          <div className="block" style={{color:"black" , backgroundColor:"lightskyblue" , width:"95vw" , height:"auto" , border:"2px solid black" , borderRadius:"4px"}}>
            <h1 style={{paddingLeft:"8px" }}>Title : {props.Title}</h1>
            <h1 style={{paddingLeft:"8px" }}>Rating : {props.rate}</h1>
            <p style={{paddingLeft:"8px" }}>Description : {props.Description}</p>
          </div>
          
          <button onClick={()=>{props.deleteList(props.index)}}>Remove</button>

      </div>
    </>
  )
}

export default Reviews