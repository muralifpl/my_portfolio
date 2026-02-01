import { useState } from 'react';
import { AiOutlineMenuUnfold,AiFillCaretUp } from "react-icons/ai";
import myResume from '../src/files/murali_resume (1).pdf';
import downAudio from '../src/files/click.mp3'
import menuAudio from '../src/files/menu_click.mp3'
import menuToggle from '../src/files/toggle_click.mp3'
function Nav() {



const[menu,setMenu]=useState(0);

const handleMenu=(check)=>{
  setMenu(check);
  let audio = new Audio(menuToggle)
  audio.play()
}

const handleMenuAudio = ()=>{
  let audio = new Audio(menuAudio)
  audio.play()
}

const handleResume =()=>{
  const link = document.createElement('a');
  link.href = myResume;
  link.download ="Murali_Resume";
  link.click();

  let audio = new Audio(downAudio)
  audio.play()

}



return ( 
    <div className="p-4">
<nav class="navbar fixed-top navbar-expand-lg navbar-light" id="port_navbar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="" style={{color:"white",fontSize:"2rem"}}>
{
 menu===0?
 <div  onClick={()=>{handleMenu(1)}}>
 <AiOutlineMenuUnfold />
 </div>
 :
 <div  onClick={()=>{handleMenu(0)}}>

<AiFillCaretUp />

 </div>

}

      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-2 mb-2 gap-2 mb-lg-0" >
      <li class="nav-item" onClick={handleMenuAudio} >
          <a  class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" onClick={handleMenuAudio}>
          <a class="nav-link active" aria-current="page" href="#skills_section">Skills</a>
        </li>
        <li class="nav-item" onClick={handleMenuAudio}>
          <a class="nav-link" href="#project_section">Projects</a>
        </li>
        <li class="nav-item" onClick={handleMenuAudio}>
          <a class="nav-link" href="#contact_us">Contact Us</a>
        </li>
<li className='mx-0 mx-lg-4 mt-1'>

<button className=''
 style={{fontSize:"22px",border:"none",background:"red",color:"white"}}  
 onClick={handleResume} type="button" class="btn"><b>Download Resume</b></button>
</li>


      </ul>

      
    </div>

    <div className="d-flex justify-content-button gap-5">
      <div id="port_name_name" className="me-2">PORTFOLIO</div>
      </div>
  </div>
</nav>
    </div>
     );
}

export default Nav;
