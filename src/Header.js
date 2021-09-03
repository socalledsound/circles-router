import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './App.module.css'
const Header = () => {
    return ( 
        <div className={styles.header}>
            <NavLink
                className={styles.headerLink}
                to='/'
            >home page
            </NavLink>
            <NavLink 
                className={styles.headerLink}
                to='/about'
            >about page
            </NavLink>
            <NavLink
                className={styles.headerLink}
                to='/circles'
            >
            circles page
            </NavLink>
            {/* <NavLink 
                className={styles.headerLink}
                to='/circles/0'
            >to circle circles</NavLink>
                       <NavLink 
                className={styles.headerLink}
                to='/circles/1'
            >to line circles</NavLink> */}
        </div>
     );
}
 
export default Header;