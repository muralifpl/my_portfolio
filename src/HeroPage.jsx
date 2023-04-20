import hero_img from './images/hero_img.png'
import { TypeAnimation } from 'react-type-animation';
import './styles/All.css'


function Hero() {
    return ( 
    <div id="element" className='hero_section p-5 my-2'>
    <div className="container">
<div className="row p-4">
<div className="col-12 col-md-6">
<TypeAnimation
className=""
id="hero_typing"
  style={{fontSize:"1.3rem", whiteSpace: 'pre-line', display: 'block',color:"black" ,fontFamily:"MV Boli",fontWeight:"700"}}
  sequence={[
    `As a frontend developer with more than 1+ year of experience in ReactJS, I have a strong foundation in HTML, CSS, and JavaScript, as well as a deep understanding of JSX syntax, components, state and props, lifecycle methods, and Redux.`, 
    2000,
    '',
  ]}
  repeat={Infinity}
/>
</div>
<div className="col-12 col-md-6">
    <div className=''>
    <img src={hero_img} id="hero_img" className='mx-auto d-block' width="50%" height="50%" alt="" ></img>
    </div>
   
    <div id='back_curve_hero'>

    </div>
</div>
</div>
    </div>
    </div>
    
    );
}

export default Hero;