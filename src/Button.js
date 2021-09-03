import React from 'react'
import styles from './App.module.css'

const Button = ({idx, updateParent}) => {
    return ( 
        <button 
            className={styles.chooseMathButton}
            onClick={() => updateParent(idx)}
            >
                {idx}
        </button>
     );
}
 
export default Button;