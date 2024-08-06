import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header ' style={{backgroundColor:"white",  justifyContent:"flex-end"}}>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
       
        <div className='header-left' style={{display:"flex"}} >
        <button type="button" class="btn btn-primary mx-2" style={{borderRadius:"20px", }}>Generate Dev Card</button>
            <img src='./images/download.png' className='my-1' style={{borderRadius:"50%", width:"30px", height:"30px"}}/>
        </div>
    </header>
  )
}

export default Header