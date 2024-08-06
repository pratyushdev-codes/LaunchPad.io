import React from 'react';
import { BsCart3, BsGrid1X2Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""  } style={{textDecoration:"non"}}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <h2 style={{color:"white", fontWeight:"bolder"}}> LaunchPad.io</h2>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
      <Link to="/">
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        </Link>
       

       <Link to ="/appointment">        <li className='sidebar-list-item'>
          <a href="">
            <i className="fa-solid fa-suitcase-medical"></i> &nbsp;Book Appointments
          </a>
        </li></Link>


<Link to="/chatbot">
        <li className='sidebar-list-item'>
      
            <i className="fa-solid fa-poo-storm"></i> &nbsp; bitHeat AI Chatbot
    
        </li>
        </Link>

        <li className='sidebar-list-item'>
          <a href="">
            <i className="fa-solid fa-headset"></i> &nbsp; Mental Support
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="https://66ad27299e097ea8a9ed7cc4--deft-piroshki-06befe.netlify.app/">
            <i className="fa-solid fa-child-dress"></i> &nbsp; Women Period Tracker
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <i className="fa-regular fa-calendar-days"></i> &nbsp; Pregnancy Tracker
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
