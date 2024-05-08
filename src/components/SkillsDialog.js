import React from "react";


export default function SkillsDialog({image,skill_name}){



    return(
        <div className="skill">
           <img src={image} alt="skill_pic"/>
            <h5>{skill_name}</h5>
        </div>
    )
}