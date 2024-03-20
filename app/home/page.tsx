'use client'
import { useRouter } from 'next/navigation';
import styles from './style.module.css'; // Assuming you will create this CSS module
 

const Home = ()=> {
  const router = useRouter();

  return (
   
    <div className={styles.square}>
      <button onClick={() => router.push('/UserPage')} className={styles.button}>
        Go to getUserPage
      </button>
    </div>
    
  );

}

export default Home