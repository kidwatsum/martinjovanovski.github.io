import React, {useState} from "react";
import "./Skills.css"
import { Button,  Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import SkillsDialog from "../components/SkillsDialog";

export default function Skills(){

    const [openDesign,setOpenDesign]=useState(false);
    const [openFront,setOpenFront]=useState(false);
    const [openBack,setOpenBack]=useState(false);

    const handleDesignOpen=()=>{
        setOpenDesign(true);
    };

    const handleCloseDesign= () =>{
        setOpenDesign(false);
    }

    const handleFrontOpen=()=>{
        setOpenFront(true);
    };

    const handleCloseFront= () =>{
        setOpenFront(false);
    }

    const handleBackOpen=()=>{
        setOpenBack(true);
    };

    const handleCloseBack= () =>{
        setOpenBack(false);
    }

    return(
        <div className="skills">
            <h1>Skills</h1>
            <div className="items">
                <div className="design">
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores corporis dolores fugit ipsam
                        ipsum nobis nulla officiis perferendis
                        perspiciatis, porro possimus qui recusandae
                        reiciendis repellendus rerum sequi soluta
                        ullam voluptate.</p>
                    <Button onClick={handleDesignOpen}>Design</Button>
                    <Dialog
                        open={openDesign}
                        onClose={handleCloseDesign}
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>Design</DialogTitle>
                        <DialogContent>
                            <SkillsDialog image="https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png" skill_name="Figma"/>
                            <SkillsDialog image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" skill_name="Adobe Illustrator"/>
                            <SkillsDialog image="https://i.pinimg.com/originals/f8/1f/dc/f81fdc42958b880279f0b0f2a7ec82aa.jpg" skill_name="Adobe Photoshop"/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDesign}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="frontend">
                    <h3>Front-end</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores corporis dolores fugit ipsam
                        ipsum nobis nulla officiis perferendis
                        perspiciatis, porro possimus qui recusandae
                        reiciendis repellendus rerum sequi soluta
                        ullam voluptate.</p>
                    <Button onClick={handleFrontOpen}>Front-end</Button>
                    <Dialog
                        open={openFront}
                        onClose={handleCloseFront}
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>Front-end</DialogTitle>
                        <DialogContent>
                            <SkillsDialog image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7zQzheKgsaUJVceUY7qh1BQ8ALn-LwHM9_91-Mbvsg&s" skill_name="HTML"/>
                            <SkillsDialog image="https://brandslogos.com/wp-content/uploads/images/large/css-logo.png" skill_name="CSS"/>
                            <SkillsDialog image="https://e7.pngegg.com/pngimages/503/848/png-clipart-javascript-computer-icons-software-developer-cascading-style-sheets-javascript-logo-angle-text-thumbnail.png" skill_name="JavaScript"/>
                            <SkillsDialog image="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" skill_name="React"/>
                            <SkillsDialog image="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" skill_name="Material UI"/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseFront}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="backend">
                    <h3>Back-end</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores corporis dolores fugit ipsam
                        ipsum nobis nulla officiis perferendis
                        perspiciatis, porro possimus qui recusandae
                        reiciendis repellendus rerum sequi soluta
                        ullam voluptate.</p>
                    <Button onClick={handleBackOpen}>Back-end</Button>
                    <Dialog
                        open={openBack}
                        onClose={handleCloseBack}
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>Back-end</DialogTitle>
                        <DialogContent>
                            <SkillsDialog image="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png" skill_name="C++"/>
                            <SkillsDialog image="https://static.cdnlogo.com/logos/c/27/c.svg" skill_name="C#"/>
                            <SkillsDialog image="https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png" skill_name="Java"/>
                            <SkillsDialog image="https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png" skill_name="C"/>
                            <SkillsDialog image="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" skill_name="MongoDB"/>
                            <SkillsDialog image="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo.png" skill_name="Firebase"/>
                            <SkillsDialog image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" skill_name=".NET"/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseBack}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}