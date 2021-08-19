// menu for screen less than 800px

import React, { useContext } from 'react'
import { uiContext } from '../../../context/uiContext';
import { types } from '../../../types/types';
import { MenuOption } from './MenuOption'

const menuOptions = ['home', 'abaut', 'projects', 'contact'];

export const MenuScreen = () => {

    const { dispatch } = useContext(uiContext)

    const handleCloseMenu = ()=>
    {
        dispatch({
            type: types.hideMenu
        })
    }

    return (
        <div className="menu animate__animated animate__fadeIn animate__delay-.3s">
            <div className="menu__header">

                <div 
                    className="menu__close-button"
                    onClick={ handleCloseMenu }
                >


                <i className="far fa-window-close fa-3x"></i>     
                </div>
            </div>
            <div className="menu__content">
                <div className="menu__options">
                    {
                        menuOptions.map( (option, i) =>(
                            
                            <MenuOption
                                indice = { i }
                                key={ option } 
                                option={ option }
                            />
                        ))
                    }
                </div>
            </div>      
        </div>
    )
}
