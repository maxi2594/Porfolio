import React from 'react'
import { Icon } from './Icon'

export const IconsList = () => {

    const icons = [
        {
            languaje : 'html', 
            icon: 'devicon-html5-plain-wordmark'
        },
        {
            languaje : 'css', 
            icon: 'devicon-css3-plain-wordmark'
        },
        {
            languaje : 'javascript', 
            icon: 'devicon-javascript-plain'
        },
        {
            languaje : 'nodejs', 
            icon: 'devicon-nodejs-plain'
        },
        {
            languaje : 'react', 
            icon: 'devicon-react-original'
        },
        {
            languaje : 'sass', 
            icon: 'devicon-sass-original'
        },
    ]

    return (
            
            <div className="container iconsList">
                <div className="iconsList__section">
                {
                    icons.map( icon => (
                        
                        <Icon icon={icon.icon}/>
                    ))
                }
                </div>
            </div>
    )
}
