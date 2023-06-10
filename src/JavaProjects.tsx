import * as React from 'react';
import jsonData from './javaProjects.json';
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function JavaProjects() {
    const [data, setProjects] = useState<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setProjects(jsonData);
        }, 2000);
    }, []);

    return (
        <div className="content">
            {true ? (
            // {data == null ? (
                <div className="loader">
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress className="circular-loader" />
                    </Box>
                </div>
            ) : (
                <div className="content-grid">
                    {data.projects.map((project: any) => (
                        <div className="card-container" key={project.title}>
                            <Card sx={{ maxWidth: 345 }} key={project.title}>
                                <CardActionArea>
                                    <CardContent className="card-content">
                                        <h2 className="card-title">
                                            {project.title}
                                        </h2>
                                        <p className="card-description">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="card-actions">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <Button size="small" color="primary">
                                            Github Code
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default JavaProjects;