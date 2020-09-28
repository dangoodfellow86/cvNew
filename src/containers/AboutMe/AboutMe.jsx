import React from 'react';
import Banner from '../../components/UI/Banner/Banner';
import Dan from '../../assets/Dan.jpeg';

import styles from './AboutMe.module.css';


const AboutMe = () => {

    return(
        <div className={styles.AboutMeMain} >
            <Banner name='About Me'/>
            <div className={styles.AboutMe}>
                <div className={styles.AboutMe_Title} >
                    <div><img src={Dan} alt='me' /></div>
                    <div className={styles.AboutMe_Title_wording} >
                    <h1>Hi, I'm Dan Goodfellow.</h1>
                    <p> I am a self taught Junior Web Developer.I have decided to change career after 13 years in working in Hospitality. </p>
                    <p>I have found a love for all things development and love finding and fixing problems aswell as designing websites/ apps from start to finish. </p>
                    </div>
                </div>
                <div className={styles.AboutMe_Info} >
                    <h2>Me.</h2>
                    <p>After 13 years in the Hospitality industry, I decided to have a change in career and from there begun my journey into Web Development. I have completed courses with Udemy which have given me the understanding into Web Development. I bring with me a logical thinking mind that allows me to see problems and think of inventive ways around them. </p>
                </div>
                <div className={styles.AboutMe_Lang} ></div>
            </div>
        </div>
    )
}

export default AboutMe;