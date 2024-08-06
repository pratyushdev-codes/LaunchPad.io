import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
       
        <div className='header-right'>
            <BsFillBellFill className='icon'/> &nbsp; &nbsp;
            <BsFillEnvelopeFill className='icon'/> &nbsp; &nbsp;
            <BsPersonCircle className='icon'/> &nbsp; &nbsp;
        </div>
    </header>
  )
}

export default Header