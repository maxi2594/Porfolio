// menu for screen less than 800px

import React from 'react'
import { MenuOption } from './MenuOption'

const menuOptions = ['home', 'abaut', 'projects', 'contact'];

export const MenuScreen = () => {
    return (
        <div className="menu">
            <div className="menu__header">
                <div className="menu__close-button">
                <i className="far fa-window-close fa-3x"></i>     
                </div>
            </div>
            <div className="menu__content">
                <div className="menu__options">
                    {
                        menuOptions.map( option =>(
                            
                            <MenuOption
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
