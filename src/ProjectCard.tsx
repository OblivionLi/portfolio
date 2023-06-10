import * as React from 'react';
import jsonData from './phpProjects.json';
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button} from "@mui/material";

export default function ProjectCard() {
    const [data, setProjects] = useState<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setProjects(jsonData);
        }, 2000);
    }, []);

    return (
        <div className="content">
            {data == null ? (
                <div className="loader">
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress className="circular-loader" />
                    </Box>
                </div>
            ) : (
                <>
                    {data.projects.map((project: any) => (
                        <React.Fragment key={project.title}>
                            <section key={project.title}
                                     className={`ps portfolio-showcase${project.positionLeft ? "-left" : ''}`}>
                                <div className="portfolio-showcase-img">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <img src={process.env.PUBLIC_URL + '/images/' + project.image}
                                             alt={project.title}/>
                                    </a>
                                </div>

                                <div className={`portfolio-showcase-right${project.positionLeft ? "-left" : ''}`}>
                                    <div
                                        className={`portfolio-showcase-right-title${project.positionLeft ? "-left" : ''}`}>
                                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                                            {project.title}
                                        </a>
                                    </div>
                                    <div className={`portfolio-showcase-desc${project.positionLeft ? "-left" : ''}`}>
                                        <p>{project.description}</p>
                                    </div>

                                    <div
                                        className={`portfolio-showcase-languages${project.positionLeft ? "-left" : ''}`}>
                                        <p>{project.programming_languages.join(` / `)}</p>

                                        <ul className="portfolio-showcase-media">
                                            <li>
                                                <a href={project.githubLink} target="_blank" rel="noreferrer">
                                                    <Button size="small" color="primary">
                                                        Github Code
                                                    </Button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={project.youtubeLink} target="_blank" rel="noreferrer">
                                                    <Button size="small" color="primary">
                                                        Youtube Link
                                                    </Button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </section>

                            <div className="divider underlineColor2"></div>
                        </React.Fragment>
                    ))}
                </>
            )}
        </div>
    );
}