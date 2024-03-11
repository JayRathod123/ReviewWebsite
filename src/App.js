        import React, { useEffect, useState } from 'react'
        import UserReview from './Components/UserReview'
        import Navbar from './Components/Navbar'
        import Reviews from './Components/Reviews'
        import {BrowserRouter , Routes , Route  } from 'react-router-dom'


        function App() {

          const getItems = ()=>{
            let list =  localStorage.getItem("myId");
            
            if(list){
              return JSON.parse(list);
            }

            else{
              return [];
            }
          }

          const[list , setList] = useState(getItems());
          const[search , setSearch] = useState("");


          const addlist = (title , Description , Rating)=>{
            
            if(title.length === 0){
              alert("please Add Title ! its required field")
            }
            if(Rating===""){
              alert("please Add Rating ! its required field")
            }
            
            if(Rating>5){
              alert("please Add Rating less than 5 !")
            }

            else{
            setList([...list,{title:title , Rating:Rating , Description:Description} ]);
            title = "";
            Rating = "";
            Description ="";
            
            }
          }

          // const deleteList = (key)=>{
          //     let newList = [...list];
          //     newList.splice(key,1);
          //     setList([...newList])
          // }

          const deleteList = (id)=>{
              const updatedList = list.filter((val,index)=>{
                  return index!==id;
              })

              setList(updatedList);
          }

          const SearchItem = (e)=>{
            setSearch(e.target.value)
          }

          const filterlist = ()=>{  
            return list.filter((val)=>{
                  return val.title.includes(search)
              })
              // return filterItem
          }
          

          useEffect(()=>{
            localStorage.setItem("myId" , JSON.stringify(list));
          },[list])
        
          return (
        
          <BrowserRouter>
            
            <Navbar/> 

              <Routes>

                  <Route exact path="/ReviewWebsite"  element={<UserReview  addlist={addlist}/>} />
                
                  <Route path="/Reviews" element={
                    <>
                    <div style={{display:"flex", margin:"auto" , justifyContent:"center" , marginTop:"20px"}}>
                      <input type="text" name="" id="" placeholder='Search By Title ' onChange={SearchItem} value={search} style={{border:"2px solid black" , height:"40px" , width:"50%" , borderRadius:"10px" , padding:"6px" }}/>
                    </div>
                    <div>
                    
                      {filterlist().length !==0 ? filterlist().map((e, i) => (
                        <div key={i} className="container  mt-[20px]">  
                          <Reviews  key={i}  Title={e.title} index={i} rate={e.Rating} deleteList={deleteList} Description={e.Description} />
                        </div>    
                      )) : <h1 className=' text-center m-10 text-4xl'>Your Review List is Empty</h1>}

                    </div> 
                    </>     
                    }
                  />  
                    
              </Routes>

          
            </BrowserRouter>
          )
        }


        export default App