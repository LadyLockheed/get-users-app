'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import OffScreen from './components/OffScreen'
import styles from './page.module.css';
import Image from 'next/image';

const Page: React.FC = ()=> {

  const router = useRouter();

  return (
    <>
      <OffScreen/>
      <h3 className= {styles.appText}>Click powerbutton to turn on</h3>
      <button onClick={() => router.push('/UserView')} className={styles.onButton}>
        <Image src="/power-button.png" alt="My Icon" width={70} height={70}/>
      </button>

    </>
    
  );

}

export default Page