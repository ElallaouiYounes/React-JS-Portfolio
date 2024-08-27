import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import underline from '../../assets/graph.png'
import menu_open from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <div className="logo">Younes</div>
        
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img className='underline' src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img className='underline' src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img className='underline' src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>projects</p></AnchorLink>{menu==="projects"?<img className='underline' src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img className='underline' src={underline}/>:<></>}</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
        <img src={menu_open} className='menu-nav' />
    </div>
  )
}

export default Navbar

