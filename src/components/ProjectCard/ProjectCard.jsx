import React from 'react';

import styles from './ProjectCard.module.css';

function ProjectCard(props){
    const link = 'https://' + props.link;
    const gitHubLink = props.gitHub;

    return(
        <div className={styles.Card} >
            <h1>{props.name}</h1>
            <h4>Project Info</h4>
            <p>{props.info}</p>
            <h4>Languages used</h4>
            <p>{props.lang}</p>
            <h4>Website  & GitHub Link's</h4>
            <p><a href={gitHubLink}>{props.gitHub}</a></p>
            <p><a href={link}>{props.link}</a></p>
        </div>
    )
}

export default ProjectCard;
