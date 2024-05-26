import React from "react";
import "./Projects.css";
import ProjectComponent from "../components/ProjectComponent";
import CarouselComponent from "../components/CarouselComponent";

export default function Projects(){
    const projects=[
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test1" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>,
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test2" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>,
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test3" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>,
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test4" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>,
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test5" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>,
        <ProjectComponent image="https://media.istockphoto.com/id/942607124/photo/modern-computer-programming-code.jpg?s=612x612&w=0&k=20&c=KRq5ncFyS4y_33oXuv6rASRzsz47n7hja37RHeHBKhw=" project_name="test6" link="https://github.com/kidwatsum" description="This project demonstrates proficiency in modern web development practices, focusing on creating interactive and user-friendly interfaces. It showcases the ability to build scalable components that enhance user engagement and experience."/>
    ];


    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project_items">
                <CarouselComponent projects={projects}/>
            </div>
        </div>
    )
}