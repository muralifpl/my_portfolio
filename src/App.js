import './App.css'
import React, { useState } from 'react'
import Nav from './NavBar'
import Hero from './HeroPage'
import Skills from './Skills'
function App() {

const [dev,setDev]=useState(0);

const handleClick=(check)=>{
setDev(check);
}

  return (

  <>
{
  dev===1?<>
  
  <Nav />
   
   <div>
   <Hero />
   </div>
   <div className='py-5'>
   <Skills />
   </div>
  </>
  :
  
  <>
  <div className='' style={{background:"black",height:"500px",width:"100%"}}>

<div className='h-100 d-flex align-items-center justify-content-center'>
  <h1 className='text-white'>
    Under Development!
  </h1>
  
  <div className=''>
    <br />
    <br />
    <br />

  <button class="btn-primary" type="submit" onClick={()=>{handleClick(1)}}>It's OK</button>
  </div>
</div>
  </div>
  </>
}
   

   </>
  )
}
export default App