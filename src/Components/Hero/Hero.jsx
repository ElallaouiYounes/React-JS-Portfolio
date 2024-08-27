import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.jpg'

const Hero = () => {
  return (
    <div className="card">
          <div className="hero-image">
      <img src={profile_img} alt="" className='profile-img'/>
    </div>
    <div id='home' className='hero'>
        
        <h1><span>I'm Younes Elallaoui,</span> Full Stack Developer based in Morocco.</h1>
        <p>Full-stack web developer crafting innovative, dynamic web experiences
        From front-end design to back-end architecture, 
        I build engaging and functional solutions. Let’s create something amazing together!</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-cv">Download CV</div>
        </div>
    </div>
    </div>
  )
}

export default Hero