import React from "react";
import "./Skills.css"
// import SkillsDialog from "../components/SkillsDialog";
import ArrowNavigationSkillsDialog from "../components/ArrowNavigationSkillsDialog";


export default function Skills(){


    return(
        <div className="skills">
            <div className="left_body">
                <h1>My Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium ad aut deleniti incidunt
                    recusandae repellat, saepe. Atque corporis
                    cupiditate dicta earum enim ipsum mollitia
                    numquam possimus quam, voluptas! Ducimus, reprehenderit.</p>
                <ArrowNavigationSkillsDialog/>

        </div>
            <div className="right_body">
                <img src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code-vector-isolated-concept-metaphor-illustration_335657-2789.jpg?t=st=1716631104~exp=1716634704~hmac=c809c11c03db24fd1eecedf21426c03f5903dce1fd85c4bb7e50eb292ab26882&w=740" alt="img_2"/>
            </div>
        </div>
    )
}