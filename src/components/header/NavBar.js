import React, { useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { MenuScreen } from './MenuScreen';

export const NavBar = () => {

    const { width } = useWindowDimensions();


    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar__logo">
                    LOGO    
                </div>

                {
                    (width < 800) ? 
                        (
                        <div className="navbar__burger-button">
                            <div className="circle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                            </div>
                        </div>
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
    )
}
