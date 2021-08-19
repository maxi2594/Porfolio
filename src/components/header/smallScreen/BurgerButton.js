import React, { useContext } from 'react'
import { uiContext } from '../../../context/uiContext'
import { types } from '../../../types/types'

export const BurgerButton = () => {

    const { dispatch } = useContext(uiContext)

    const handleBurgerClick = ()=>
    {
        dispatch({
            type: types.showMenu
        })
    }
    
    return (

            <div 
                className="navbar__burger-button"
                onClick={ handleBurgerClick }
            >
                <div className="circle">
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
        </div>
    )
}
