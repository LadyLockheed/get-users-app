import React from 'react'
import styles from './styles/screen.module.css'

const Screen: React.FC = ()=> {

    return (
        <div className={styles.outerFrame}>
            <div className={styles.screen}>
                <h1 className={styles.header1}>Welcome person</h1>
                <h3 className={styles.header3}>Lets find you some users</h3>
            </div>
        </div>
     )    
}

export default Screen