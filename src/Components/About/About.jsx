import React from 'react'
import './About.css'
import graph from '../../assets/graph.png'
import profile_img from '../../assets/profile_img1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <svg width="180" height="70" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg"> <path d="M0 30 Q30 0 150 15 Q30 60 0 30" fill="rgb(255, 127, 80)"/></svg>
        </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} />
              </div>

              <div className="about-right">
                  <div className="about-para">
                      <p>▪️ I am a passionate Junior Full-Stack Developer with hands-on experience in both front-end and back-end development. I have been actively building web applications, contributing to projects, and collaborating with teams to deliver high-quality software solutions. My journey has equipped me with a strong foundation in web technologies and a continuous drive to learn and grow in the field.</p>
                      <p>▪️ My passion for web development is evident in my eagerness to tackle both front-end and back-end challenges. I approach each project with enthusiasm and a commitment to learning, ensuring that I contribute effectively to the team's success.</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                      <div className="about-skill"><p>JavaScript-React JS</p><hr style={{ width: "70%" }} /></div>
                      <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                      <div className="about-skill"><p>PHP-Laravel</p><hr style={{ width: "60%" }} /></div>
                      <div className="about-skill last-one"><p>... More</p></div>
                  </div>
              </div>
          </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>40+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
    
  )
}

export default About