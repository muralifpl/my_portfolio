import './App.css'
import React, { useState } from 'react'
import Nav from './NavBar'
import Hero from './HeroPage'
import Skills from './Skills'
import Projects from './Projects'
function App() {

const [dev,setDev]=useState(0);

const handleClick=(check)=>{
setDev(check);
}

  return (

  <>    
<>
  
  <Nav />
   
   <div>
   <Hero /> 
   </div>
   <div className=''>
   <Skills /></div>
   <div className=''>
    <Projects /> 
   </div>
  </>

   </>
  )
}
export default App;