import React from 'react';
import NavBar from './NavBar'
import '../css/Mainpage.css'

const MainPage = () => {

    return(
        <div>
        <div className="header">
        <NavBar/>
        </div>
        <div className="About">
        <p>
        About Me
        </p>

        </div>
        </div>
    )
}

export default MainPage;