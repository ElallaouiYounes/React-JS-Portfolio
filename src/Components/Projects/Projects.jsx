import React from 'react'
import './Projects.css'
import Projects_data from '../../assets/Projects_data.js'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>My Projects</h1>
                <svg width="180" height="70" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg"> <path d="M0 30 Q30 0 150 15 Q30 60 0 30" fill="rgb(255, 127, 80)" /></svg>
            </div>
            <div className="projects-container">
                {Projects_data.map((project,index)=>{
                    return <img key={index} src={project.p_img} />
                })}
            </div>
            <div className="Projects-showmore">
                <p>More</p>
            </div>
        </div>
  )
}

export default Projects