'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import styles from './styles/greyButtons.module.css'

const SelectAndStartButton: React.FC = ()=> {

    const router = useRouter();

    return  ( 
        <>
            <div className={styles.turnOffContainer}>
                <button className={styles.turnOffButton} onClick={() => router.push('/')} ></button>
                <h5 className={styles.turnOffText}>TURN OFF</h5>
            </div>

            <div className={styles.aboutContainer}>
                <button onClick={() => router.push('/About')} className={styles.aboutButton}>
                </button>
                <h5 className={styles.aboutText}>ABOUT</h5>
            </div>
        </>
     
    )
}

export default SelectAndStartButton

