import React from 'react'
import styles from './styles/crossButton.module.css'

//Atm this is only a placeholder for a real button
//in the future it is going to be a button with onclick funcion
const CrossButton: React.FC =  ()=> {

    return (
        <div className={styles.container}>
            <div className={styles.horizontal}></div>
            <div className= {styles.vertical}></div>
        </div>
    )
}

export default CrossButton