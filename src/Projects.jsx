

import { TypeAnimation } from 'react-type-animation';
import project from './images/Project.png'
function Projects() {
    return ( <>
   <div id="project_section">
        <div className="container-fluid" >
            <div id="sections_heading">
            pRoJeCtS
            </div>
           {/* <div id="under_anime">
           </div> */}
        </div>
        <div className="my-5 p-5" id="project_things">
        <div className="container-fluid">
       <div className="row">
   
<div className="col ">
<TypeAnimation
className=""
id="hero_typing"
  style={{fontSize:"1.3rem", whiteSpace: 'pre-line', display: 'block',color:"black" ,fontFamily:"",fontWeight:"700"}}
  sequence={[
    `Designed and implemented website interface for mobile, desktop and tablets`, 
    2000,
    `Demonstrated expertise in HTML5, CSS3, Js, React js life cycle and large applications.`, 
    2000,
    
  ]}
  repeat={Infinity}
/>
</div>
<div className="col">
  
  <div className=''>

  <img style={{borderRadius:"30% 20%"}} id="project_img" className='mx-auto d-block'  src={project} alt=""/>
  <div id='back_curve_project'>

</div>
  </div>
</div>
</div>
       </div>
        </div>
    </div>
    </> );
}

export default Projects
;