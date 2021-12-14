import React from 'react';
import NavBar from './NavBar'
import '../css/Mainpage.css'
import proPic from '../Images/pic1.jpg'

const MainPage = () => {

    return(
        <div>
        <div className="main">
        </div>
        <div className="every">
        <div className="About">
        <h1 className="name">Crystal Cardona</h1>
        <br />
        <p>
        I'm a fullstack web developer from New York City. I previously worked as a medical management coordinator for a health insurance company. I was faced with 2 computer screens and about 5 software programs that weren't always functioning and thought there has to be a better way. I've always been intrigued with coding and decided to enroll myself in a program and landed myself with Pursuit. I dedicated my nights and weekends for a year to develop software engineering skills. Now I can create web applications and I'm excited to continue my path in the tech world. Other then tech I love music, cooking, photography, writing and having a good adventure with nature and/or friends. I really look forward to meeting new people and seeing where my journey takes me. 
        </p>
        </div>
        <div className="pic">
        <img src={proPic} alt="" className="portPic" />
        </div>
        </div>
        </div>
    )
}

export default MainPage;