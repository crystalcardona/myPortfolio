import React from 'react';
import js1 from '../Images/js1.png'
import html1 from '../Images/html1.png'
import html2 from '../Images/html2.png'
import html3 from '../Images/html3.png'
import reactImg1 from '../Images/react1.png'
import gitImg1 from '../Images/git1.png'
import cssImg1 from '../Images/css3.png'
import nodeImg from '../Images/nodejs.png'
import expressImg from '../Images/express.png'
import postgresImg from '../Images/postGresSql2.png'
import bootstrapImg from '../Images/bootstrap.png'
import firebaseImg from  '../Images/firebase.png'
import netlifyImg1 from '../Images/netlify2.png'
// ../Images/postGresSql2.png

import '../css/Skills.css'

const Skills = () => {



    return(
        <div>
            <div>
                Skills
            </div>
            <div className="icons">
            <div className="frontendImg">
            <img src={js1} alt="" className="javascript" />
            <img src={html1} alt="" className="html" />
            <img src={reactImg1} alt="" className="html" />
            <img src={cssImg1} alt="" className="html" />
            </div>
            <div className="backendImg">
            <img src={nodeImg} alt="" className="nodeImg" />
            <img src={expressImg} alt="" className="expressImg" />
            <img src={postgresImg} alt="" className="postGresImg" />
            </div>
            <div className="toolsImg">
            <img src={gitImg1} alt="" className="html" />
            <img src={bootstrapImg} alt="" className="html" />
            <img src={firebaseImg} alt="" className="html" />
            <img src={netlifyImg1} alt="" className="netlifyImg" />
            </div>
            </div>
        </div>
    )
}

export default Skills;