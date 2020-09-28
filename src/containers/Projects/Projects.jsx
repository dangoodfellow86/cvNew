import React from 'react';

// Component Import

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Banner from '../../components/UI/Banner/Banner';
import project from '../Projects/project';
// Styles Import

import styles from './Projects.module.css';


function Projects(){

    


    return(
        <div className={styles.ProjectsMain} >
        <Banner name='Projects'/>
            <div className={styles.Projects} >
            {project.map(project =>(
            <ProjectCard
            name={project.name}
            info={project.info}
            lang={project.lang}
            link={project.link}
            gitHub={project.gitHub}

            />
            ))}
            </div>
        </div>

    )
}

export default Projects;