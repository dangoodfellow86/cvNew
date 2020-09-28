import React from 'react';
import {NavLink} from 'react-router-dom';

// style import

import styles from './NavigationItem.module.css';

const navigationItem = (props) => {
    
    return(
        
        <li className={styles.NavItem} >
        <NavLink
        to={props.link}
        exact
        activeClassName={styles.active}
        >
        {props.name}
        </NavLink>
        </li>
    )
}
export default navigationItem;
