import React from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import {Button} from "@mui/material";

function Home(){
    return (
        <div className="home">
            <div className="body_left">
                <h1>Hello,</h1>
                <h1>I'm Martin Jovanovski</h1>
                <h1>And</h1>
                <h1>I'm A Web Developer</h1>
                <div className="buttons">
                    <Button>Download CV</Button>
                    <Button>Contact Me!</Button>
                </div>
            </div>
            <div className="body_right">
                <img src={require("../components/images/body_right_transparent.png")} alt="coding"/>
            </div>
        </div>
    )


}
export default Home;