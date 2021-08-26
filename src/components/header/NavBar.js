import React, { useContext, useState } from 'react'
import { uiContext } from '../../context/uiContext';
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { types } from '../../types/types';
import { BurgerButton } from './smallScreen/BurgerButton';
import { MenuScreen } from './smallScreen/MenuScreen';

export const NavBar = () => {

    const { width } = useWindowDimensions();

    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar__box">

                    <div className="navbar__logo">
                        LOGO    
                    </div>

                </div>
                <div className="navbar__box">

                    {
                        (width < 800) ? 
                            (
                                <BurgerButton/>
                            ) 
                            :
                            (

                                <div className="navbar__links">
                            
                                    <a href="#">HOME</a>
                                    <a href="#">ABOUT</a>
                                    <a href="#">PROYECTS</a>
                                    <a href="#">CONTACT</a>
                                </div>


                            )
                    }
                </div>
            </div>
        </div>
    )
}
