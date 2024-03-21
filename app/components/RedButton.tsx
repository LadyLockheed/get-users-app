import React from 'react'
import styles from './styles/redButton.module.css'

interface RedButtonProps {

    getUser: ()=>void
}
const RedButton: React.FC<RedButtonProps> = ({getUser})=> {

    return (

        <div className={styles.redButtonContainer}>
            <button className={styles.redButton} onClick={()=> getUser()}></button>
            <h5 className={styles.getUserText}>GET USER</h5>
        </div>
    )
}

export default RedButton