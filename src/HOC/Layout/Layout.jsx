import React from 'react';
import {Route,Switch} from 'react-router-dom';

// Component Import

import NavigationItems from '../../components/UI/Navigation/NavigationItems/NavigationItems'

// Styles Import

import styles from './Layout.module.css';


import backgroundImg from '../../assets/background.jpg';
import AboutMe from '../../containers/AboutMe/AboutMe';
import Projects from '../../containers/Projects/Projects';
import CVMainPage from '../../containers/AboutMe/CVMainPage/CVMainPage';


function Layout(){
    return(
        <div className={styles.Layout} >
        <img className={styles.LayoutImg} src={backgroundImg} alt='background'  />
        <NavigationItems/>
        <Switch>
            <Route path='/About-Me' exact component={AboutMe}/>
            <Route path='/Projects' exact component={Projects}/>
            <Route path='/' exact component={CVMainPage}/>
        </Switch>
              
        </div>
    )
}

export default Layout;
