'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import OffScreen from './components/OffScreen'
import styles from './page.module.css';

const Page: React.FC = ()=> {

  const router = useRouter();

  return (
    <>
      <OffScreen/>
      <button onClick={() => router.push('/UserView')} className={styles.onButton}>Click to turn on</button>
    </>
    
  );

}

export default Page