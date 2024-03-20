import React from 'react'
import styles from './styles/volumeBars.module.css'

const VolumeBars: React.FC = () => {

    return (

        <div className={styles.container}>
            <div className= {styles.one}></div>
            <div className={styles.one}></div>
            <div className= {styles.one}></div>
            <div className={styles.one}></div>
            <div className= {styles.one}></div>
            <div className={styles.one}></div>
        </div>
    )
}

export default VolumeBars