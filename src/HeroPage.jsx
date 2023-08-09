import hero_img from './images/hero_img.png'
import { TypeAnimation } from 'react-type-animation';
import './styles/All.css'
import TypeWriterEffect from 'react-typewriter-effect';
function Hero() {
    return ( 
    <div id="element" className='hero_section p-5 my-2'>
    <div className="container-fluid">
<div className="row p-0 p-lg-4">
<div className="col-12 col-md-6">
<div

className=""  
id="hero_typing">
    
    <TypeWriterEffect
            textStyle={{ fontSize:"1.4rem", whiteSpace: 'pre-line',lineHeight:"45px", display: 'block',color:"black" ,fontFamily:"MV Boli",fontWeight:"700" }}
            startDelay={100}
            cursorColor="black"
            text="Front end developer with 1 year 2 months experience building websites ,web app, CRM using React js and html,css, javascript, bootstrap, material ui, git etc. Key achievement : Creating 5+ websites, 3+ web apps with responsive UI all devices and backend developers to execute new fetaures and create API endpoint’s req/res payloads."
            typeSpeed={50}
          />
  </div>
  
</div>
<div className="col-12 col-md-6">
    <div className=''>
    <img src={hero_img} id="hero_img" className='mx-auto d-block' width={280} alt="" ></img>
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