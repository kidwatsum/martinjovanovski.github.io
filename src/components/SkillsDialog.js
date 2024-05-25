import React from "react";
import "./SkillsDialog.css"



export default function SkillsDialog({image,skill_name,percentage}){




    return(
        <div className="skill">
           <h5>{skill_name}</h5>
            < img src={image} alt="skill"/>
            <h5>{percentage}</h5>
        </div>
    )
}