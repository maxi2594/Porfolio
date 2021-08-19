import React from 'react'
import { Hero } from './main/heroSection/Hero'
import { IconsList } from './main/iconSection/IconsList'

export const HomeScreen = () => {
    return (
        <>
            <main>
                <Hero/>
                <IconsList/>
            </main>   
        </>
    )
}
