'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const About = ()=> {
    const router = useRouter();
    return (
<>
        <p>About</p>
        <button onClick={() => router.push('/UserView')}>Gå tillbaka
        </button>
        </>
    )
    
}

export default About