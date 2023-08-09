import { TypeAnimation } from "react-type-animation";
import sk from './images/sk.png'
import { useEffect } from "react";
import css from './images/css.png'
import mysql from './images/mysql.png'
import html from './images/html.png'
import boot from './images/boot.png'
import material from './images/material.png'

import react from './images/react.png'
import js from './images/js.png'
import git from './images/git.png'
import node from './images/node.png'
import tailwind from './images/tailwind.png'
import java from './images/java.png'






function Skills() {





    return ( 
    <div id="skills_section" className="my-5">
        <div className="container-fluid" >
            <div id="sections_heading">
            sKiLlS
            </div>
           {/* <div id="under_anime">
           </div> */}
        </div>
        <div className="my-5 p-4" id="skills_things">
        <div className="container-fluid p-0">
       <div className="row">
    <div className="col col-md-4 d-none d-md-block">
  

    <img width={330} id="skills_img" className="mx-auto d-block" src={sk} alt=""/>

</div>
<div className="col col-md-8 d-flex justify-content-evenly my-5">
<div>
<marquee direction="right">
<img src={html} width={150}/>
<img src={css} width={120}/>
<img src={mysql} width={150}/>
<img src={java} width={150}/>

<img src={react} width={150}/>
<img src={js} width={150}/>


   
   </marquee>

   <marquee direction="left">
   
    <img src={boot} width={150}/>
    <img src={material} width={150}/>
    <img src={node} width={150}/>
    <img src={git} width={150}/>
    <img src={tailwind} width={150}/>




   
    </marquee>


</div>
</div>
</div>
       </div>
        </div>
    </div> );
}

export default Skills;