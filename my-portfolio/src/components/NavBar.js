import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <NavLink className="links" exact to={"/"}>About Me</NavLink>
            <NavLink className="links" to={"/skills"}>Skills</NavLink>
            <NavLink className="links" to={"/projects"}>Projects</NavLink>
        </nav>
    )
}

export default NavBar;