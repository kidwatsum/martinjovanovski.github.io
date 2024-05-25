import React, {useState} from "react";
import "./ArrowNavigationSkillsDialog.css";
import SkillsDialog from "./SkillsDialog";
import {IconButton} from "@mui/material";
// import KeyboardArrowRightIcon from '@mui/material';
// import KeyboardArrowLeftIcon from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export default function ArrowNavigationSkillsDialog(){
    const [currentBox,setCurrentBox]=useState(0);
    const [innerCurrentBackendBox,setInnerCurrentBackendBox]=useState(0);
    const [innerCurrentFrontendBox,setInnerCurrentFrontendBox]=useState(0);

    const innerBackendBoxes=[
        <div className="backend_1">
            <SkillsDialog skill_name="Java" image="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png" percentage="80%"/>
            <SkillsDialog skill_name="C/C++" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/180px-ISO_C%2B%2B_Logo.svg.png" percentage="80%"/>
            <SkillsDialog skill_name="C#" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/192px-C_Sharp_Logo_2023.svg.png" percentage="70%"/>
        </div>,
        <div className="backend_2">
            <SkillsDialog skill_name=".NET" image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/225px-Microsoft_.NET_logo.svg.png" percentage="70%"/>
            <SkillsDialog skill_name="MongoDB" image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/375px-MongoDB_Fores-Green.svg.png" percentage="65%"/>
            <SkillsDialog skill_name="Firebase" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/330px-New_Firebase_logo.svg.png" percentage="70%"/>
        </div>
    ];

    const innerFrontendBoxes=[
        <div className="frontend_1">
            <SkillsDialog skill_name="HTML" image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png" percentage="80%"/>
            <SkillsDialog skill_name="CSS" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png" percentage="80%"/>
            <SkillsDialog skill_name="JavaScript" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png" percentage="75%"/>
        </div>,
        <div className="frontend_2">
            <SkillsDialog skill_name="React" image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png" percentage="75%"/>
            <SkillsDialog skill_name="Bootstrap" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png" percentage="85%"/>
            <SkillsDialog skill_name="Material UI" image="data:image/png;base64,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" percentage="85%"/>
        </div>
    ]

    const handleNextFrontendInner=()=>{
        if(innerCurrentFrontendBox<innerFrontendBoxes.length-1){
            setInnerCurrentFrontendBox(innerCurrentFrontendBox+1);
        }
    };

    const handlePreviousFrontendInner=()=>{
        if(innerCurrentFrontendBox>0){
            setInnerCurrentFrontendBox(innerCurrentFrontendBox-1);
        }
    };
    const handleNextBackendInner=()=>{
        if(innerCurrentBackendBox<innerBackendBoxes.length-1){
            setInnerCurrentBackendBox(innerCurrentBackendBox+1);
        }
    };
    const handlePreviousBackendInner=()=>{
        if(innerCurrentBackendBox>0){
            setInnerCurrentBackendBox(innerCurrentBackendBox-1);
        }
    };

    const boxes=[

            <div className="design">
                <div className="design_skills">
                    <SkillsDialog skill_name="Figma" image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/96px-Figma-logo.svg.png" percentage="75%"/>
                    <SkillsDialog skill_name="Adobe Illustrator" image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/180px-Adobe_Illustrator_CC_icon.svg.png" percentage="80%"/>
                    <SkillsDialog skill_name="Adobe Photoshop" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/180px-Adobe_Photoshop_CC_icon.svg.png" percentage="70%"/>
                </div>

            </div>,

            <div className="backend">
                <div className="backend_skills">
                    <IconButton onClick={handlePreviousBackendInner} disabled={innerCurrentBackendBox===0}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    {innerBackendBoxes[innerCurrentBackendBox]}
                    <IconButton onClick={handleNextBackendInner} disabled={innerCurrentBackendBox===innerBackendBoxes.length-1}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </div>,
            <div className="frontend">
                <div className="frontend_skills">
                    <IconButton onClick={handlePreviousFrontendInner} disabled={innerCurrentFrontendBox===0}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    {innerFrontendBoxes[innerCurrentFrontendBox]}
                    <IconButton onClick={handleNextFrontendInner} disabled={innerCurrentFrontendBox===innerFrontendBoxes.length-1}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </div>


    ];


    const handleNext=()=>{
        if(currentBox<boxes.length-1){
            setCurrentBox(currentBox+1);
        }
    };

    const handlePrevious=()=>{
        if(currentBox>0){
            setCurrentBox(currentBox-1);
        }
    };

    const handleName=()=>{
        if(currentBox===0){
            return <h3>Design</h3>
        }
        if(currentBox===1){
            return <h3>BackEnd</h3>
        }
        if(currentBox===2){
            return <h3>FrontEnd</h3>
        }
    };

    return(
        <div className="items">
            <div className="nav_skills">
                <IconButton onClick={handlePrevious} disabled={currentBox===0}>
                    {/*<KeyboardArrowLeftIcon/>*/}
                    <ArrowBackIosIcon/>
                </IconButton>
                {handleName()}
                <IconButton onClick={handleNext} disabled={currentBox===boxes.length-1}>
                    {/*<KeyboardArrowRightIcon/>*/}
                    <ArrowForwardIosIcon/>
                </IconButton>
            </div>

            {boxes[currentBox]}

        </div>
    )
}

