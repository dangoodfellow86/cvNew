import React from 'react';

import styles from './Banner.module.css';

const Banner = (props) => {

    return (
        <div className={styles.Banner} >
            <h1>{props.name}</h1>
        </div>
    )
}

export default Banner;