import hero_img from './images/hero_img.png'
import { TypeAnimation } from 'react-type-animation';
import './styles/All.css'


function Hero() {
    return ( 
    <div id="element" className='hero_section p-5 my-2'>
    <div className="container-fluid">
<div className="row p-4">
<div className="col-12 col-md-6">
<TypeAnimation
className=""  
id="hero_typing"
  style={{fontSize:"1.4rem", whiteSpace: 'pre-line', display: 'block',color:"black" ,fontFamily:"MV Boli",fontWeight:"700"}}
  sequence={[
    `Front end developer with 1 year 2 months experience building websites ,web app, CRM using React js and html,css, javascript, bootstrap, material ui, git etc. Key achievement : Creating 5+ websites, 3+ web apps with responsive UI all devices and backend developers to execute new fetaures and create API endpoint’s req/res payloads.`, 
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