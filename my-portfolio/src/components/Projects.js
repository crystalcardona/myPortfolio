import React from 'react';
import afrolinkImg from '../Images/Afrolink.png'
import bytesImg from '../Images/Bytes.png'
import calcImg from '../Images/simpCalc.png'
import '../css/Projects.css'


const ProjectsPage = () => {


    return(
        <div>
        <div>
            <h1>Projects</h1>
        </div>
        <div className="projContainer">
        <div className="col1">
        <div className="afrolinkSec">
            <h2>Afro Link</h2>
            <div>
            <a href="https://afro-link.netlify.app/">Live</a> | <a href="https://github.com/crystalcardona/afro-link">GitHub</a>
            </div>
            <img src={afrolinkImg} alt="" className="afrolinkImg"></img>
        </div>
        </div>
        <div className="col2">
        <div className="bytesSec">
            <h2>Bytes </h2> 
            <div>
            <a href="https://github.com/crystalcardona/React-GroupProject"> Github </a>
            </div>
            <img src={bytesImg} alt="" className="bytesImg"></img>
        </div>
        </div>
        <div className="col3">
        <div className="calcSec">
            <h2>Simple Calculator</h2>
            <div>
            <a href="https://csimplecalc.netlify.app/">Live</a> | <a href="https://github.com/crystalcardona/Calculator">Github</a>
            </div>
            <img src={calcImg} alt="" className="calcImg"></img>
        </div>
        </div>
        </div>
        </div>
    )
}

export default ProjectsPage