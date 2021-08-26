import React, { useContext } from 'react'
import { MenuScreen } from '../components/header/smallScreen/MenuScreen'
import { NavBar } from '../components/header/NavBar'
import { HomeScreen } from '../components/HomeScreen'
import { uiContext } from '../context/uiContext'

export const AppRuter = () => {

    const { state: {menu} } = useContext(uiContext)

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
