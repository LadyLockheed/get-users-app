import React from 'react'
import styles from './styles/redButton.module.css'

interface RedButtonProps {

    getUser: ()=>void
}
const RedButton: React.FC<RedButtonProps> = ({getUser})=> {

    return <button className={styles.redButton} onClick={()=> getUser()}>Get users</button>
}

export default RedButton