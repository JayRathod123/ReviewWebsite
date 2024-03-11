import React, { useState } from 'react'
import './index.css'

function UserReview(props) {

   const[Title , setTitle] = useState("");
   const[Description , setDescription] = useState("");
   const[Rating , setRating] = useState("");


   const  Titlechange = (e)=>{
       setTitle(e.target.value)
   }

   const descriptionchange = (e)=>{
       setDescription(e.target.value)
   }
  
   const Resettext = ()=>{
       setTitle("");
       setDescription("");
       setRating("")
   }

   const RateReview = (e)=>{
       setRating(e.target.value)
   }

  return (
    <>

      
       <div className='container mx-0' style={{  backgroundColor:"lightskyblue" , border:'1px solid black'}}>

        <h1 className='text-[50px] pt-[80px] '  style={{textAlign:"center"}}>Give Review</h1>

        <div className="form mx-[20px] my-[20px]">
            Title :<textarea className="form-control"  id="myBox" rows="1" value={Title} onChange={Titlechange} style={{border:"2px solid black"}} required></textarea>
        </div>

        <div className="form mx-[20px] my-[20px]">
            Rating :
            <br />
            <input type="number" min={0} max={5} value={Rating} onChange={RateReview} style={{border:"2px solid black" , borderRadius:"4px"}}/>
        </div>
        
        <div className="form mx-[20px] my-[20px]">
            Description :<textarea className="form-control"  id="myBox" rows="8" value={Description} onChange={descriptionchange} style={{border:"2px solid black"}}></textarea>
        </div>

       
        <button  onClick={()=>{props.addlist(Title, Description , Rating)}}>Submit</button>
        <button  onClick={Resettext}>Reset</button>


    </div>

    </>
  )
}

export default UserReview