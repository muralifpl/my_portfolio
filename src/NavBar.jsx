import { useState } from 'react';
import menu_gif from './images/git_menu.gif'
import { AiOutlineMenuUnfold,AiOutlineMenuFold } from "react-icons/ai";
function Nav() {

const[menu,setMenu]=useState(0);

const handleMenu=(check)=>{
  setMenu(check);
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

<AiOutlineMenuFold />

 </div>

}

      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-2 mb-2 gap-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#skills_section">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project_section">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact_us">Contact Us</a>
        </li>
      </ul>
      
    </div>
    <div className="d-flex justify-content-end">
      <div id="port_name_name" className="me-2">PORTFOLIO</div>
      </div>
  </div>
</nav>
    </div>
     );
}

export default Nav;