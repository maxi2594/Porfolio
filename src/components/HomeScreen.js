import React from 'react'
import { Hero } from './main/heroSection/Hero'
import { IconsList } from './main/iconSection/IconsList'
import { PhraseBox } from './main/phraseSection/PhraseBox'

export const HomeScreen = () => {
    return (
        <>
            <main>
                <Hero/>
                <IconsList/>
                <PhraseBox/>
                <div style={{
                    height:'900px',
                    width: '100%'
                }}>hello</div>
            </main>   
        </>
    )
}
