import React from 'react'

// Component Import

import NavigationItem from './NavigationItem/NavigationItem';

//Styles Import

import styles from './NavigationItems.module.css';

function NavigationItems(){
    return(
        <header className={styles.NavBar} >
            <div>

            <NavigationItem
                name='Home'
                link='/'
            />
            <NavigationItem
                name='Projects'
                link='/Projects'
            />
            <NavigationItem
                name='About Me'
                link='/About-Me'
            />
            </div>
            
        </header>

    )
}
export default NavigationItems;