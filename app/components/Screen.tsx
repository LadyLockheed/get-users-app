import React from 'react'
import styles from './styles/screen.module.css'

interface ScreenProps {
    isLoading: boolean;
    user: userData[] 
}

interface userData {
    cell: string;
    dob: {
        date: string;
        age: string;
    };
    email: string;
    gender: string;
    id: {
        name:string;
        value: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        country: string;
        postcode: number;
        state: string;
        street: {
            number: number;
            name: string;
        };
        timezone: {
            offset: string
        }
    };
    phone: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    registred: {
        date: string;
        age: number
    }
}

const Screen: React.FC<ScreenProps> = ({isLoading, user})=> {

    const screenClassName = `${styles.screen} ${user.length !== 0 ? styles.scrollbar : ''}`
    const userData = user.map((u)=> {

        return (
            <div key={'key'} className={styles.userTextContainer}>
                <p className={styles.userText} key={u.name.title}><span className={styles.bold}>Title: </span>{u.name.title}</p>
                <p className={styles.userText} key={u.name.first}><span className={styles.bold}>Firstname: </span>{u.name.first}</p>
                <p className={styles.userText} key={u.name.last}><span className={styles.bold}>Lastname: </span>{u.name.last}</p>
                <p className={styles.userText} key={u.gender}><span className={styles.bold}>Gender: </span>{u.gender}</p>
                <p className={styles.userText} key={u.location.city}><span className={styles.bold}>Location: </span>{u.location.city}</p>
                <p className={styles.userText} key={u.phone}><span className={styles.bold}>Phone: </span>{u.phone}</p>
                <p className={styles.userText} key={u.email}><span className={styles.bold}>Email: </span>{u.email}</p>
                <p className={styles.userText} key={u.cell}><span className={styles.bold}>Cell: </span>{u.cell}</p>
                <p className={styles.userText} key={u.id.name}><span className={styles.bold}>Name: </span>{u.id.name}</p>
            </div>
        )
    })

    return (
        <div className={styles.outerFrame}>
            <div className={screenClassName}>
               
                {user.length === 0 ? 
                    <>
                        <h1 className={styles.header1}>Welcome person</h1>
                        <h3 className={styles.header3}>Lets find you some users</h3> 
                    </>
                    : 
                    userData
                }
                {isLoading && <h3>isLoading...</h3>}
             
            </div>
            
        </div>
     )    
}

export default Screen