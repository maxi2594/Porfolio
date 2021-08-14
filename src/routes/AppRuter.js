import React, { useContext } from 'react'
import { MenuScreen } from '../components/header/MenuScreen'
import { NavBar } from '../components/header/NavBar'
import { HomeScreen } from '../components/HomeScreen'
import { uiContext } from '../context/uiContext'

export const AppRuter = () => {

    const { menu } = useContext(uiContext)
    
    if(menu.active){
        return (<MenuScreen/>)
    }
    return (
        <>
            <header >
              <NavBar/>
            </header>

            <HomeScreen/>     
        </>
    )
}
