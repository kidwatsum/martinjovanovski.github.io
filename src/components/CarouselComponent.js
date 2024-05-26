import React, {useState} from "react";
import "./CarouselComponent.css";

export default function CarouselComponent({projects}){
    const [currentProject,setCurrentProject]=useState(0);

    const slide=(direction)=>{
        if(direction==="next"){
            setCurrentProject((prevIndex)=>(prevIndex+1)%projects.length);
        }else {
            setCurrentProject((prevIndex)=>(prevIndex-1+projects.length)%projects.length);
        }
    }

    const visibleProjects=projects.slice(currentProject,currentProject+3);
    if(visibleProjects.length<3){
        visibleProjects.push(...projects.slice(0,3-visibleProjects.length));
    }

    return(
        <div className="carousel-container">
            <button className="prev" onClick={()=>slide('prev')}>&#10094;</button>
            <div className="container">
                <div className="carousel">
                    {visibleProjects.map((project,index)=>(
                        <div className="card" key={index}>{project}</div>
                    ))}
                </div>
            </div>
            {/*<button className="prev" onClick={()=>slide('prev')}>&#10094;</button>*/}
            {/*<div className="carousel">*/}
            {/*    {visibleProjects.map((project,index)=>(*/}
            {/*        <div className="card" key={index}>{project}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <button className="next" onClick={()=>slide('next')}>&#10095;</button>
        </div>
    );
}