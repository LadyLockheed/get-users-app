'use client'
import React, { useState } from 'react'
import CrossButton from '../components/CrossButton'
import RedButton from '../components/RedButton'
import GreyButtons from '../components/GreyButtons'
import Screen from '../components/Screen'
import axios from 'axios'
import styles from './userView.module.css'

const UserView = ()=> {

  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(false)

    const fetchUser = async()=> {
 
        setIsLoading(true)
      try {
        const response = await axios.get('https://randomuser.me/api/')
        if(!response) {
          console.log('somehting is wrong')
          
        }
        else {
          setUser(response.data.results)
         
        }
      }
      catch(error) {
        console.log(error)
      }
      finally {
        setIsLoading(false)
      }
    }

    return (
    <>  
      <Screen isLoading={isLoading} user={user}/>
      <CrossButton/>
      <RedButton getUser={fetchUser}/>
      <GreyButtons/>
    </>
    )
}

export default UserView