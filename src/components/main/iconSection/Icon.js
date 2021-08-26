import React from 'react'

export const Icon = ({ icon }) => {
    return (
        <div className="iconsList__icon-box">
            <i 
                className={icon}
            ></i>
        </div>
    )
}
