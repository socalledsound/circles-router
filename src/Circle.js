import React from 'react'
import styles from './App.module.css'
const Circle = ({top, left}) => {
    return ( 
        <div 
            className={styles.circle}
            style={{top: `${top}px`, left: `${left}px`}}
        />

        
     );
}
 
export default Circle;