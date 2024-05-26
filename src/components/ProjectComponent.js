import React from "react";
import "./ProjectComponent.css";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export default function ProjectComponent({image,project_name,description,link}){
    return(
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image}
                alt="project_img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={link}>Open on Github</a>
                </Button>
            </CardActions>
        </Card>
    );
}