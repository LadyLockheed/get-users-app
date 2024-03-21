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
    const userData = user.map((u, i)=> {

        return (
            <>
                <p key={u.name.title}>Title: {u.name.title}</p>
                <p key={u.name.first}>Firstname:{u.name.first}</p>
                <p key={u.name.last}>Lastname: {u.name.last}</p>
                <p key={u.gender}>Gender: {u.gender}</p>
                <p key={u.location.city}>Location: {u.location.city}</p>
                <p key={u.phone}>Phone: {u.phone}</p>
                <p key={u.email}>Email: {u.email}</p>
                <p key={u.cell}>Cell: {u.cell}</p>
                <p key={u.id.name}>Name: {u.id.name}</p>
            </>
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