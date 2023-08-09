import './styles/App.css'
import React, { useEffect, useState } from 'react'
import Nav from './NavBar'
import Hero from './HeroPage'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  
const [dev,setDev]=useState(0);


    setInterval(() => {
      setDev(1);
    }, 1500);


return (

<div id="cursor"> 
   {
    dev===0?<>
    <div className='quotes'>
    <div className='text-center py-5 quotes_text'>
    <div className="spinner-border" style={{ role:"status"}}>
  <span className="visually-hidden"></span>
</div>
  
    </div>
    
    </div>
    </>:
   
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
   <div className=''>
    <Contact /> 
   </div>
  </>
}
   </div>
  )
}
export default App;