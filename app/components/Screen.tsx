import React from 'react'
import styles from './styles/screen.module.css'

interface ScreenProps {
    isLoading: boolean;
    user: userData[] 
    hasError: boolean;
}

//This is not a complete interface over everything
//available in the userData object.
//To save time I only selected some propertys.
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

const Screen: React.FC<ScreenProps> = ({isLoading, user, hasError})=> {

    const screenClassName = `${styles.screen} ${user.length !== 0 ? styles.scrollbar : ''}`

    const userData = user.map((u)=> {

        return (
            <div key={'key'} className={styles.userTextContainer}>

                <h3>Random user:</h3>

                <p key={u.name.title}><span className={styles.bold}>Title: </span>{u.name.title}</p>
                <p key={u.name.first}><span className={styles.bold}>Firstname: </span>{u.name.first}</p>
                <p key={u.name.last}><span className={styles.bold}>Lastname: </span>{u.name.last}</p>
                <p key={u.gender}><span className={styles.bold}>Gender: </span>{u.gender}</p>
                <p key={u.location.city}><span className={styles.bold}>Location: </span>{u.location.city}</p>
                <p key={u.phone}><span className={styles.bold}>Phone: </span>{u.phone}</p>
                <p key={u.email}><span className={styles.bold}>Email: </span>{u.email}</p>
                <p key={u.cell}><span className={styles.bold}>Cell: </span>{u.cell}</p>
                <p key={u.id.name}><span className={styles.bold}>Name: </span>{u.id.name}</p>

            </div>
        )
    })

    return (
        <div className={styles.outerFrame}>
            <div className={screenClassName}>
               
                {user.length === 0 && !isLoading && !hasError ? 
                    <>
                        <h1 className={styles.header}>Welcome person</h1>
                        <h3 className={styles.header}>Lets find you a random user</h3> 
                    </>
                    : 
                    userData
                }
                {isLoading && <h3>isLoading...</h3>}
                {hasError && <h3>Something went wrong, please try again.</h3>}
             
            </div>
            
        </div>
     )    
}

export default Screen