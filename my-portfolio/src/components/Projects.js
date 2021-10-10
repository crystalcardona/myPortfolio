import React from 'react';
import afrolinkImg from '../Images/Afrolink.png'
import '../css/Projects.css'


const ProjectsPage = () => {


    return(
        <div className="projContainer">
        <div>
            <h1>Projects</h1>
        </div>
        <div className="afrolinkSec">
            <h2>Afro Link</h2>
            <a href="https://afro-link.netlify.app/">Live</a> | <a href="https://github.com/crystalcardona/afro-link">GitHub</a>
            <img src={afrolinkImg} alt="" className="afrolinkImg"></img>
        </div>
        <div>
            <h2>Bytes </h2> 
        </div>
        <div>
            <h2>Simple Calculator</h2>
        </div>
        <div>
           <h2>FlashGram</h2> 
           <br /> 
        </div>
        </div>
    )
}

export default ProjectsPage