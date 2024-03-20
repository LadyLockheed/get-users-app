
import styles from './page.module.css'
import GetUserButton from './components/GetUserButton'
import Home from './home/page'


export default function Page() {


  return (
   
   <div>
      <h2 className={styles.header}>Welcome person</h2>
      <Home/>
   </div>
    
  );
}