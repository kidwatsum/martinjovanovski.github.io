import React from "react";
import {Link,useLocation} from "react-router-dom";
import "./NavBar.css";



function NavBar(){

    const path=useLocation().pathname

    return<nav className="navigation">
        <div className="nav_left">
            <img src={require("./images/logo1.png")} alt="logo" />
        </div>
        <ul className="nav_center">
            <li><Link to="/" className={path==='/'?'active':""}>Home</Link></li>
            <li><Link to="/about" className={path==='/about'?'active':""}>About</Link></li>
            <li><Link to="/skills" className={path==='/skills'?'active':""}>Skills</Link></li>
            <li><Link to="/projects" className={path==='/projects'?'active':""}>Projects</Link></li>
            <li><Link to="/contact" className={path==='/contact'?'active':""}>Contact</Link></li>

        </ul>
        <div className="nav_right">
            <button><img src="https://www.svgrepo.com/show/405572/flag-for-flag-north-macedonia.svg" alt="macedonia" /> </button>
            <p>/</p>
            <button className="active"><img src="https://cdn-icons-png.flaticon.com/128/330/330425.png" alt="great britain"/> </button>
        </div>
</nav>
}

export default NavBar;