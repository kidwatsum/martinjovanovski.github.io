import React from "react";
import "./About.css"
import {Button} from "@mui/material";

 export default function About(){
    return(
        <div className="about">
            <div className="body_left">
                <img src={require("../components/images/matura.jpg")} alt="martin"/>
            </div>
            <div className="body_right">
                <h1>About Me!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae, cupiditate expedita fugit illo ipsa minima molestiae molestias necessitatibus nobis odio quibusdam ratione voluptas voluptate. Architecto consectetur delectus sed.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae, cupiditate expedita fugit illo ipsa minima molestiae molestias necessitatibus nobis odio quibusdam ratione voluptas voluptate. Architecto consectetur delectus sed.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae, cupiditate expedita fugit illo ipsa minima molestiae molestias necessitatibus nobis odio quibusdam ratione voluptas voluptate. Architecto consectetur delectus sed.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae, cupiditate expedita fugit illo ipsa minima molestiae molestias necessitatibus nobis odio quibusdam ratione voluptas voluptate. Architecto consectetur delectus sed.
                    .</p>
                <Button>Let's chat</Button>
            </div>
        </div>
    )
 }