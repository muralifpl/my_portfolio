
import contact from './images/contact_us.png'
function Contact (){
    return<div id="contact_us">
     <div className="container">
        <div className="row">
<div className="col">
<img src={contact} className="mx-auto mt-5 d-block" width={350}/>
    </div>
    <div className="col p-4">
<div className='text-center mt-5'>

 <div style={{fontSize:"5rem",fontWeight:"bolder"}}>
    Contact Me
 </div>
 <div style={{fontSize:"1.5rem"}} className='mt-2'>
    Mobile : <a href="tel:+916369173970">+91 6369173970</a>
 </div>
 <div style={{fontSize:"1.5rem"}} className='mt-2'>
    Email : <a href="mailto:muraliragu99@gmail.com">muraliragu99@gmail.com</a>
 </div>
 <div style={{fontSize:"1.5rem"}} className='mt-2'>
    LinkedIn : <a href="https://in.linkedin.com/in/murali-ragupathy-179224253
">Murali Ragupathy</a>
 </div>
 <div style={{fontSize:"1.5rem"}} className='mt-2'>
    Github : <a href="https://github.com/muralifpl/
">Muralifpl</a>
 </div>
 <div className='my-4'>

 </div>
</div>

    </div>
        </div>

     </div>
    </div>
}
export default Contact;