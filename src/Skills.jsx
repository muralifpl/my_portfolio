import { TypeAnimation } from "react-type-animation";
import mario from './images/skills_1.png'
import { useEffect } from "react";
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
        <div className="my-5 p-5" id="skills_things">
        <div className="container-fluid">
       <div className="row">
    <div className="col">
  

    <img style={{borderRadius:"50%"}} id="skills_img" className="mx-auto d-block" src={mario} alt=""/>
<div id="back_curve_skills">

</div>

</div>
<div className="col d-flex justify-content-evenly my-5">
    <div className="me-5">
<h3>React Js</h3>
<h3>Html</h3>
<h3>Css</h3>
<h3>JavaScript</h3>
<h3>Node JS</h3>  

</div>
<div>
<h3>Material UI</h3>
<h3>Bootstrap</h3>
<h3>Mysql</h3>
<h3>Tailwind Css</h3>  
</div>
</div>
</div>
       </div>
        </div>
    </div> );
}

export default Skills;