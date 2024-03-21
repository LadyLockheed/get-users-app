'use client'
import React, { useState } from 'react'
import CrossButton from '../components/CrossButton'
import RedButton from '../components/RedButton'
import GreyButtons from '../components/GreyButtons'
import Screen from '../components/Screen'
import axios from 'axios'

const UserView: React.FC = ()=> {

  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

    const fetchUser = async()=> {
 
        setIsLoading(true)

        try {

            const response = await axios.get('https://randomuser.me/api/')

            if(!response) {
                setHasError(true)
            }
            else {
            setUser(response.data.results)
            }

        }
        catch(error) {
            setHasError(true)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <>  
            <Screen isLoading={isLoading} user={user} hasError={hasError}/>
            <CrossButton/>
            <RedButton getUser={fetchUser}/>
            <GreyButtons/>
        </>
    )
}

export default UserView